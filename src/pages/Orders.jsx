import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Loader, Navbar } from "../components";
import { db } from "../firebase/config";
import moment from "moment";

const Orders = () => {
  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem("shoppersUser"));

  // fetch user orders
  useEffect(() => {
    if (user) {
      onSnapshot(
        query(
          collection(db, "users", user?.email, "orders"),
          orderBy("timestamp", "desc")
        ),
        (snapshot) => setOrders(snapshot.docs)
      );
    }
    setLoading(false);
  }, [user]);

  if (loading || !orders) return <Loader />;

  return (
    <div>
      <Navbar />
      <div className="mt-[80px] px-4 md:px-8">
        {orders?.length === 0 ? (
          <h1 className="font-bold text-xl mb-2">Your Order is Empty.</h1>
        ) : (
          <div>
            <h1 className="font-bold text-xl mb-2">Your Orders</h1>

            {orders?.map((order, index) => {
              return (
                <div key={index} className="shadow mb-2">
                  <div className="flex justify-between p-2 px-4 bg-blue-50">
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <p className="md:text-lg text-[16px] font-semibold">
                          Order Date
                        </p>
                        <p className="text-sm">
                          {moment
                            .unix(order?.data()?.timestamp?.seconds)
                            .format("DD MMM YYYY")}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="md:text-lg text-[16px] font-semibold">
                          Total Items
                        </p>
                        <p className="text-sm">
                          {order?.data()?.images?.length}
                        </p>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="md:text-lg text-[16px] font-semibold">
                        Total Price
                      </p>
                      <p className="text-sm">${order.data().amount}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 py-2 px-4 justify-center md:justify-start">
                    {order?.data()?.images?.map((image, index) => (
                      <img
                        src={image}
                        alt="productImage"
                        key={index}
                        className="w-[120px] h-[120px] rounded"
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
