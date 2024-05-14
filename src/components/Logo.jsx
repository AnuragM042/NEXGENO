const Logo = () => {
  const imagePaths = ["logo1", "logo2", "logo3", "logo4"];
  return (
    <div className="px-44 flex items-center justify-between py-20">
      {imagePaths.map((item) => (
        <img
          className="grayscale hover:grayscale-0 cursor-pointer"
          src={`./src/assets/${item}.png`}
        />
      ))}
    </div>
  );
};

export default Logo;
