import { observer } from 'mobx-react-lite';
import React, { useState, useEffect } from 'react'
import {
  Card,
} from '@material-ui/core'
import { useParams } from 'react-router-dom'
import ProjectEdit from './ProjectEdit';
import ProjectView from './ProjectView';
import { MatxLoading } from 'app/components';

const ViewProject = observer(({ ProjectStore }) => {
  const { projectId } = useParams()
  const {
    getProject,
    project,
    changeHandler,
    updateProject,
    projectData,
    deleteProject
  } = ProjectStore

  const [showInvoiceEditor, setShowInvoiceEditor] = useState(false)

  const toggleInvoiceEditor = () => {
    setShowInvoiceEditor(!showInvoiceEditor)
  }

  useEffect(() => {
    getProject(projectId);
  }, [getProject, projectId])

  if (!projectData) {
    return <MatxLoading />
  }

  return (
    <Card elevation={6} className="m-15">
      {showInvoiceEditor ? (
        <ProjectEdit
          toggleInvoiceEditor={toggleInvoiceEditor}
          project={project}
          changeHandler={changeHandler}
          updateProject={updateProject}
          projectData={projectData}
          deleteProject={deleteProject}
        />
      ) : (
        <ProjectView
          toggleInvoiceEditor={toggleInvoiceEditor}
          deleteProject={deleteProject}
          project={projectData}
        />
      )}
    </Card>
  )
})

export default ViewProject;