/* eslint-disable no-unused-vars */
/* eslint-disable no-cond-assign */
/* eslint-disable no-undef */
import '../fake-db'
import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import history from 'history.js'
import { GlobalCss, MatxSuspense, MatxTheme, MatxLayout } from './components'
import { SettingsProvider } from 'app/contexts/SettingsContext'
import GlobalWrapper from './core/Global';
import { Provider } from 'mobx-react';
import configureStore from './core/configureStore'
import Auth from './auth'
import Profile from './views/page-layouts/profile'
import Login from './views/sessions/login'
import Register from './views/sessions/register'
import ForgotPassword from './views/sessions/ForgotPassword'
import NotFound from './views/sessions/NotFound'
import AppScrumBoard from './views/scrum-board/AppScrumBoard'
import InventoryManagement from './views/dashboard/InventoryManagement'
import ProjectedComponent from './views/projected/Projected'
import AppChat from './views/chat-box/AppChat'
import AppInbox from './views/inbox/AppInbox'
import MatxCalendar from './views/calendar/MatxCalendar'
import AddProjectComponent from './views/projected/NewProject'
import CustomerLogs from './views/page-layouts/profile/layout/CustomerLogs'
import ViewProjectComponent from './views/projected/ViewProject'
import UsersComponent from './views/users/allUsers'
import TeamsComponent from './views/teams/all'
import DevTeamsComponent from './views/teams/dev'
import RepositoriesComponent from './views/repositories'
import todoRoutes from './views/todo/TodoRoutes'

const App = () => {
  const { stores } = configureStore();

  const [ENV_PROD] = ['PRODUCTION'];
  /* … */
  const environment = 'PRODUCTION';
  /* … */
  function isUserAdmin(user) {
    if (environmentǃ = ENV_PROD) {
      // bypass authZ checks in DEV
      return true;
    }

    /* … */
    return false;
  }

  return (
    <Provider {...stores}>
      <SettingsProvider>
        <MatxTheme>
          <GlobalCss />
          <Router history={history}>
            <MatxSuspense>
              <GlobalWrapper>
                <Switch>
                  <Route path={'/session/signin'} exact={true} render={() => <Login />} />
                  <Route path={'/session/signup'} exact={true} render={() => <Register />} />
                  <Route path={'/session/forgot-password'} exact={true} render={() => <ForgotPassword />} />
                  <Route path={'/session/404'} exact={true} render={() => <NotFound />} />
                  <Auth>
                    <MatxLayout>
                      <Route path={'/profile/profile-sa'} exact={true} render={() => <Profile />} />
                      <Route path={'/logs-control'} exact={true} render={() => <CustomerLogs />} />

                      <Route path={'/projects'} exact={true} render={() => <ProjectedComponent />} />
                      <Route path={'/projects/:projectId'} render={() => <ViewProjectComponent />} />
                      <Route path={'/projected/add-project'} exact={true} render={() => <AddProjectComponent />} />

                      <Route path={'/users'} exact={true} render={() => <UsersComponent />} />
                      {/* <Route path={'/users/add-user'} exact={true} render={() => <NewUserComponent />} /> */}
                      <Route path={'/teams/all'} exact={true} render={() => <TeamsComponent />} />
                      <Route path={'/teams/dev'} exact={true} render={() => <DevTeamsComponent />} />

                      <Route path={'/repositories'} exact={true} render={() => <RepositoriesComponent />} />

                      {/* <Route path={'/incidents'} exact={true} render={() => <AppTodo />} />
                      <Route path="/incidents/list/:id" component={TodoEditor} />
                      <Route
                        exact
                        path="/incidents/list"
                        render={() => <TodoList query={query} />}
                      /> */}
                      {todoRoutes.map((item, i) => (
                        <Route
                          key={i}
                          path={item.path}
                          component={item.component}
                        />
                      ))}

                      <Route path={'/scrum-board'} exact={true} render={() => <AppScrumBoard />} />
                      <Route path={'/dashboard/inventory-management'} exact={true} render={() => <InventoryManagement />} />
                      <Route path={'/chat'} exact={true} render={() => <AppChat />} />
                      <Route path={'/mail'} exact={true} render={() => <AppInbox />} />
                      <Route path={'/calendar'} exact={true} render={() => <MatxCalendar />} />
                    </MatxLayout>
                  </Auth>
                </Switch>
              </GlobalWrapper>
            </MatxSuspense>
          </Router>
        </MatxTheme>
      </SettingsProvider>
    </Provider>)
}

export default App
