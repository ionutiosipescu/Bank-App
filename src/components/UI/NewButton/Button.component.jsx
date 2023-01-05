import "../Button/Button.css";

const Button = ({ children, ...props }) => {
  return (
    <button
      className={`btn btn-${props.size} btn-${props.typeclass} ${props.typeclass}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
