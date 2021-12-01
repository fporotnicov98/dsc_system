import React from 'react'
import { Grid, Fade, Card } from '@material-ui/core'
import CustomerInfo from './CustomerInfo'
import DummyChart from './DummyChart'
import ProfileBarChart from './ProfileBarChart'
import { useTheme } from '@material-ui/styles'

const CustomerDetails = (props) => {
    const theme = useTheme()

    return (
        <Fade in timeout={300}>
            <Grid container spacing={3}>
                <Grid item lg={4} md={6} xs={12}>
                    <CustomerInfo {...props} />
                </Grid>
                <Grid item lg={8} md={6} xs={12}>
                    <Grid container spacing={3}>
                        {projectSummery.map((project) => (
                            <Grid item lg={4} md={6} sm={12} xs={12} key={project.title}>
                                <Card className="h-96 bg-primary flex items-center justify-between p-4">
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
                            </Grid>
                        ))}
                        <Grid item lg={12} md={12} sm={12}>
                            <Card className="pb-4">
                                <h4 className="font-medium text-muted px-4 pt-4 pb-0">
                                    Data Use
                                </h4>
                                <ProfileBarChart
                                    height="230px"
                                    color={[theme.palette.warn]}
                                />
                                <div className="pt-4 flex items-center justify-around">
                                    <div>
                                        <h1 className="font-normal m-0 mb-1">
                                            140
                                        </h1>
                                        <span className="font-normal text-muted uppercase">
                                            avg yearly
                                        </span>
                                    </div>
                                    <div>
                                        <h1 className="font-normal m-0 mb-1">12</h1>
                                        <span className="font-normal text-muted uppercase">
                                            avg monthly
                                        </span>
                                    </div>
                                    <div>
                                        <h1 className="font-normal m-0 mb-1">3</h1>
                                        <span className="font-normal text-muted uppercase">
                                            avg weekly
                                        </span>
                                    </div>
                                </div>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Fade>
    )
}

const projectSummery = [
    {
        title: 'Проектов создано',
        amount: 11,
    },
    {
        title: 'Project Completed',
        amount: 15,
    },
    {
        title: 'Project Published',
        amount: 25,
    },
]

export default CustomerDetails
