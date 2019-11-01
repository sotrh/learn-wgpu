module.exports = {
    base: '/learn-wgpu/',
    title: 'Learn Wgpu',
    theme: 'thindark',
    plugins: [['vuepress-plugin-code-copy', true]],
    themeConfig: {
        displayAllHeaders: false,
        lastUpdated: 'Last Updated',
        sidebar: [
            '/',
            {
                title: 'Beginner',
                collapsable: false,
                children: [
                    '/beginner/',
                    '/beginner/tutorial1-window',
                    '/beginner/tutorial2-swapchain',
                    '/beginner/tutorial3-pipeline/',
                    '/beginner/tutorial4-buffer/',
                ],
            },
            {
                title: 'Intermediate',
                collapsable: false,
                children: [
                    '/intermediate/windowless',
                ],
            },
        ]
    }
}