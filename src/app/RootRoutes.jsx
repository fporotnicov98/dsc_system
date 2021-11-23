import React from 'react'
import { Redirect } from 'react-router-dom'

import dashboardRoutes from './views/dashboard/DashboardRoutes'
import utilitiesRoutes from './views/utilities/UtilitiesRoutes'

import materialRoutes from './views/material-kit/MaterialRoutes'
import chartsRoute from './views/charts/ChartsRoute'
import dragAndDropRoute from './views/Drag&Drop/DragAndDropRoute'
import invoiceRoutes from './views/invoice/InvoioceRoutes'
import calendarRoutes from './views/calendar/CalendarRoutes'
import crudRoute from './views/CRUD/CrudRoutes'
import inboxRoute from './views/inbox/InboxRoutes'
import formsRoutes from './views/forms/FormsRoutes'
import mapRoutes from './views/map/MapRoutes'
import chatRoutes from './views/chat-box/ChatRoutes'

import scrumBoardRoutes from './views/scrum-board/ScrumBoardRoutes'
import pagesRoutes from './views/pages/pagesRoutes'
import dataTableRoutes from './views/data-table/dataTableRoutes'
import projectedRoutes from './views/projected/ProjectedRoutes'

const redirectRoute = [
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/profile/profile-sa" />,
    },
]

const errorRoute = [
    {
        component: () => <Redirect to="/session/404" />,
    },
]

const routes = [
    ...dashboardRoutes,
    ...materialRoutes,
    ...utilitiesRoutes,
    ...chartsRoute,
    ...dragAndDropRoute,
    ...calendarRoutes,
    ...invoiceRoutes,
    ...crudRoute,
    ...inboxRoute,
    ...formsRoutes,
    ...mapRoutes,
    ...chatRoutes,
    ...scrumBoardRoutes,
    ...projectedRoutes,
    ...pagesRoutes,
    ...dataTableRoutes,
    ...redirectRoute,
    ...errorRoute,
]

export default routes
