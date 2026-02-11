function Popup({ pop }) {
  return (
    <>
      <div className="Popup">
        <span>{pop}</span>
        <div className="popup_btns">fd
          <button
            onClick={() => console.log("confirm button clicked")}
            className="popup_btn"
          >
            Confirm
          </button>
          <button
            onClick={() => console.log("cancel button clicked")}
            className="popup_btn popup_btn--cancel"
          >
            Cancel
          </button>
        </div>
      </div>
      <div className=""></div>
    </>
  );
}

export default Popup;
