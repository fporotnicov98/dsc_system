import React from 'react'
import {
    Icon,
    Button,
    IconButton,
    AccordionSummary,
    AccordionDetails
} from '@material-ui/core'
import { Link, useParams } from 'react-router-dom'
import dayjs from 'dayjs';
import { Accordion, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { MatxLoading } from 'app/components';

const ProjectView = (props) => {
    const { projectId } = useParams()

    const {
        project,
        toggleInvoiceEditor,
        deleteProject
    } = props

    if (!project) {
        return <MatxLoading />
    }

    return (
        <div className="py-4">
            <div className="viewer_actions px-4 mb-5 flex items-center justify-between">
                <Link to="/projects">
                    <IconButton>
                        <Icon>arrow_back</Icon>
                    </IconButton>
                </Link>
                <div className="flex items-center">
                    <Button
                        className="mr-4"
                        variant="contained"
                        color="primary"
                        onClick={() => toggleInvoiceEditor()}
                    >
                        Изменить карточку проекта
                    </Button>
                    <Button
                        className="bg-error"
                        variant="contained"
                        onClick={() => {
                            deleteProject(projectId)
                            toggleInvoiceEditor()
                        }}
                    >
                        <Icon className="mr-2" fontSize="small">
                            delete
                        </Icon>
                        Удалить проект
                    </Button>
                </div>
            </div>

            <div className="px-7 mb-7 flex-column justify-between">
                <div className="mb-4">
                    <span>Наименование проекта: </span>
                    <span>{project.projectName}</span>
                </div>
                <div className="mb-4 flex align-center">
                    <span className="mr-2">Git репозиторий: </span>
                    <a className="mr-2" style={{ textDecoration: 'undeline', color: 'blue' }} href={project.repository}>{project.repository}</a>
                    <CheckCircleOutlineIcon fontSize="small" color="primary" />
                </div>
                <div className="mb-4">
                    <span>Описание: </span>
                    <span>{project.description}</span>
                </div>
                <div className="mb-4">
                    <span>Дата создания: </span>
                    <span>{dayjs(project.date).format('DD-MM-YYYY HH:mm')}</span>
                </div>
                <div className="mb-4">
                    <span>Статус: </span>
                    <span className="text-green">{project.status}</span>
                </div>
                <div className="mb-4">
                    <Accordion
                        defaultExpanded
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>
                                Команды
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>

                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default ProjectView
