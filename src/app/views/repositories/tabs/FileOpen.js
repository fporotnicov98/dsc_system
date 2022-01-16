import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';


const FileOpen = ({ decodeFile, fileName }) => {
  return (
    <div className="overflow-auto mx-5 mb-5">
      <div className="border-radius-4">
        <h4 className="mb-3">{`dsc_system/${fileName}, 31 строк, 639 байт`}</h4>
      </div>
      <CodeMirror
        value={decodeFile}
        // height="200px"
        theme={oneDark}
        extensions={[javascript({ jsx: true })]}
        onChange={(value, viewUpdate) => {
          console.log('value:', value);
        }}
      />
    </div>
  );
};

export default FileOpen;