import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

const [notes,AddNotes]=useState([]);

function addNote (note){
  AddNotes(preValues=>{
    return[
      ...preValues,
      note
    ]
  })
}

function deletNote(id){
  AddNotes((preValues)=>{
    return preValues.filter((noteItem,index)=>{
      return index!==id;
    })
  })
}

  return (
    <div>
      <Header />
      <CreateArea AddNote={addNote} />
     { notes.map((noteItem,index)=>{
      return (<Note 
      key={index}
      id={index}
      title={noteItem.title}
      content={noteItem.content}
      deleted={deletNote}
         />)
     })}
      
      <Footer />
    </div>
  );
}

export default App;
