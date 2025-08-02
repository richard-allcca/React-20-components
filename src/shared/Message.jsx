import PropTypes from 'prop-types';

const Message = ({ msg, bgColor }) => {
  const styles = {
    padding: "1rem",
    marginBottom: "1rem",
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: bgColor,
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s ease",
    cursor: "pointer",
  };

  return (
    <div style={styles}>
      <p>{msg}</p>
    </div>
  );
};

Message.propTypes = {
  msg: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
};

export default Message;
