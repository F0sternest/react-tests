import PropTypes from "prop-types";

export const Button = ({ text, name = "user" }) => {
  if (!text) {
    console.warn("El boton necesita texto");
  }

  return (
    <button>
      {text} usuario {name}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
