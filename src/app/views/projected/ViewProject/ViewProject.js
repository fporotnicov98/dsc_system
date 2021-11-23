import { observer } from 'mobx-react-lite';
import React, { useState, useEffect } from 'react'
import {
  Icon,
  Button,
  Divider,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Card,
} from '@material-ui/core'
import { Link, useParams } from 'react-router-dom'
import { format } from 'date-fns'
import clsx from 'clsx'
import InvoiceEditor from 'app/views/invoice/InvoiceEditor';
import InvoiceViewer from 'app/views/invoice/InvoiceViewer';

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
        <InvoiceEditor
          toggleInvoiceEditor={toggleInvoiceEditor}
        />
      ) : (
        <InvoiceViewer toggleInvoiceEditor={toggleInvoiceEditor} />
      )}
    </Card>
  )
})

export default ViewProject;