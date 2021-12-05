import React from 'react'
import {
  Grid,
  Card,
  Avatar,
  Button,
  Icon,
  Tooltip,
} from '@material-ui/core'
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';

const GetUsers = observer(({ users }) => {

  console.log(toJS(users))

  return (
    <Grid container spacing={3}>
      {users.map((user, ind) => (
        <Grid key={user._id} item lg={12} sm={6} xs={12}>
          <Card className="bg-light-primary">
            <div className="flex flex-wrap justify-between items-center m-2">
              <div className="flex items-center m-2">
                <Avatar
                  className="h-48 w-48"
                />
                <div className="ml-4">
                  <h5 className="mb-2">{`${user?.lastName} ${user?.firstName}`}</h5>
                  <div className="flex items-center">
                    <Tooltip title="Назначить ответственным">
                      {user?.star ? <Icon style={{color: 'yellow'}}>star</Icon> : <Icon>star_outline</Icon>}
                    </Tooltip>
                    <small className="px-1 py-2px bg-light-green text-green border-radius-4">
                      {user.email}
                    </small>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap justify-between m-2">
                <div className="flex items-center">
                  <Button
                    size="small"
                    className="bg-light-primary hover-bg-primary text-primary px-5 mr-1"
                  >
                    Чат
                  </Button>
                  <Button
                    size="small"
                    className="bg-light-primary hover-bg-primary text-primary px-5"
                  >
                    Профиль
                  </Button>
                  <Icon>more_vert</Icon>
                </div>
              </div>
            </div>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
})

export default GetUsers