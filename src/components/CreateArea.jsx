import React, { useState } from "react";

function CreateArea(props) {

const [note,setNote]=useState({
  title:"",
  content:""
})

function AddNote(event){
const {name,value}=event.target;
setNote(preValue=>{
  return{
    ...preValue,
    [name]:value
  }
})
}


  return (
    <div>
      <form>
        <input onChange={AddNote} name="title" placeholder="Title"  value={note.title}/>
        <textarea onChange={AddNote} name="content" placeholder="Take a note..." rows="3" value={note.content} />
        <button onClick={(event)=>{
         event.preventDefault();
         props.AddNote(note)
         setNote({
          title:"",
          content:""
         })
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
