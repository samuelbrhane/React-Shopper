import React, { useEffect, useState } from "react";
import { Create, Loader, Navbar, Title } from "../components";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { db, storage } from "../firebase/config";
import { v4 as uuidv4 } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const categories = ["New Arrival", "Special Sell", "Women", "Men", "Children"];

const Dashboard = () => {
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inputData, setInputData] = useState({
    vendor: "",
    oldPrice: "",
    currentPrice: "",
    type: "",
    description: "",
  });
  const [checkedState, setCheckedState] = useState(
    new Array(categories.length).fill(false)
  );

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  // handle image file
  const imageChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImages((prev) => [...prev, newImage]);
    }
  };

  // handle category check
  const handleCheck = (position) => {
    setCheckedState(
      checkedState.map((item, index) => (index === position ? !item : item))
    );
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Upload images to firebase storage
    const storeImage = async (image) => {
      return new Promise((resolve, reject) => {
        const filename = `${image.name}-${uuidv4()}`;
        const storageRef = ref(storage, filename);
        const uploadTask = uploadBytesResumable(storageRef, image);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
              default:
                console.log("Uploaded");
            }
          },
          (error) => {
            // Handle unsuccessful uploads
            reject(error);
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              resolve(downloadURL);
            });
          }
        );
      });
    };

    const imageUrls = await Promise.all(
      [...images].map((image) => storeImage(image))
    ).catch((error) => {
      setLoading(false);
      toast.error("Images not uploaded");
      return;
    });

    let category = [];

    checkedState?.map((state, index) => {
      if (state === true) {
        category.push(categories.at(index));
      }
    });
    const formData = {
      ...inputData,
      category,
      imageUrls,
      timestamp: new Date().getTime(),
    };
    await addDoc(collection(db, "products"), formData);
    setInputData({
      vendor: "",
      oldPrice: "",
      currentPrice: "",
      type: "",
      description: "",
    });
    setCheckedState(new Array(categories.length).fill(false));
    setImages([]);
    setLoading(false);
  };

  useEffect(() => {
    const getAdmin = async () => {
      getDoc(doc(db, "admin", process.env.REACT_APP_ADMIN_ID)).then((res) => {
        const user = JSON.parse(localStorage.getItem("shoppersUser"));
        if (res.data().email !== user?.email) {
          navigate("/admin/login");
        } else {
          setUserLogin(res.data());
        }
      });
      setLoading(false);
    };
    getAdmin();
  }, [navigate]);

  if (loading || !userLogin) return <Loader />;

  return (
    <>
      <div>
        <Navbar />
        <div className="mt-[90px] flex flex-col md:flex-row px-4 justify-between gap-6 md:gap-12">
          <div className="flex flex-col items-center">
            <Title title="Create a product" underline={true} />
            <Create
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              handleCheck={handleCheck}
              inputData={inputData}
              checkedState={checkedState}
              categories={categories}
              imageChange={imageChange}
            />
          </div>
          <div>
            <Title title="Products" />
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Dashboard;
