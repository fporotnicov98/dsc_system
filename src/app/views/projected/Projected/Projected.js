import React, { useEffect } from 'react';
import { Button, Grow, Icon, IconButton, TextField, Tooltip } from '@material-ui/core'
import MUIDataTable from 'mui-datatables'
import history from 'history.js';
import { MatxLoading } from 'app/components';
import { NavLink } from "react-router-dom";
import dayjs from 'dayjs';
import { observer } from 'mobx-react-lite';

const Projected = observer(({ ProjectStore }) => {
  const {
    getProjects,
    allProject,
    deleteProject
  } = ProjectStore

  useEffect(() => {
    getProjects();
  }, [getProjects])

  console.log(allProject)

  const columns = [
    {
      name: 'projectName',
      label: 'Название проекта',
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => (
          <NavLink to={`/projects/${allProject[dataIndex]._id}`} className="ellipsis">
            {allProject[dataIndex].projectName}
          </NavLink>
        ),
      },
    },
    {
      name: 'date',
      label: 'Дата',
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => {
          return (
            <span className="ellipsis">
              {dayjs(allProject[dataIndex].date).format('DD-MM-YYYY HH:mm')}
            </span>
          )
        }
      },
    },
    {
      name: 'status',
      label: 'Статус',
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => {
          let status = allProject[dataIndex].status

          switch (status) {
            case 'создан':
              return (
                <small className="capitalize text-white bg-green border-radius-4 px-2 py-2px">
                  {status}
                </small>
              )
            case 'запущен':
              return (
                <small className="capitalize bg-secondary border-radius-4 px-2 py-2px">
                  {status}
                </small>
              )
            case 'завершен':
              return (
                <small className="capitalize text-white bg-error border-radius-4 px-2 py-2px">
                  {status}
                </small>
              )

            default:
              break
          }
        },
      },
    },

    {
      name: 'action',
      label: ' ',
      options: {
        filter: false,
        customBodyRenderLite: (dataIndex) => (
          <div className="flex items-center">
            <div className="flex-grow"></div>
            <Tooltip title="Изменить данные проекта">
              <NavLink to={`/projects/${allProject[dataIndex]._id}`}>
                <IconButton>
                  <Icon className="text-green" fontSize="small">
                    edit
                  </Icon>
                </IconButton>
              </NavLink>
            </Tooltip>
          </div>
        )
      }
    }
  ]

  if (!allProject) {
    return <MatxLoading />
  }

  return (
    <div className="m-sm-30">
      <div className="overflow-auto">
        <Button
          variant="outlined"
          className="mb-4"
          color="primary"
          onClick={() => {
            history.push('/projected/add-project')
          }}
        >
          <Icon>add</Icon>
          <span className="ml-2">Создать проект</span>
        </Button>
        <div className="min-w-750">
          <MUIDataTable
            title={'Ваши проекты'}
            data={allProject}
            columns={columns}
            options={{
              filterType: 'textField',
              responsive: 'standard',
              elevation: 0,
              rowsPerPageOptions: [10, 20, 40, 80, 100],
              onRowsDelete: ({ data }) => {
                const id = allProject[data[0].dataIndex]._id
                deleteProject(id)
              },
              customSearchRender: (
                searchText,
                handleSearch,
                hideSearch,
                options
              ) => {
                return (
                  <Grow appear in={true} timeout={300}>
                    <TextField
                      variant="outlined"
                      size="small"
                      fullWidth
                      onChange={({ target: { value } }) =>
                        handleSearch(value)
                      }
                      InputProps={{
                        style: {
                          paddingRight: 0,
                        },
                        startAdornment: (
                          <Icon
                            className="mr-2"
                            fontSize="small"
                          >
                            search
                          </Icon>
                        ),
                        endAdornment: (
                          <IconButton
                            onClick={hideSearch}
                          >
                            <Icon fontSize="small">
                              clear
                            </Icon>
                          </IconButton>
                        ),
                      }}
                    />
                  </Grow>
                )
              },
            }}
          />
        </div>
      </div>
    </div>
  )
})

export default Projected;