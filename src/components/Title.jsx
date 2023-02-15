const Title = ({ title, underline }) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="text-[rgb(6, 85, 85)] relative z-30">
        <p className="text-3xl font-bold">{title}</p>
        <span className="p-4 bg-gradient-to-l from-blue-600 to-green-200 rounded-full absolute top-[-3px] left-[-10px] -z-10"></span>
      </div>
      {underline && (
        <div className="w-[140px] bg-[rgb(142, 17, 153)] border-2 border-[rgb(142, 17, 153)] rounded-sm mb-2 mt-2"></div>
      )}
    </div>
  );
};

export default Title;
