const Title = ({ title, underline }) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-2xl text-[rgb(6, 85, 85)] relative z-30">
        {title}{" "}
        <div className="w-[30px] h-[30px] p-4 bg-gradient-to-l from-purple-600 to-green-200 rounded-full absolute top-[-3px] left-[-10px] -z-10"></div>
      </h1>
      {underline && (
        <div className="w-[100px] bg-[rgb(142, 17, 153)] border-2 border-[rgb(142, 17, 153)] rounded-sm mb-2 mt-1"></div>
      )}
    </div>
  );
};

export default Title;
