import React, { useState, useEffect } from 'react'
import {
  Grid,
  Card,
  Avatar,
  Divider,
  Icon,
  TablePagination,
} from '@material-ui/core'
import ProfileCard2 from './ProfileCard2'
import { makeStyles } from '@material-ui/core/styles'
import { observer } from 'mobx-react-lite'
import { MatxLoading } from 'app/components'


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

  return (
    <div className="m-sm-30">
      <h4>Команда разработки</h4>
      <Grid container spacing={2}>
        <Grid item md={7} sm={12} xs={12}>
          <h5>Управление командой</h5>
          <Card className="pb-4">
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
              <p className="text-muted mt-0 mb-4">Соединение с Git-репозиториями</p>
              <div>
                <h5>На данный момент у вас нет подключенных репозиториев</h5>
              </div>
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
