export const navigations = [
    {
        name: 'Проекты',
        path: '/projects',
        icon: 'attach_money'
    },
    {
        name: 'Команды',
        // path: '/teams',
        icon: 'people',
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
        path: '/scrum-board'
    },
    {
        name: 'Контроль запросов',
        icon: 'perm_data_setting',
        path: '/logs-control',
    },
    {
        name: 'Кадендарь',
        icon: 'date_range',
        path: '/calendar',
    },
    {
        name: 'Почта',
        icon: 'email',
        path: '/mail'
    },
    {
        name: 'Чаты',
        icon: 'chat',
        path: '/chat',
    },
    {
        name: 'Мониторинг',
        icon: 'trending_up',
        path: '/charts/echarts',
    },
    {
        name: 'Inventory Management',
        path: '/dashboard/inventory-management',
        icon: 'store',
    },
    {
        name: 'Документация',
        icon: 'help',
        path: '/viki',
    }
]
