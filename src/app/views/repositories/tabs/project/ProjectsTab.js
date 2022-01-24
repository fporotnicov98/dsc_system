import React, { useState, useEffect } from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import {
  Card,
  Icon,
  MenuItem,
  IconButton,
  TextField,
  InputAdornment,
  ClickAwayListener,
  Button,
  Grid,
} from '@material-ui/core'
import { githubApi } from 'config';
import { myToken } from 'config';
import { MatxLoading } from 'app/components';
import Board from './Board';
// import ScrumBoardCard from './ScrumBoardCard'

const ProjectsTab = ({ data, handleCardClick }) => {
  const [columns, setColumns] = useState([])
  const method = 'GET'
  const body = null
  const headers = {
    'Authorization': `Bearer ${myToken}`
  }

  useEffect(() => {
    fetch(`${githubApi}/projects/14035967/columns`, {method, body, headers})
      .then(res => res.json())
      .then(data => {
        setColumns(data);
      })
  }, [])

  if (columns.length === 0) {
    return <MatxLoading />
  }

  console.log(columns);

  return (
    <Card
      className="min-h-full-screen"
    >
      <Grid container spacing={2} className="p-4">
      {
        columns.map((item, index) => (
          <Board card={item} />
        ))
      }
      </Grid>
    </Card>
  )
};

export default ProjectsTab;