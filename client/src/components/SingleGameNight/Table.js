import React, { useState } from 'react';

const Table = ({ game }) => {

  // useEffect (unmount) to save table if data
  const [tableData, setTableData] = useState(game.table);
  
  const updateTable = (row, column) => {
    return (e) => {
      let newTableData = tableData;
      newTableData[row][column] = e.target.value;
      setTableData(newTableData);
    };
  }

  return (
    <div>
      <div className="table margins">
        {tableData.map((row, rowIndex) => (
          <div className="tableRow">
            {row.map((cell, colIndex) => (
              <input
                type="text"
                className="cell"
                defaultValue={tableData[rowIndex][colIndex]}
                onChange={updateTable(rowIndex, colIndex)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;