import React, {useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {setPinCode, setTodos} from "./features/todo/todoSlice";

const numbers = [1, 2, 3 , 4, 5, 6, 7, 8, 9, '<', 0, 'E'];

function App() {
  const input = useSelector(state => state.todos.pinCode);
  const dispatch = useDispatch();
  const onSubmit = (number) => {
      dispatch(setPinCode(number))
  }
  return (
      <div className="App">
        <div>
          {input}
        </div>
        {
          numbers.map((number, index) => {
            return (
              <button key={index} onClick={() => onSubmit(number)}>{number}</button>
          );
        })
        }
      </div>
  );
}

export default App;
