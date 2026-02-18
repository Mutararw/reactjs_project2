function Popup({ title, closepopup }) {
  return (
    <>
      <div className="backdrop" onClick={() => closepopup()}></div>
      <div className="Popup">
        <span>{title}</span>
        <div className="popup__btns">
          <button
            onClick={() => {
              console.log("confirm button clicked");
              // you can later add real add-todo logic here
              closepopup(); // most apps close popup after confirm
            }}
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
    </>
  );
}

export default Popup;
