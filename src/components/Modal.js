import reactDom from "react-dom";
import classes from "./Modal.module.css";

export default function Modal({ children, closeModal }) {
  const boxA = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 99
  };

  const boxB = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh"
  };
  return reactDom.createPortal(
    <>
      <div className="w3-container w3-yellow w3-opacity" style={boxA}></div>
      <div className="w3-display-container" style={boxB}>
        <div
          className="w3-display-middle w3-center w3-white w3-border w3-round-large"
          style={{ zIndex: 105 }}
        >
          {children}
          <button
            onClick={closeModal}
            className={`w3-btn w3-margin ` + classes.dark}
          >
            Close
          </button>
        </div>
      </div>
    </>,
    document.body
  );
}
