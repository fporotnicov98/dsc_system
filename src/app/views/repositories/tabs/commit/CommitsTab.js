import { Button, Card, Icon, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { githubApi } from 'config';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import BrunchMenu from '../code/BrunchMenu';
import CommitOpen from './CommitOpen';

const columns = [
  { id: 'name', label: 'Сообщение коммита', minWidth: '100px' },
  { id: 'author', label: 'Автор', minWidth: '100px', align: 'center' },
  { id: 'time', label: 'Время изменения', minWidth: '100px' },
  { id: 'sha', label: 'SHA', minWidth: '100px', align: 'center' },
  { id: 'gitUrl', label: 'Ссылка GitHub', minWidth: '100px', align: 'center' }
];

const CommitsTab = ({ commits }) => {
  const [open, setOpen] = useState(false)
  const [commit, setCommit] = useState('')
  const [filesInCommit, setFilesInCommit] = useState([])

  const openFile = async (fileURL) => {
    const commit = await fetch(`${githubApi}/repos/fporotnicov98/dsc_system/commits/${fileURL}`)
      .then(res => res.json())

    setCommit(commit)
    setFilesInCommit(commit.files)
    setOpen(true)
  }

  if (open) {
    return (
      <Card>
        <div className="flex items-center justify-between">
          <Icon className='m-4' onClick={() => {
            setOpen(false)
          }}>arrow_back</Icon>
          <div className='flex items-center'>
            <Button
              variant="contained"
              size="small"
              className='bg-green mr-3'
            >
              Принять изменения
            </Button>
            <Button
              variant="contained"
              size="small"
              className='bg-secondary mr-3'
            >
              На доработку
            </Button>
            <Card className="bg-primary inline-block p-2">
              <span className="text-20 mr-4">{commit.commit.message}</span>
              <span className="text-muted mr-4">{commit.commit.committer.name}</span>
              <span>{dayjs(commit.commit.committer.date).format('DD-MM-YYYY HH:mm')}</span>
            </Card>
          </div>
        </div>
        <CommitOpen filesInCommit={filesInCommit} commit={commit} />
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
            {commits.map((commit, index) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                <TableCell className="p-3" align="left">
                  <div className="flex items-center">
                    <a href="#">
                      <span className="text-brand" onClick={() => openFile(commit.sha)}>{commit.commit.message}</span>
                    </a>
                  </div>
                </TableCell>
                <TableCell className="p-3" align="left">
                  {commit.commit.committer.name}
                </TableCell>
                <TableCell className="p-3" align="left">
                  {dayjs(commit.commit.committer.date).format('DD-MM-YYYY HH:mm')}
                </TableCell>
                <TableCell className="p-3" align="left">
                  {commit.sha}
                </TableCell>
                <TableCell className="p-3" align="center">
                  <a href={commit.html_url}><Icon fontSize="small">open_in_new</Icon></a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};

export default CommitsTab;