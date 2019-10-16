module.exports = {
    themeConfig: {
        displayAllHeaders: true,
        sidebar: [
            '/',
            {
                title: 'Beginner',
                path: '/beginner/',
                collapsable: false,
                children: [
                    '/beginner/',
                    '/beginner/tutorial1-window',
                ],
            },
            {
                title: 'Intermediate',
                path: '/intermediate/',
                collapsable: false,
                children: [
                    '/intermediate/',
                ],
            },
        ]
    }
}