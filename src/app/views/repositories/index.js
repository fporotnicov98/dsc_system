import { MatxLoading } from 'app/components';
import { githubApi } from 'config';
import React, { useEffect, useState } from 'react';
import RepositoriesManagement from './RepositoriesManagement';

const RepositoriesComponent = () => {
  const [repos, setRepos] = useState({})
  const [files, setFiles] = useState([])
  const [commits, setCommits] = useState([])

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
    />
  )
}


export default RepositoriesComponent;