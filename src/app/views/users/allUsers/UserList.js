import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import MUIDataTable from 'mui-datatables'
import { Avatar, Button, Grow, Icon, IconButton, TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'
import NewUserComponent from '../NewUser'
import { observer } from 'mobx-react-lite'
import { toJS } from 'mobx'
import { MatxLoading } from 'app/components'

const UserList = observer(({ UserStore }) => {
  const [isAlive, setIsAlive] = useState(true)
  const [userList, setUserList] = useState([])
  const [open, setOpen] = React.useState(false)
  const {
    getUsers,
    users
  } = UserStore

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    getUsers();
  }, [getUsers])

  useEffect(() => {
    Axios.get('/api/user/all').then(({ data }) => {
      if (isAlive) setUserList(data)
    })
    return () => setIsAlive(false)
  }, [isAlive])

  const columns = [
    {
      name: 'name', // field name in the row object
      label: 'Name', // column title that will be shown in table
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => {
          let user = users[dataIndex]

          return (
            <div className="flex items-center">
              <Avatar className="w-48 h-48 bg-primary" />
              <div className="ml-3">
                <h5 className="my-0 text-15">{`${user?.lastName} ${user?.firstName}`}</h5>
              </div>
            </div>
          )
        },
      },
    },
    {
      name: 'email',
      label: 'Почта',
      options: {
        filter: true,
        // customBodyRenderLite: (dataIndex) => (
        //   <span className="ellipsis">{userList[dataIndex].address}</span>
        // ),
      },
    },
    {
      name: 'phone',
      label: 'Номер телефона',
      options: {
        filter: true,
      },
    },
    {
      name: 'role',
      label: 'Роль',
      options: {
        filter: true,
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
            <Link to="/pages/new-customer">
              <IconButton>
                <Icon>edit</Icon>
              </IconButton>
            </Link>
            <Link to="/pages/view-customer">
              <IconButton>
                <Icon>arrow_right_alt</Icon>
              </IconButton>
            </Link>
          </div>
        ),
      },
    },
  ]

  if (!users) {
    return <MatxLoading />
  }

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Button
          variant="outlined"
          color="primary"
          onClick={handleClickOpen}
        >
          <Icon>add</Icon>
          <span className="ml-3">Добавить пользователя</span>
        </Button>
        <NewUserComponent
          open={open}
          handleClose={handleClose}
        />
      </div>
      <div className="overflow-auto">
        <div className="min-w-750">
          <MUIDataTable
            title={'Все пользователи'}
            data={users}
            columns={columns}
            options={{
              filterType: 'textField',
              responsive: 'standard',
              // selectableRows: "none", // set checkbox for each row
              // search: false, // set search option
              // filter: false, // set data filter option
              // download: false, // set download option
              // print: false, // set print option
              // pagination: true, //set pagination option
              // viewColumns: false, // set column option
              elevation: 0,
              rowsPerPageOptions: [10, 20, 40, 80, 100],
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

export default UserList
