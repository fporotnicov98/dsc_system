import React from 'react'
import { authRoles } from '../../auth/authRoles'

const dashboardRoutes = [
    {
        path: '/dashboard/alternative',
        component: React.lazy(() => import('./Analytics')),
        auth: authRoles.sa,
    },
    {
        path: '/dashboard/default',
        component: React.lazy(() => import('./Analytics2')),
        auth: authRoles.admin,
    },
    {
        path: '/dashboard/inventory-management',
        component: React.lazy(() => import('./InventoryManagement')),
        auth: authRoles.admin,
    },
]

export default dashboardRoutes
