import React,{useState} from "react";
import FormTodo from "./FormTodo";
import TaskList from "./TaskList";
import "../App.scss";
const Container = (props) => {
    const [list,setList] = useState([]);
    const handleAddItem = addItem => {
        setList([...list,addItem]);
    };
    console.log(props.titulo)
  return (
    <div className="Container">
        <h1> {props.titulo}</h1> 
     <FormTodo handleAddItem={handleAddItem}/>
     <TaskList list={list} setList={setList}/>
    </div>
  );
};

export default Container;
