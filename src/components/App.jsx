import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [Notes, setNotes] = useState([]);

  function checkedHandler(note) {
    setNotes((preVal) => {
      return [...preVal, note];
    });
  }

  function onDelete(id) {
    setNotes((preVal) => {
      return preVal.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onChecked={checkedHandler} />
      {Notes.map((newNote, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={newNote.title}
            content={newNote.content}
            onChecked={onDelete}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
