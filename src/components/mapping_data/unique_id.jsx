import React from "react";
import { v4 as uuidv4 } from "uuid";

const todos = [
  {
     id: uuidv4(),
    title: "todo 1",
    desc: "todo 1 description",
  },
  {
    id: uuidv4(),
    title: "todo 2",
    desc: "todo 2 description",
  },
  {
    id: uuidv4(),
    title: "todo 3",
    desc: "todo 3 description",
  },
];

const UniqueId = () => {
  
  return (
    <div>
      {todos.map((todo) => {
        const {id,title,desc} = todo
        return (
          <div key={id}>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UniqueId;
