import React from 'react';
import {uuid} from '../../Services/UUID';


const TableRow = (props) => {

  const createColumns = (columnData, delimiter) => {
    delimiter = delimiter ? delimiter : ',';
    return columnData.split(delimiter).map((col, index) => props.columns >= index + 1 ?
      <td key={uuid()}>{col}</td> : null);
  };


  return <tr>{createColumns(props.row, props.delimit)}</tr>;

};
export default TableRow;