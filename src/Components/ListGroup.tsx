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
  return (
    <div>
      <h1>List of Sabi GT</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
