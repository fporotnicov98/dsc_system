import React, { useEffect } from 'react'
import {
  Grid,
  Card,
  Divider,
  Button,
  Icon,
} from '@material-ui/core'
import GetUsers from './GetUsers';
import { MatxLoading } from 'app/components';
import { observer } from 'mobx-react-lite';

const AllTeams = observer(({ UserStore }) => {

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

  return (
    <div className="m-sm-30">
      <Grid container spacing={2}>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Card className="p-4">
            <h4>Команда разработки</h4>
            <Divider className="mb-4 mt-4" />
            <Button
              variant="outlined"
              color="primary"
            >
              <Icon>add</Icon>
              <span className="ml-3">Добавить пользователя</span>
            </Button>
            <Divider className="mb-4 mt-4" />
            <GetUsers
              users={users}
            />
          </Card>
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Card className="p-4">
            <h4>Команда администрирования</h4>
            <Divider className="mb-4 mt-4" />
            <Button
              variant="outlined"
              color="primary"
            >
              <Icon>add</Icon>
              <span className="ml-3">Добавить пользователя</span>
            </Button>
            <Divider className="mb-4 mt-4" />
            <GetUsers
              users={usersDev}
            />
          </Card>
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Card className="p-4">
            <h4>Команда безопасности</h4>
            <Divider className="mb-4 mt-4" />
            <Button
              variant="outlined"
              color="primary"
            >
              <Icon>add</Icon>
              <span className="ml-3">Добавить пользователя</span>
            </Button>
            <Divider className="mb-4 mt-4" />
            <GetUsers
              users={usersSec}
            />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
})

const usersDev = [
  {
    email: "n.litvinova@gmail.com",
    firstName: "Наталья",
    lastName: "Литвинова",
    star: true
  },
  {
    email: "e.trifonenko@gmail.com",
    firstName: "Елена",
    lastName: "Трифоненко",
  },
  {
    email: "v.masurov@gmail.com",
    firstName: "Владимир",
    lastName: "Мазуров",
  },
  {
    email: "k.shukin@gmail.com",
    firstName: "Константин",
    lastName: "Щукин",
  }
]

const usersSec = [
  {
    email: "v.bogdanova@gmail.com",
    firstName: "Валерия",
    lastName: "Богданова",
  },
  {
    email: "m.chalkov@gmail.com",
    firstName: "Максим",
    lastName: "Чалков",
  },
  {
    email: "k.kolchakova@gmail.com",
    firstName: "Ксения",
    lastName: "Колчакова",
  },
  {
    email: "e.maksimov@gmail.com",
    firstName: "Евгений",
    lastName: "Максимов",
    star: true
  },
  {
    email: "v.gorshkov@gmail.com",
    firstName: "Виктор",
    lastName: "Горшков",
  }
]

export default AllTeams;