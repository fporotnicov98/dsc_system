import { MatxLoading } from 'app/components';
import dayjs from 'dayjs';
import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'


const Test = ({users}) => {
  const {
    name,
    login,
    followers,
    following,
    public_repos,
    avatar_url,
    created_at
  } = users

  console.log(users)
  if (!users) {
    return <MatxLoading />
  }

  return (
    <div className="flex justify-center align-center">
      <Card>
        <Image src={avatar_url} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Header>{login}</Card.Header>
          <Card.Meta>
            <span className='date'>Дата создания {dayjs(created_at).format('DD-MM-YYYY HH:mm')}</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            {followers} Followers
          </a>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            {public_repos} Репозитории
          </a>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            {following} Following
          </a>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Test;