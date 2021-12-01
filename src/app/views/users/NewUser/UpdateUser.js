import React, { useEffect } from 'react'
import {
  Grid,
  Button,
  DialogTitle,
  DialogContent
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { Dialog } from '@material-ui/core'

const useStyles = makeStyles(({ palette, ...theme }) => ({
  userInfo: {
    display: 'flex',
    width: '100%'
  }
}))

const UpdateUser = (props) => {
  const {
    open,
    handleClose,
    updateUserId,
    getUserById,
    userHandler,
    updateUser,
    userInfo
  } = props

  useEffect(() => {
    getUserById(updateUserId);
  }, [getUserById, updateUserId])

  const classes = useStyles()

  if (!userInfo) {
    return null
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Изменить данные пользователя</DialogTitle>
      <DialogContent>
        <ValidatorForm onSubmit={() => updateUser(updateUserId)}>
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
                  type="email"
                  variant="outlined"
                  value={userInfo.email || ''}
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
              Обновить
            </Button>
          </div>
        </ValidatorForm>
      </DialogContent>
    </Dialog>
  )
}

export default UpdateUser
