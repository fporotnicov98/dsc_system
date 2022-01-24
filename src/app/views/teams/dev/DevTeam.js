import React, { useState, useEffect } from 'react'
import {
  Grid,
  Card,
  Avatar,
  Divider,
  Icon,
  Grow,
  TablePagination,
  Button,
  IconButton,
  Tooltip,
  TextField,
} from '@material-ui/core'
import ProfileCard2 from './ProfileCard2'
import { makeStyles } from '@material-ui/core/styles'
import { observer } from 'mobx-react-lite'
import { MatxLoading } from 'app/components'
import { NavLink } from "react-router-dom";
import dayjs from 'dayjs';
import MUIDataTable from 'mui-datatables'


const useStyles = makeStyles(({ palette, ...theme }) => ({
  review: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.25rem'
  },
  resposible: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.25rem'
  },
  reviewers: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '15px',
    '&:last-child': {
      margin: 0
    }
  }
}))

const DevTeam = observer(({ UserStore }) => {
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [page, setPage] = useState(0)

  const classes = useStyles()

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const {
    getUsers,
    users
  } = UserStore

  useEffect(() => {
    getUsers();
  }, [getUsers])

  if (!users) {
    return <MatxLoading />
  }

  const firstNameUser = users[0].firstName
  const lastNameUser = users[0].lastName

  const repositories = [
    {
      _id: 1,
      repo_name: 'dsc_system',
      created_date: '2021-11-23T15:49:34Z',
      owner: 'fporotnicov98',
      github_url: 'https://github.com/fporotnicov98/dsc_system'
    },
    {
      _id: 2,
      repo_name: 'dsc_system_back',
      created_date: '2021-11-23T16:00:37Z',
      owner: 'fporotnicov98',
      github_url: 'https://github.com/fporotnicov98/dsc_system_back'
    },
    {
      _id: 3,
      repo_name: 'department-website',
      created_date: '2020-05-25T12:26:16Z',
      owner: 'fporotnicov98',
      github_url: 'https://github.com/fporotnicov98/department-website'
    }
  ]

  const columns = [
    {
      name: 'projectName',
      label: 'Название репозитория',
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => (
          <NavLink to={`/repositories`} className="ellipsis">
            {repositories[dataIndex].repo_name}
          </NavLink>
        ),
      },
    },
    {
      name: 'date',
      label: 'Дата создания',
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => {
          return (
            <span className="ellipsis">
              {dayjs(repositories[dataIndex].created_date).format('DD-MM-YYYY HH:mm')}
            </span>
          )
        }
      },
    },
    {
      name: 'date',
      label: 'Владелец',
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => {
          return (
            <span className="ellipsis">
              {repositories[dataIndex].owner}
            </span>
          )
        }
      },
    },
    {
      name: 'date',
      label: 'Ссылка на GitHub',
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => {
          return (
            <a href={repositories[dataIndex].github_url} className="ellipsis">
              {repositories[dataIndex].github_url}
            </a>
          )
        }
      },
    }
  ]

  return (
    <div className="m-sm-30">
      <h4>Команда разработки</h4>
      <Grid container spacing={2}>
        <Grid item md={7} sm={12} xs={12}>
          <h5>Управление командой</h5>
          <Card>
            <span className="flex justify-end text-primary m-2"><Icon>settings</Icon></span>
            <div className="p--8 flex items-end justify-around">
              <div className={classes.resposible}>
                <Avatar
                  className="h-56 w-56 mb-6"
                />
                <h5 className="mb-2">{`${firstNameUser} ${lastNameUser}`}</h5>
                <p className="mt-0 mb-2 text-muted font-normal capitalize">
                  Ответственный
                </p>
              </div>
              <div className={classes.review}>
                <div className={classes.reviewers}>
                  {
                    users.slice(1, 4).map((user) => {
                      return (
                        <div className={classes.avatar}>
                          <Avatar
                            className="h-36 w-36 mb-2"
                          />
                          <h6 className="mb-2">{`${user?.lastName} ${user?.firstName}`}</h6>
                        </div>
                      )
                    })
                  }
                </div>
                <p className="mt-0 mb-2 text-muted font-normal capitalize">
                  Код-ревью
                </p>
              </div>
            </div>
            <Divider className="mb-8" />
            <div className="m-5">
              <h3 className="text-muted mt-0 mb-4">Управление репозиториями кода GitHub</h3>
              {/* <h5 className="mb-4">На данный момент у вас нет подключенных репозиториев</h5> */}
              <div className="mb-4 flex items-center">
                {/* <TextField
                  label="Репозиторий"
                  variant="outlined"
                  size="small"
                  className="mr-4"
                  placeholder="Введите название репозитория..."
                /> */}
                <Button
                  size="small"
                  className="bg-light-primary hover-bg-primary text-primary px-5 mr-1"
                >
                  Найти существующий репозиторий
                </Button>
                <span className=" ml-4 mr-4 flex">или</span>
                <Button
                  size="small"
                  className="bg-light-primary hover-bg-primary text-primary px-5 mr-1"
                >
                  Создать новый
                </Button>
              </div>
              <MUIDataTable
                title={'Подключенные репозитории'}
                data={repositories}
                columns={columns}
                options={{
                  filterType: 'textField',
                  responsive: 'standard',
                  elevation: 0,
                  rowsPerPageOptions: [10, 20, 40, 80, 100],
                  onRowsDelete: ({ data }) => {
                    const id = repositories[data[0].dataIndex]._id
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
          </Card>
        </Grid>
        <Grid item md={5} sm={12} xs={12}>
          <h6>Состав команды</h6>
          {users
            .slice(
              page * rowsPerPage,
              page * rowsPerPage + rowsPerPage
            )
            .map((user, ind) => (
              <ProfileCard2 key={user._id} user={user} />
            ))}
          <div className="mt-4">
            <TablePagination
              className="px-4"
              rowsPerPageOptions={[10, 25, 50]}
              component="div"
              count={users.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  )
})

export default DevTeam
