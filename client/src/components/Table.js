import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Table = (props) => {
  const gameRows = ["Players", "sarah", "jim", "joy"];
  const gameColumns = ["first round", "second round", "total"];
  // const gameColumns = [];

  const [rows, setRows] = React.useState([...gameRows]);
  const [columns, setColumns] = React.useState([...gameColumns]);

  const addRow = () => {
    setRows((prev) => [...prev, ""]);
  };

  const addColumn = () => {
    setColumns((prev) => [...prev, ""]);
  };
  return (
    <div>
      <div className="table margins">
        {rows.map((row) => (
          <div className="tableRow">
            <input type="text" className="rowStart cell" />
            {columns.map((column) => (
              <input type="text" className="cell" />
            ))}
          </div>
        ))}
      </div>
      <button className="margins addBtn" onClick={addRow}>
        Add row
      </button>
      <button className="margins addBtn" onClick={addColumn}>
        Add column
      </button>
    </div>
  );
};

export default Table;
