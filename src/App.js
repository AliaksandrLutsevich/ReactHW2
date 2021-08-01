import React, { } from "react";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
const dispatch = useDispatch();

const number = useSelector((state) => {
 return state.number
});

const isChecked = useSelector((state) => {
  return state.checked
 });

 const isPassword = useSelector((state) => {
  return state.password
 });

const actionPlus = {
  type: "BUTTON_PLUS_CLICK"
}

const actionPassword = {
  type: "PASSWORD_CHANGED"
}

const actionMinus = {
  type: "BUTTON_MINUS_CLICK"
}

const actionCheck = {
  type: "CHECKBOX_CHECKED"
}

const onCheck =() => {
  dispatch(actionCheck)
}

const onPassword =(event) => {
  dispatch({type: "PASSWORD_CHANGED", payload: event.target.value})

}

const onClickPlus =(x) => {
  dispatch({type: "BUTTON_PLUS_CLICK", payload: x})
}

const onClickMinus =(x) => {
  dispatch({type: "BUTTON_MINUS_CLICK", payload: x})
}

  return (
    <>
      <button onClick={ () => onClickPlus(5)}>+</button>
      <button onClick={ () => onClickMinus(5)}>-</button>
      <input onClick={onCheck} type="checkbox" checked={isChecked}/>
      <input type="password" onChange={onPassword} value={isPassword}/>    
    </>
  );
};
export default App;
