import React from 'react'
import {
  Card,
  Button,
  Avatar,
  Grid,
  Icon
} from '@material-ui/core'
import { GoogleIcon } from 'app/components'
import PhoneIcon from '@material-ui/icons/Phone';
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles(({ palette, ...theme }) => ({
  google: {
    color: '#ec412c',
  },
  twitter: {
    color: '#039ff5',
  },
}))

const ProfileCard2 = ({ user }) => {
  const classes = useStyles()

  return (
    <Card className="mb-4">
      <div className="p-3">
        <Grid container spacing={3} alignItems="center">
          <Grid item sm={4} xs={12}>
            <div className="flex items-center m-2">
              <Avatar className="h-48 w-48" />
              <div className="ml-4">
                <h5 className="m-0">{`${user?.lastName} ${user?.firstName}`}</h5>
              </div>
            </div>
          </Grid>
          <Grid item sm={3} xs={12}>
            <div className="flex mb-1 items-center">
              <GoogleIcon
                fontSize="small"
                className={clsx('text-14', classes.google)}
              />
              <span className="ml-2">{user.email}</span>
            </div>
            <div className="flex items-center">
              <PhoneIcon
                fontSize="small"
                className={clsx('text-14', classes.twitter)}
              />
              <span className="ml-2">{user.phone}</span>
            </div>
          </Grid>
          <Grid item sm={5} xs={12}>
            <div className="flex flex-wrap justify-between items-center px-5 m--2">
              <div className="flex flex-wrap m-2 items-center">
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
          </Grid>
        </Grid>
      </div>
    </Card>
  )
}

export default ProfileCard2
