import loader from "../assets/loader.gif";

const Loader = () => {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] fixed flex justify-center items-center top-0 bottom-0 left-0 right-0 z-[150]">
      <img src={loader} alt="loader" className="w-[140px] rounded" />
    </div>
  );
};

export default Loader;
