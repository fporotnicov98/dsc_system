import React from 'react'
import {
  Grid,
  Button,
  DialogTitle,
  DialogContent
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { Dialog } from '@material-ui/core'
import { observer } from 'mobx-react-lite'

const useStyles = makeStyles(({ palette, ...theme }) => ({
  userInfo: {
    display: 'flex',
    width: '100%'
  },
  socialMedia: {
    display: 'flex',
    width: '50%'
  },
}))

const NewUser = observer((props) => {
  const {
    open,
    handleClose,
    userHandler,
    registerUser,
    userInfo
  } = props

  const classes = useStyles()

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Добавить нового пользователя</DialogTitle>
      <DialogContent>
        <ValidatorForm onSubmit={() => registerUser()}>
          <div className={classes.userInfo}>
            <Grid container spacing={3} alignItems="center">
              <Grid item md={4} sm={4} xs={12}>
                Имя
              </Grid>
              <Grid item md={8} sm={8} xs={12}>
                <TextValidator
                  label="Имя"
                  type="text"
                  name="firstName"
                  size="small"
                  fullWidth
                  required
                  variant="outlined"
                  value={userInfo.firstName || ''}
                  onChange={userHandler}
                />
              </Grid>
              <Grid item md={4} sm={4} xs={12}>
                Фамилия
              </Grid>
              <Grid item md={8} sm={8} xs={12}>
                <TextValidator
                  label="Фамилия"
                  name="lastName"
                  fullWidth
                  required
                  size="small"
                  variant="outlined"
                  value={userInfo.lastName || ''}
                  onChange={userHandler}
                />
              </Grid>
              <Grid item md={4} sm={4} xs={12}>
                Телефон
              </Grid>
              <Grid item md={8} sm={8} xs={12}>
                <TextValidator
                  label="Телефон"
                  name="phone"
                  fullWidth
                  required
                  size="small"
                  variant="outlined"
                  value={userInfo.phone || ''}
                  onChange={userHandler}
                />
              </Grid>
              <Grid item md={4} sm={4} xs={12}>
                Email
              </Grid>
              <Grid item md={8} sm={8} xs={12}>
                <TextValidator
                  label="Email"
                  name="email"
                  size="small"
                  fullWidth
                  required
                  type="email"
                  variant="outlined"
                  value={userInfo.email || ''}
                  onChange={userHandler}
                />
              </Grid>
              <Grid item md={4} sm={4} xs={12}>
                Пароль
              </Grid>
              <Grid item md={8} sm={8} xs={12}>
                <TextValidator
                  label="Пароль"
                  name="password"
                  type='password'
                  size="small"
                  fullWidth
                  required
                  variant="outlined"
                  value={userInfo.password || ''}
                  onChange={userHandler}
                />
              </Grid>
            </Grid>
          </div>
          <div className="my-6">
            <Button
              color="primary"
              variant="contained"
              type="submit"
              onClick={() => handleClose()}
            >
              Создать
            </Button>
          </div>
        </ValidatorForm>
      </DialogContent>
    </Dialog>
  )
})

export default NewUser
