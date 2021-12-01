import React, { useEffect } from 'react'
import MUIDataTable from 'mui-datatables'
import { Avatar, Button, Grow, Icon, IconButton, TextField } from '@material-ui/core'
import NewUserComponent from '../NewUser'
import { observer } from 'mobx-react-lite'
import { MatxLoading } from 'app/components'

const UserList = observer(({ UserStore }) => {
  const [openAdd, setOpen] = React.useState(false)
  const [openUpdate, setOpenUpdate] = React.useState(false)
  const [action, setAction] = React.useState(null)
  const {
    getUsers,
    users
  } = UserStore

  const handleClickOpenAdd = () => {
    setOpen(true)
    setAction('add')
  }

  const handleClickOpenUpdate = () => {
    setOpenUpdate(true)
    setAction('update')
  }

  const handleCloseAdd = () => {
    setOpen(false)
  }

  const handleCloseUpdate = () => {
    setOpenUpdate(false)
  }

  useEffect(() => {
    getUsers();
  }, [getUsers])

  const columns = [
    {
      name: 'name',
      label: 'Name',
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
        filter: true
      },
    },
    {
      name: 'phone',
      label: 'Номер телефона',
      options: {
        filter: true
      },
    },
    {
      name: 'role',
      label: 'Роль',
      options: {
        filter: true
      },
    },
    {
      name: 'action',
      label: ' ',
      options: {
        filter: false,
        customBodyRenderLite: () => (
          <div className="flex items-center">
            <div className="flex-grow"></div>
            <IconButton
              onClick={handleClickOpenUpdate}
            >
              <Icon>edit</Icon>
            </IconButton>
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
          onClick={handleClickOpenAdd}
        >
          <Icon>add</Icon>
          <span className="ml-3">Добавить пользователя</span>
        </Button>
        <NewUserComponent
          openAdd={openAdd}
          openUpdate={openUpdate}
          handleCloseUpdate={handleCloseUpdate}
          handleCloseAdd={handleCloseAdd}
          action={action}
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
