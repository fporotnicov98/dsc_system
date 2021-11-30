import React from 'react'
import {
    Card,
    Button,
    CircularProgress
} from '@material-ui/core'
import { MatxDivider} from 'app/components'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    cardHolder: {
        background: '#1A2038',
    },
    card: {
        minWidth: 450,
        borderRadius: 12,
        margin: '1rem',
    },
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
    socialButton: {
        width: '100%',
        '& img': {
            margin: '0 8px',
        },
    },
    labelLink: {
        color: palette.primary.main,
        textDecoration: 'underline',
    },
}))

const Register = (props) => {
    const classes = useStyles()

    const {
        changeHandler,
        registerHandler,
        loading,
        userData
    } = props;

    return (
        <div
            className={clsx(
                'flex justify-center items-center  min-h-full-screen',
                classes.cardHolder
            )}
        >
            <Card className={classes.card}>
                <div className="px-8 pt-8">
                    <Button
                        // onClick={handleGoogleRegister}
                        variant="contained"
                        className={classes.socialButton}
                    >
                        <img
                            src="/assets/images/logos/google.svg"
                            alt=""
                        />
                        Sign Up With Google
                    </Button>
                </div>
                <MatxDivider className="mt-6 px-8" text="Или" />
                <div className="p-8 h-full">
                    <ValidatorForm onSubmit={registerHandler}>
                        <TextValidator
                            className="mb-6 w-full"
                            variant="outlined"
                            size="small"
                            label="First Name"
                            type="text"
                            onChange={changeHandler}
                            name="firstName"
                            value={userData.firstName || ''}
                            validators={['required']}
                            errorMessages={[
                                'Обязательное поле',
                                'Введите корректные данные',
                            ]}
                        />
                        <TextValidator
                            className="mb-6 w-full"
                            variant="outlined"
                            size="small"
                            label="Last Name"
                            type="text"
                            onChange={changeHandler}
                            name="lastName"
                            value={userData.lastName || ''}
                            validators={['required']}
                            errorMessages={[
                                'Обязательное поле',
                                'Введите корректные данные',
                            ]}
                        />
                        <TextValidator
                            className="mb-6 w-full"
                            variant="outlined"
                            size="small"
                            label="Phone Number"
                            onChange={changeHandler}
                            type="number"
                            name="phone"
                            value={userData.phone || ''}
                            validators={['required']}
                            errorMessages={[
                                'Обязательное поле',
                                'Введите корректные данные',
                            ]}
                        />
                        <TextValidator
                            className="mb-6 w-full"
                            variant="outlined"
                            size="small"
                            label="Email"
                            onChange={changeHandler}
                            type="email"
                            name="email"
                            value={userData.email || ''}
                            validators={['required', 'isEmail']}
                            errorMessages={[
                                'Обязательное поле',
                                'Введите корректные данные',
                            ]}
                        />
                        <TextValidator
                            className="mb-4 w-full"
                            label="Password"
                            variant="outlined"
                            size="small"
                            onChange={changeHandler}
                            name="password"
                            type="password"
                            value={userData.password || ''}
                            validators={['required']}
                            errorMessages={['Обязательное поле']}
                        />
                        <div className="flex items-center">
                            <div className="relative">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    disabled={loading}
                                    type="submit"
                                >
                                    Регистрация
                                </Button>
                                {loading && (
                                    <CircularProgress
                                        size={24}
                                        className={
                                            classes.buttonProgress
                                        }
                                    />
                                )}
                            </div>
                            <span className="mx-2 ml-5">или</span>
                            <Link to="/session/signin">
                                <Button className="capitalize">
                                    Вход
                                </Button>
                            </Link>
                        </div>
                    </ValidatorForm>
                </div>
            </Card>
        </div>
    )
}

export default Register
