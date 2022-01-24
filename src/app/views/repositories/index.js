import { MatxLoading } from 'app/components';
import { myToken } from 'config';
import { githubApi } from 'config';
import React, { useEffect, useState } from 'react';
import RepositoriesManagement from './RepositoriesManagement';

const RepositoriesComponent = () => {
  const [repos, setRepos] = useState({})
  const [files, setFiles] = useState([])
  const [commits, setCommits] = useState([])
  const [actions, setActions] = useState({})

  useEffect(() => {
    fetch(`${githubApi}/repos/fporotnicov98/dsc_system/actions/runs`, {method: 'GET', body: null, headers: {'Authorization': `Bearer ${myToken}`}})
    .then(res => res.json())
    .then(data => {
      setActions(data)
    })
  })

  useEffect(() => {
    fetch(`${githubApi}/repos/fporotnicov98/dsc_system`)
      .then(res => res.json())
      .then(data => {
        setRepos(data);
      })
  }, [])

  useEffect(() => {
    fetch(`${githubApi}/repos/fporotnicov98/dsc_system/contents`)
      .then(res => res.json())
      .then(data => {
        setFiles(data)
      })
  }, [])

  useEffect(() => {
    fetch(`${githubApi}/repos/fporotnicov98/dsc_system/commits`)
      .then(res => res.json())
      .then(data => {
        setCommits(data)
      })
  }, [])

  if (!repos || !files || !commits) {
    return <MatxLoading />
  }

  return (
    <RepositoriesManagement
      repos={repos}
      files={files}
      commits={commits}
      actions={actions}
    />
  )
}


export default RepositoriesComponent;