import React from 'react'
import {
    Button,
    Grid
} from '@material-ui/core'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { useParams } from 'react-router-dom'

const ProjectEdit = (props) => {
    const {
        changeHandler,
        updateProject,
        projectData,
        toggleInvoiceEditor
    } = props
    const { projectId } = useParams()
    return (
        <div className="py-4">
            <ValidatorForm
            className="m-3"
                onSubmit={() => {
                    updateProject(projectId)
                    toggleInvoiceEditor()
                }}
            >
                <div className="flex justify-end">
                    <div className="mb-6">
                        <Button
                            type="button"
                            className="mr-4 py-2"
                            variant="text"
                            onClick={() => toggleInvoiceEditor()}
                        >
                            Отмена
                        </Button>
                        <Button
                            type="submit"
                            className="py-2"
                            variant="contained"
                            color="primary"
                        >
                            Сохранить
                        </Button>
                    </div>
                </div>

                <div className="viewer__order-info px-4 mb-4 flex justify-between">
                    <div className="m-6 w-full">
                        <Grid container>
                            <Grid item md={2} sm={4} xs={12}>
                                Наименование продукта
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
                </div>
            </ValidatorForm>
        </div>
    )
}

export default ProjectEdit
