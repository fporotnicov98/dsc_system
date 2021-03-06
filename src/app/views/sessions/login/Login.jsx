import React from 'react'
import {
    Card,
    Checkbox,
    FormControlLabel,
    Button,
    CircularProgress,
} from '@material-ui/core'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { MatxDivider } from 'app/components'
import { makeStyles } from '@material-ui/core/styles'
import history from 'history.js'
import clsx from 'clsx'
import { Redirect } from 'react-router-dom'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    cardHolder: {
        background: '#1A2038',
    },
    card: {
        maxWidth: 800,
        minWidth: '450px',
        margin: '1rem',
    },
    cardLeft: {
        background: '#161c37 url(/assets/images/bg-3.png) no-repeat',
        backgroundSize: 'cover',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            minWidth: 200,
        },
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        '& span': {
            fontSize: 26,
            lineHeight: 1.3,
            fontWeight: 800,
        },
    },
    mainTitle: {
        fontSize: 18,
        lineHeight: 1.3,
        marginBottom: 24,
    },
    features: {
        '& .item': {
            position: 'relative',
            marginBottom: 12,
            paddingLeft: 20,
            '&::after': {
                position: 'absolute',
                content: '""',
                width: 4,
                height: 4,
                borderRadius: 4,
                left: 4,
                top: 7,
                backgroundColor: palette.error.main,
            },
        },
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
}))

const Login = (props) => {
    const classes = useStyles()

    const {
        changeHandler,
        loginHandler,
        loading,
        userData,
        isAuthenticated,
    } = props;

    if (isAuthenticated) {
        return <Redirect to={'/profile/profile-sa'} />
    }

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
                        // onClick={handleGoogleLogin}
                        variant="contained"
                        className={classes.socialButton}
                    >
                        <img
                            src="/assets/images/logos/google.svg"
                            alt=""
                        />
                        ????????
                    </Button>
                </div>
                <MatxDivider className="mt-6 px-8" text="??????" />
                <div className="p-8 h-full relative">
                    <ValidatorForm onSubmit={() => loginHandler()}>
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
                                '???????????????????????? ????????',
                                '?????????????? ???????????????????? ????????????',
                            ]}
                        />
                        <TextValidator
                            className="mb-3 w-full"
                            label="Password"
                            variant="outlined"
                            size="small"
                            onChange={changeHandler}
                            name="password"
                            type="password"
                            value={userData.password || ''}
                            validators={['required']}
                            errorMessages={['???????????????????????? ????????']}
                        />
                        <FormControlLabel
                            className="mb-3 min-w-288"
                            name="remember"
                            onChange={changeHandler}
                            control={
                                <Checkbox
                                    size="small"
                                    onChange={({
                                        target: { checked },
                                    }) =>
                                        changeHandler({
                                            target: {
                                                name: 'remember',
                                                value: checked,
                                            },
                                        })
                                    }
                                    checked={userData.remember || false}
                                />
                            }
                            label="?????????????????? ????????"
                        />
                        <div className="flex flex-wrap items-center mb-4">
                            <div className="relative">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    disabled={loading}
                                    type="submit"
                                    onClick={() => loginHandler()}
                                >
                                    ??????????
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
                            <span className="mr-5 ml-5">??????</span>
                            <Button
                                className="capitalize"
                                onClick={() => {
                                    history.push('/session/signup')
                                }
                                }
                            >
                                ??????????????????????
                            </Button>
                        </div>
                        <Button
                            className="text-primary"
                            onClick={() => {
                                history.push('/session/forgot-password')
                            }
                            }
                        >
                            ???????????? ?????????????
                        </Button>
                    </ValidatorForm>
                </div>
            </Card>
        </div>
    )
}

export default Login
