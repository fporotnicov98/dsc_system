import React from 'react'
import {
    Icon,
    Button,
    IconButton,
    ExpansionPanelSummary,
    ExpansionPanelDetails
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import dayjs from 'dayjs';
import { ExpansionPanel, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const useStyles = makeStyles(({ palette, ...theme }) => ({
    root: {
        backgroundColor: '#FFFFFF'
    }
}))

const ProjectView = (props) => {

    const {
        project,
        toggleInvoiceEditor
    } = props

    const classes = useStyles()

    return (
        <div className={clsx('invoice-viewer py-4', classes.invoiceViewer)}>
            <div className="viewer_actions px-4 mb-5 flex items-center justify-between">
                <Link to="/projects">
                    <IconButton>
                        <Icon>arrow_back</Icon>
                    </IconButton>
                </Link>
                <div>
                    <Button
                        className="mr-4 py-2"
                        variant="contained"
                        color="primary"
                        onClick={() => toggleInvoiceEditor()}
                    >
                        Изменить карточку проекта
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
                    <a className="mr-2" style={{textDecoration: 'undeline', color: 'blue'}} href={project.repository}>{project.repository}</a>
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
                    <ExpansionPanel
                        classes={classes.root}
                    >
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>
                                Команды
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Button
                                variant="outlined"
                                color="primary"
                                className={classes.button}
                            >
                                <Icon>add</Icon>
                                <span className="ml-3">Добавить участника проекта</span>
                            </Button>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
            </div>
        </div>
    )
}

export default ProjectView
