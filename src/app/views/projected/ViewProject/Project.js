import { observer } from 'mobx-react-lite';
import React, { useState, useEffect } from 'react'
import {
  Card,
} from '@material-ui/core'
import { useParams } from 'react-router-dom'
import ProjectEdit from './ProjectEdit';
import ProjectView from './ProjectView';

const ViewProject = observer(({ ProjectStore }) => {
  const { projectId } = useParams()
  const {
    getProject,
    project
  } = ProjectStore

  const [showInvoiceEditor, setShowInvoiceEditor] = useState(false)

  const toggleInvoiceEditor = () => {
    setShowInvoiceEditor(!showInvoiceEditor)
  }

  useEffect(() => {
    getProject(projectId);
  }, [getProject, projectId])

  return (
    <Card elevation={6} className="m-sm-30">
      {showInvoiceEditor ? (
        <ProjectEdit
          toggleInvoiceEditor={toggleInvoiceEditor}
        />
      ) : (
        <ProjectView toggleInvoiceEditor={toggleInvoiceEditor} project={project} />
      )}
    </Card>
  )
})

export default ViewProject;