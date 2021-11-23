import React, { Component } from 'react'
import {
    Card,
    Divider,
    Button,
    Grid,
} from '@material-ui/core'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { inject } from 'mobx-react'
import { toJS } from 'mobx'

@inject(({ ProjectStore }) => {
    return {
        changeHandler: ProjectStore.changeHandler,
        handleSubmit: ProjectStore.addProject,
        projectData: toJS(ProjectStore.projectData)
    }
})

class NewProject extends Component {
    render() {
        const {
            changeHandler,
            handleSubmit,
            projectData
        } = this.props

        return (
            <div className="m-sm-30">
                <Card elevation={3}>
                    <div className="flex p-6">
                        <h4 className="m-0">Новый проект</h4>
                    </div>
                    <Divider className="mb-2" />
                    <ValidatorForm onSubmit={() => handleSubmit()}>
                        <div className="m-6">
                            <Grid container>
                                <Grid item md={2} sm={4} xs={12}>
                                    Ноименование продукта
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextValidator
                                        className="mb-6 w-full"
                                        variant="outlined"
                                        size="small"
                                        label="Наименование продукта"
                                        onChange={changeHandler}
                                        type="text"
                                        required
                                        name="projectName"
                                        value={projectData.projectName || ''}
                                    />
                                </Grid>
                                <Grid item md={2} sm={4} xs={12}>
                                    Git репозиторий
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextValidator
                                        className="mb-6 w-full"
                                        label="Git репозиторий"
                                        name="repository"
                                        size="small"
                                        variant="outlined"
                                        type="text"
                                        value={projectData.repository || ''}
                                        onChange={changeHandler}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item md={2} sm={4} xs={12}>
                                    Описание продукта
                                </Grid>
                                <Grid item md={10} xs={6}>
                                    <TextValidator
                                        label="Описание продукта"
                                        name="description"
                                        size="small"
                                        variant="outlined"
                                        type="text"
                                        multiline
                                        rows={6}
                                        fullWidth
                                        value={projectData.description}
                                        onChange={changeHandler}
                                    />
                                </Grid>
                            </Grid>
                        </div>
                        <div className="m-6">
                            <Button
                                color="primary"
                                variant="contained"
                                type="submit"
                            >
                                Создать проект
                            </Button>
                        </div>
                    </ValidatorForm>
                </Card>
            </div>
        )
    }
}

export default NewProject
