import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  function changeHandler(event) {
    const { name, value } = event.target;

    setNote((preValue) => {
      return { ...preValue, [name]: value };
    });
  }

  function clickHandler(event) {
    event.preventDefault();
    props.onChecked(note);
    setNote({ title: "", content: "" });
  }

  return (
    <div>
      <form>
        <input
          onChange={changeHandler}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={changeHandler}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={clickHandler}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
