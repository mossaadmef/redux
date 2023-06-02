import React, {useState} from "react";
import { connect } from "react-redux";
import { addTask } from "../JS/Actions/actions";

const AddTask = () => {
    const [list, setList] = useState ([])
    const [description, setDescription] = useState ("");
    const handleAddTask = (e) => {
        e.preventDefault ()
        setList ([...list,{description}])
    }

     return (
        <div >
           <input 
           type="text"
           value={description}
           placeholder="add here"
           onChange={e => setDescription (e.target.value)}
           
           />

           <button type="submit" onSubmit={handleAddTask}> add </button>
        </div>
     )
};

export default AddTask ;
