import React, { useEffect, useState } from 'react';
import {
  Breadcrumb, MatxDivider
} from 'app/components';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Card, Grid, Icon, Tab, Tabs } from '@material-ui/core';
import CodeTab from './tabs/code/CodeTab';
import CommitsTab from './tabs/commit/CommitsTab';
import ProjectsTab from './tabs/project/ProjectsTab';
import SecurityTab from './tabs/security/SecurityTab';
import SettingsTab from './tabs/SettingsTab';

const tabList = ['Код', 'Коммиты', 'Проекты', 'Безопасность', 'Настройки']

const RepositoriesManagement = (props) => {
  const {
    repos,
    files,
    commits,
    actions
  } = props

  const [tabIndex, setTabIndex] = useState(0)

  const handleTabChange = (e, value) => {
    setTabIndex(value)
  }

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: 'Команда разработки', path: '/charts' },
            { name: 'Управление репозиторием' },
          ]}
        />
      </div>
      <div className="mb-sm-30 title flex items-center">
        <GitHubIcon />
        <span className="mx-4">{repos.full_name}</span>
        <span className="text-small text-muted-white">
          {
            !repos.private ? 'Публичный' : 'Приватный'
          }
        </span>
      </div>
      <Grid container spacing={2}>
        <Grid item md={tabIndex === 2 ? 12 : 8} sm={12} xs={12}>
          <Card className="mb-4">
            <Tabs
              className="mt-4"
              value={tabIndex}
              onChange={handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              variant='fullWidth'
            >
              {tabList.map((item, ind) => (
                <Tab
                  className="capitalize"
                  value={ind}
                  label={item}
                  key={ind}
                />
              ))}
            </Tabs>
          </Card>

          {tabIndex === 0 && <CodeTab files={files} />}
          {tabIndex === 1 && <CommitsTab commits={commits} />}
          {tabIndex === 2 && <ProjectsTab />}
          {tabIndex === 3 && <SecurityTab actions={actions} />}
          {tabIndex === 4 && <SettingsTab />}
        </Grid>
        {
          tabIndex !== 2 && (
            <Grid item md={4} sm={12} xs={12}>
              <Card>
                <div className="mt-7 text-white flex items-center justify-center text-16">Команда</div>
                <MatxDivider />
                <div className="manager m-4">
                  <div className="text-white text-16 mb-6">Project Manager</div>
                  <div className="text-hint text-15 flex items-center">
                    <Icon className="text-brand mr-4" fontSize="small">panorama_fish_eye</Icon>
                    Поротников Федор <a className="text-brand ml-4 flex items-center" href="hhttps://github.com/fporotnicov98"><GitHubIcon size='small' /> (fporotnicov98)</a>
                  </div>
                </div>
                <MatxDivider />
                <div className="owner m-4">
                  <div className="text-white text-16 mb-6">Ответственный</div>
                  <div className="text-hint text-15">
                    Петров Николай
                  </div>
                </div>
                <MatxDivider />
                <div className="rewiewers m-4">
                  <div className="text-white text-16 mb-6">Проверка кода</div>
                  <div className="text-hint text-15">
                    {/* <Icon className="text-brand mr-4" fontSize="small">panorama_fish_eye</Icon> */}
                    Китаев Илья 
                    {/* <a className="text-brand ml-4 flex items-center" href="hhttps://github.com/ilkit"><GitHubIcon size='small' /> (ilkit)</a> */}
                  </div>
                  <div className="text-hint text-15">Васильев Петр</div>
                  <div className="text-hint text-15">Белозеров Руслан</div>
                </div>
                <MatxDivider />
                <div className="others m-4">
                  <div className="text-hint text-15">Васильев Георгий</div>
                  <div className="text-hint text-15">Литвинова Наталья</div>
                  <div className="text-hint text-15">Щукин Константин</div>
                  <div className="text-hint text-15">Трифоненко Елена</div>
                  <div className="text-hint text-15">Мазуров Владимир</div>
                </div>
              </Card>
            </Grid>
          )
        }
      </Grid>
    </div>
  );
};

export default RepositoriesManagement;