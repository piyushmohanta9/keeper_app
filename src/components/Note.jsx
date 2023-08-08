import React from "react";

function Note(props) {
  function clickHandler(event) {
    event.preventDefault();
    props.onChecked(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={clickHandler}>DELETE</button>
    </div>
  );
}

export default Note;
