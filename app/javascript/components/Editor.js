import React from 'react';
import { render } from 'react-dom';
import PropTypes from "prop-types"
import MonacoEditor from 'react-monaco-editor';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: 'Person = Struct.new(:firstname, :lastname, :age)',
    }
  }
  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor);
    editor.focus();
  }
  onChange(newValue, e) {
    console.log('onChange', newValue, e);
  }
  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true
    };
    return (
        <MonacoEditor
    width="800"
    height="600"
    language="ruby"
    theme="vs-dark"
    value={code}
    options={options}
    onChange={this.onChange.bind(this)}
    editorDidMount={this.editorDidMount.bind(this)}
    />
  );
  }
}

export default Editor
