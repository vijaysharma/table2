import React, {useState, useEffect} from 'react';
import * as classes from './Table.module.css';
import {uuid} from '../Services/UUID';

import TableRow from './TableRow/TableRow';

const Table = props => {
  const [table, setTable] = useState(null);
  const [inputDisabled, setInputDisabled] = useState(true);

  const getTable = (data, delimiter, lines, columns) => {
    let el = null;
    if (!data) {
      el = <tr>
        <td>Please upload a file</td>
      </tr>;
    } else {
      if (lines === 0 || lines > data.length) {
        el = data.map(row => {
          return <TableRow
            key={uuid()}
            row={row}
            delimit={delimiter}
            columns={columns} />;
        });
      } else {
        el = data.map((row, index) => {
          return lines >= index + 1 && lines < data.length ?
            <TableRow
              key={uuid()}
              row={row}
              delimit={delimiter}
              columns={columns}
            /> : null;
        });
      }
    }
    return el;
  };

  useEffect(() => {
    setTable(getTable(props.data, props.delimiter, +props.line, +props.columns));
    if(table) {
      setInputDisabled(false);
    }
  }, [props.data, props.delimiter, props.line, props.columns, inputDisabled]);

  return (
    <div className={classes.TableWrapper}>
      <label htmlFor="delimit">Delimiter: <br />
        <input
          id='delimit'
          type="text"
          onChange={(e) => props.onDelimiterChange(e)}
          placeholder='eg. ",", "|"'
          disabled={inputDisabled}
        />
      </label>
      <label htmlFor="line">Lines: <br />
        <input
          id='line'
          type="text"
          onChange={(e) => props.onLineChange(e)}
          placeholder='eg. 2,3'
          disabled={inputDisabled}
        />
      </label>
      <table className={classes.Table}>
        <tbody>
        {table}
        </tbody>
      </table>
    </div>
  );
};
Table.defaultProps = {
  columns: 4,
  delimiter: ','
};
export default Table;
