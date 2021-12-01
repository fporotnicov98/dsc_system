export const navigations = [
    {
        name: 'Проекты',
        path: '/projects',
        icon: 'attach_money',
        role: ['SA']
    },
    {
        name: 'Пользователи',
        icon: 'person',
        path: '/users',
        role: ['SA']
    },
    {
        name: 'Команды',
        path: '/teams',
        icon: 'people',
        role: ['SA'],
        children: [
            {
                name: 'Все команды',
                path: '/teams/all'
            },
            {
                name: 'Developers',
                path: '/teams/dev'
            },
            {
                name: 'Security',
                path: '/teams/sec',
            },
            {
                name: 'Operations',
                path: '/teams/ops'
            }
        ]
    },
    {
        name: 'Панель управления',
        icon: 'group_work',
        path: '/scrum-board',
        role: ['SA']
    },
    {
        name: 'CI/CD',
        icon: 'all_inclusive',
        path: '/ci-cd',
        role: ['SA']
    },
    {
        name: 'Контроль запросов',
        icon: 'perm_data_setting',
        path: '/logs-control',
        role: ['SA']
    },
    {
        name: 'Кадендарь',
        icon: 'date_range',
        path: '/calendar',
        role: ['SA']
    },
    {
        name: 'Почта',
        icon: 'email',
        path: '/mail',
        role: ['SA']
    },
    {
        name: 'Чаты',
        icon: 'chat',
        path: '/chat',
        role: ['SA']
    },
    {
        name: 'Мониторинг',
        icon: 'trending_up',
        path: '/charts/echarts',
        role: ['SA']
    },
    {
        name: 'Inventory Management',
        path: '/dashboard/inventory-management',
        icon: 'store',
        role: ['SA']
    },
    {
        name: 'Документация',
        icon: 'help',
        path: '/viki',
        role: ['SA', 'USER']
    }
]
