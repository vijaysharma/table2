import React, {Component} from 'react';
import Table from './Table/Table';
import FileInput from './FileInput/FileInput';

import './App.css';

class App extends Component {

  state = {
    textData: '',
    delimiter: ',',
    line: 0,
    loading: false
  };

  readFile = async (e) => {
    e.preventDefault();
    this.setState({loading: true});
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = await (e.target.result);
      this.setState({textData: text.split('\n'), loading: false});
    };
    if (e.target.files[0]) {
      reader.readAsText(e.target.files[0]);
    } else {
      this.setState({loading: false});
    }
  };

  delimiterChange = (e) => {
    this.setState({
      ...this.state,
      delimiter: e.target.value
    });
  };

  lineChange = (e) => {
    this.setState({
      ...this.state,
      line: +e.target.value
    });
  };

  render() {

    return (
      <div className="App">
        <h1>File Upload</h1>
        <FileInput change={(e) => this.readFile(e)} />
        {this.state.loading &&
        <h3>Loading ...</h3>
        }
        <Table
          data={this.state.textData}
          delimiter={this.state.delimiter}
          line={this.state.line}
          onDelimiterChange={this.delimiterChange}
          onLineChange={this.lineChange}
        />
      </div>
    );
  }
}

export default App;