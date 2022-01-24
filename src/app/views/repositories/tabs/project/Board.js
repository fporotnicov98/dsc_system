import React, { useEffect, useState } from 'react'
import { Button, Icon, Avatar, Card, Grid } from '@material-ui/core'
import { MatxDivider, MatxLoading } from 'app/components'
import { myToken } from 'config'
import { githubApi } from 'config'

const Board = ({ card }) => {
  const {
    name,
    id
  } = card

  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch(`${githubApi}/projects/columns/${id}/cards`, {method: 'GET', body: null, headers: {'Authorization': `Bearer ${myToken}`} })
      .then(res => res.json())
      .then(data => {
        setCards(data);
      })
  }, [id])

  if (cards.length === 0) {
    return <MatxLoading />
  }

  console.log(cards);

  return (
    <Grid item lg={2} md={2} xs={12}>
      <Card className="scrum-board-card elevation-z7 bg-default min-h-full">
        <div className="px-4 py-3">
          <h6 className="m-2 font-medium">{name}</h6>
          <MatxDivider className="mb-2" />
          <p>Количество задач: {cards.length}</p>
          {
            cards && cards.length !== 0 && cards.map((item, index) => {
              return (
                <Card className='p-2 mb-4'>
                  {item.note}
                </Card>
              )
            })
          }
          <Card></Card>
        </div>
      </Card>
    </Grid>

  )
}

export default Board
