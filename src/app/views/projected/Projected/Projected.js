import React, { Component } from 'react';
import { Button, Grow, Icon, IconButton, TextField, Tooltip, Link } from '@material-ui/core'
import MUIDataTable from 'mui-datatables'
import history from 'history.js';
import { MatxLoading } from 'app/components';
import { inject } from 'mobx-react';
import { toJS } from 'mobx';
import dayjs from 'dayjs';

@inject(({ ProjectStore }) => {
  return {
    allProject: toJS(ProjectStore.allProject),
    getAllProjects: ProjectStore.getAllProjects
  }
})

class Projected extends Component {
  componentDidMount() {
    this.props.getAllProjects()
  }

  render() {
    const {
      allProject
    } = this.props

    const columns = [
      {
        name: 'projectName',
        label: 'Название проекта',
        options: {
          filter: true,
          customBodyRenderLite: (dataIndex) => (
            <span className="ellipsis">
              {allProject[dataIndex].projectName}
            </span>
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
              <Tooltip title="Mark as Delivered">
                <IconButton>
                  <Icon className="text-green" fontSize="small">
                    done
                  </Icon>
                </IconButton>
              </Tooltip>
              <Tooltip title="Cancel Order">
                <IconButton>
                  <Icon color="error" fontSize="small">
                    clear
                  </Icon>
                </IconButton>
              </Tooltip>
              <Link to={`/invoice/${allProject[dataIndex]._id}`}>
                <Tooltip title="View Order">
                  <IconButton>
                    <Icon fontSize="small">
                      arrow_right_alt
                    </Icon>
                  </IconButton>
                </Tooltip>
              </Link>
            </div>
          ),
        },
      },
    ]

    if (!allProject) {
      return <MatxLoading />
    }

    return (
      <div className="m-sm-30">
        <div className="overflow-auto">
          <Button
            variant="contained"
            color="primary"
            className="mb-4"
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
                onRowsDelete: (data) => console.log(data),
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
  }
}

export default Projected;