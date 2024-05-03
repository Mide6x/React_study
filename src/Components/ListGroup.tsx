import { MouseEvent } from "react";

function ListGroup() {
  const items = [
    "Ayomide",
    "Dami",
    "Eyimofe",
    "Farouk",
    "Feyisayo",
    "Humainat",
    "Louisa",
    "Olumide",
    "Victor",
  ];

  //click function handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <div>
      <h1>List of Sabi GT</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
