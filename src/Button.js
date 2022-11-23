import PropTypes from "prop-types";

export const Button = ({ text, name = "user" }) => {
  return (
    <button onClick={() => console.log('Hola mundo')}>
      {text} - {name}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string
};
