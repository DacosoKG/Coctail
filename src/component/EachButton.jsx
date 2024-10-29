import React from "react";

export default function EachButton({ name, handleCategory }) {
  return (
    <li onClick={() => handleCategory(name)} className="list-item" id="All">
      {name}
    </li>
  );
}
