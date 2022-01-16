import { Card, Icon, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { githubApi } from 'config';
import React, { useState } from 'react';
import BrunchMenu from './BrunchMenu';
import FileOpen from './FileOpen';

const columns = [
  { id: 'name', label: 'Наименование', minWidth: '370px' },
  { id: 'size', label: 'Размер (байт)', minWidth: '100px' },
  { id: 'type', label: 'Тип', minWidth: '100px' },
  { id: 'gitUrl', label: 'Ссылка GitHub', minWidth: '100px' }
];

const CodeTab = ({ files }) => {
  const [open, setOpen] = useState(false)
  const [decodeFile, setDecodeFile] = useState('')
  const [fileName, setFileName] = useState('')

  const openFile = async (fileURL) => {
    const file = await fetch(`${githubApi}/repos/fporotnicov98/dsc_system/contents/${fileURL}`)
      .then(res => res.json())

    setDecodeFile(atob(file.content))
    setFileName(fileURL)
    setOpen(true)
  }

  if (open) {
    return (
      <Card>
        <Icon className='m-4' onClick={() => {
          setOpen(false)
        }}>arrow_back</Icon>
        <FileOpen decodeFile={decodeFile} fileName={fileName} />
      </Card>
    )
  }

  return (
    <Card>
      <div className="overflow-auto m-5">
        <BrunchMenu />
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  className="p-2"
                  style={{
                    minWidth: column.minWidth,
                    fontSize: '15px'
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {files.map((file, index) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                <TableCell className="p-3" align="left">
                  {
                    file.size !== 0 ? (
                      <div className="flex items-center">
                        <Icon className="mr-4" fontSize="small">insert_drive_file</Icon>
                        <a href="#">
                          <span onClick={() => openFile(file.name)}>{file.name}</span>
                        </a>
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Icon className="mr-4" fontSize="small">folder_open</Icon>
                        <a href="#">{file.name}</a>
                      </div>
                    )
                  }
                </TableCell>
                <TableCell className="p-3" align="left">
                  {file.size === 0 ? '' : `${file.size} байт`}
                </TableCell>
                <TableCell className="p-3" align="left">
                  {file.type}
                </TableCell>
                <TableCell className="p-3" align="left">
                  <a href={file.html_url}><Icon fontSize="small">open_in_new</Icon></a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};

export default CodeTab;