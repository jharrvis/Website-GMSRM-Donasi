const Hero = ({ title, subTitle, description }) => {
  return (
    <div>
      <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
        {subTitle}
      </div>
      <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl lg:text-slate-800">
        {title}
      </h2>
      <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl lg:text-slate-600 text-center">
        {description}
      </p>
    </div>
  );
};

export default Hero;
