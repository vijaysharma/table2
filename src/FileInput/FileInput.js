import React from 'react';
import * as classes from './FileInput.module.css';

const FileInput = (props) => (
  <div className={classes.FileInput}>
    <input type="file"
           name="myFile"
           onChange={props.change} />
  </div>
);

export default FileInput;