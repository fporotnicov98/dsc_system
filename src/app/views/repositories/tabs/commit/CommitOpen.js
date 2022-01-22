import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';
import { MatxLoading } from 'app/components';
import { Card } from '@material-ui/core';
import dayjs from 'dayjs';


const CommitOpen = (props) => {
  const {
    filesInCommit,
    commit
  } = props

  if (!filesInCommit) {
    return <MatxLoading />
  }


  return (
    <div className="overflow-auto mx-5 mb-5">
      {
        filesInCommit.map((item, index) => {
          const decodeValue = item?.patch

          return (
            <React.Fragment>
              <div className="border-radius-4">
                <h4 className="mb-3">{item.filename}</h4>
              </div>
              <CodeMirror
                value={decodeValue}
                theme={oneDark}
                extensions={[javascript({ jsx: true })]}
                onChange={(value, viewUpdate) => {
                  console.log('value:', value);
                }}
              />
            </React.Fragment>

          )
        })
      }
    </div>
  )

};

export default CommitOpen;