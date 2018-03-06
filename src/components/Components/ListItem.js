import React from "react";
import "./../../css/Components/ListItem.css";

const ListItem = data => {
  console.log(data);
  return (
    <div className="list-item">
      <h3 className="title">{data.item.primary.listtitle["0"].text}</h3>
      {data.item.items.map((item, index) => (
        <h3 className="serif" key={index}>
          {item.listdescription["0"].text}
        </h3>
      ))}
    </div>
  );
};

export default ListItem;
