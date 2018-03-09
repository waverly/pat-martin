import React from "react";
import "./../../css/Components/ListItem.css";

const ListItem = data => {
  const title = data.item.primary.listtitle["0"].text;
  const lis = data.item.items;
  return (
    <div className="list-item">
      <h3 className="title">{title}</h3>
      {lis.map((item, index) => (
        <h3 className="serif" key={index}>
          {item.listdescription["0"].text}
        </h3>
      ))}
    </div>
  );
};

export default ListItem;
