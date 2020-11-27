import React from "react";

const NumberList = (props) => {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    <li>
      <p>{number}</p>
      <DeleteButton id={number}></DeleteButton>
    </li>
  ));
  return <ul id={props.id}>{listItems}</ul>;
};
const DeleteButton = (props) => {
  return (
    <button
      type="button"
      onClick={() => {
        handleDelete(props.id);
      }}
    >
      X
    </button>
  );
};
const handleDelete = (props) => {};
export default NumberList;
