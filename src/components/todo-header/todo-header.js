import React from "react";
import { Link } from "react-router-dom";
import "./todo-header.css";

const TodoHeader = ({ title }) => {

  const newTitle = title || "Todo App"


  return (
    <div className="header">
      <h1>{newTitle}</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/comments">Comments</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TodoHeader;
