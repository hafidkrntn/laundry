const Button = ({ onClick, className, children, color }) => {
  return (
    <button
      className={`${className} py-2.5 text-black border border-black rounded-xl`}
      onClick={onClick}
      color={color}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;