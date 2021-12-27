import React, { useEffect, useState } from 'react'
import { Grid, Fade, Card, Button, Icon } from '@material-ui/core'
import CustomerInfo from './CustomerInfo'
import DummyChart from './DummyChart'
import { useTheme } from '@material-ui/styles'
import { TextValidator } from 'react-material-ui-form-validator'
import { Form } from 'semantic-ui-react'
import Test from './test'

const CustomerDetails = (props) => {
    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [followers, setFollowers] = useState('')
    const [following, setFollowing] = useState('')
    const [repos, setRepos] = useState('')
    const [avatar, setAvatar] = useState('')
    const [userInput, setUserInput] = useState('')
    const [error, setError] = useState('')

    const [users, setUser] = useState('')

    useEffect(() => {
        fetch('https://api.github.com/users/fporotnicov98')
            .then(res => res.json())
            .then(data => {
                setUser(data);
            })
    }, [])

    const setData = (data) => {
        setName(data.name)
        setUserName(data.login)
        setFollowers(data.followers)
        setFollowing(data.following)
        setRepos(data.public_repos)
        setAvatar(data.avatar_url)
    }

    const handleSearch = (e) => {
        setUserInput(e.target.value)
    }

    // const handleSubmit = () => {
    //     fetch
    // }

    return (
        <Fade in timeout={300}>
            <Grid container spacing={3}>
                <Grid item lg={4} md={6} xs={12}>
                    <CustomerInfo {...props} />
                </Grid>
                <Grid item lg={4} md={6} xs={12}>
                    <Grid container spacing={3}>
                        <Grid item lg={12} md={12} sm={12}>
                            <Card className="p-8">
                                <Grid container spacing={3}>
                                    <h4 className="font-medium text-muted">
                                        GitHub Connect
                                    </h4>
                                    {/* <Grid container>
                                        <Grid item lg={12} md={12} sm={12}>
                                            <Grid item md={10} sm={8} xs={12}>
                                                <TextValidator
                                                    className="mb-6 w-full"
                                                    variant="outlined"
                                                    size="small"
                                                    label="Поиск пользователя GitHub"
                                                    // onChange={changeHandler}
                                                    type="text"
                                                    required
                                                    name="projectName"
                                                    value={user || ''}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Button className="mb-1" variant="text">
                                            <Icon className="mr-2" fontSize="small">
                                                search
                                            </Icon>{' '}
                                            Поиск пользователя
                                        </Button>
                                    </Grid> */}
                                    <Grid container>
                                        <Test
                                            users={users}
                                        />
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={4} md={12} sm={12}>
                    {projectSummery.map((project) => (
                        // <Grid item lg={12} md={6} sm={12} xs={12} key={project.title}>
                        <Card className="h-96 flex items-center justify-between p-4 mb-4">
                            <div>
                                <span className="text-light-white uppercase">
                                    {project.title}
                                </span>
                                <h4 className="font-normal text-white m-0 pt-2">
                                    {project.amount}
                                </h4>
                            </div>
                            <div className="w-56 h-36">
                                <DummyChart height="40px" />
                            </div>
                        </Card>
                        // </Grid>
                    ))}
                </Grid>
            </Grid>
        </Fade>
    )
}

const projectSummery = [
    {
        title: 'Проектов создано',
        amount: 2,
    },
    {
        title: 'Проектов опубликовано',
        amount: 0,
    },
    {
        title: 'Количество сотрудников',
        amount: 12,
    }
]

export default CustomerDetails
