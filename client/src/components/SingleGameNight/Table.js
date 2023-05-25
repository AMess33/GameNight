import React, { useState } from "react";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

// import { useMutation } from '@apollo/client';
// import { UPDATE_TABLE } from '../../utils/mutations';

const Table = ({ game }) => {
  const [tableData, setTableData] = useState(game.table);

  // const [updateTable] = useMutation(UPDATE_TABLE)

  const handleCellChange = (e, row, col) => {
    let newTable = [...tableData];
    newTable[row][col] = e.target.value;
    setTableData(newTable);
  };

  return (
    <>
      <table>
        <tbody>
          {tableData.map((row, rowIndex) => {
            return (
              <>
                <tr>
                  {row.map((_, colIndex) => {
                    return (
                      <td>
                        <input
                          type="text"
                          style={{ width: "100%", margin: 0, padding: 0 }}
                          onChange={(e) => {
                            handleCellChange(e, rowIndex, colIndex);
                          }}
                          value={tableData[rowIndex][colIndex]}
                        />
                      </td>
                    );
                  })}
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      <Stack direction="horizontal" gap={3} className="my-2">
        <Button
          size="sm"
          variant="outline-light"
          onClick={(e) => {
            if (!tableData.length) {
              setTableData([["", ""]]);
              return;
            }
            const colNums = tableData[0].length;
            const toAdd = Array(colNums).fill("");
            setTableData([...tableData, toAdd]);
          }}
        >
          Add Row
        </Button>
        <Button
          size="sm"
          variant="outline-light"
          onClick={(e) => {
            if (!tableData.length) {
              setTableData([[""], [""]]);
            }
            let newTable = [];
            for (let i = 0; i < tableData.length; i++) {
              newTable.push([...tableData[i], ""]);
            }
            setTableData(newTable);
          }}
        >
          Add Column
        </Button>
      </Stack>
    </>
  );
};

export default Table;
