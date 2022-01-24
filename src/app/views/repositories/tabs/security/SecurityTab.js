import { Button, Card, Icon, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { githubApi } from 'config';
import dayjs from 'dayjs';
import React, {} from 'react';
import BrunchMenu from '../code/BrunchMenu';

const columns = [
  { id: 'name', label: 'Сообщение коммита', width: '100px', minWidth: '100px' },
  { id: 'author', label: 'Автор', minWidth: '100px', width: '70px', align: 'center' },
  { id: 'time', label: 'Время проверки', minWidth: '100px', width: '60px' },
  { id: 'sha', label: 'SHA', minWidth: '100px', width: '40px', align: 'center' },
  { id: 'gitUrl', label: 'Сcылка GitHub', minWidth: '100px', width: '60px', align: 'center' },
  { id: 'result', label: 'Отчет', minWidth: '100px', width: '70px', align: 'center' }
];

const SecurityTab = ({ actions }) => {
  const {
    total_count,
    workflow_runs
  } = actions

  return (
    <Card>
      <div className="overflow-auto m-5">
        <BrunchMenu />
        <h4>Количество проверок: {total_count}</h4>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  className="p-2"
                  style={{
                    // width: columns.width,
                    width: column.width,
                    fontSize: '15px'
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {workflow_runs.map((runs, index) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                <TableCell className="p-3" align="left">
                  <div className="flex items-center">
                  <Icon className='text-green mr-4' fontSize="small">check_circle</Icon>
                    <a href="#">
                      <span className="text-brand">{runs.head_commit.message}</span>
                    </a>
                  </div>
                </TableCell>
                <TableCell className="p-3" align="center">
                  {runs.head_commit.committer.name}
                </TableCell>
                <TableCell className="p-3" align="center">
                  {dayjs(runs.head_commit.timestamp).format('DD-MM-YYYY HH:mm')}
                </TableCell>
                <TableCell className="p-3" align="center">
                  {runs.head_sha.slice(0, 6)}
                </TableCell>
                <TableCell className="p-3" align="center">
                  <a href={runs.html_url}><Icon fontSize="small">open_in_new</Icon></a>
                </TableCell>
                <TableCell className="p-3" align="center">
                  <Icon fontSize="small">arrow_drop_down_circle</Icon>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};

export default SecurityTab;