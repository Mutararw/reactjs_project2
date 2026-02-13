function Popup({ title, closepopup }) {
  return (
    <>
      <div className="Popup">
        <span>{title}</span>
        <div className="popup__btns">
          <button
            onClick={() => console.log("confirm button clicked")}
            className="popup__btn"
          >
            Confirm
          </button>
          <button
            onClick={() => closepopup()}
            className="popup__btn popup__btn--cancel"
          >
            Cancel
          </button>
        </div>
      </div>
      <div className="backdrop" onClick={()=> closepopup()}></div>
    </>
  );
}

export default Popup;
