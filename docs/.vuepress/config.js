module.exports = {
    base: '/learn-wgpu/',
    title: 'Learn Wgpu',
    themeConfig: {
        displayAllHeaders: false,
        lastUpdated: 'Last Updated',
        sidebar: [
            '/',
            {
                title: 'Beginner',
                path: '/beginner/',
                collapsable: false,
                children: [
                    '/beginner/',
                    '/beginner/tutorial1-window',
                    '/beginner/tutorial2-swapchain',
                    '/beginner/tutorial3-pipeline',
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