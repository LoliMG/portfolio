/**
 * Archivo de datos para los proyectos.
 * Importado en: src/pages/projects/Projects.jsx
 */

export const getProjectsData = (t, openModal) => [
    {
        title: 'GoodHabits',
        desc: t.proj_data_1,
        tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Supabase', 'Vercel'],
        cover: '/assets/GoodHabit/gh1.png',
        links: [
            { type: 'app', url: 'https://good-habit.vercel.app/' },
            {
                type: 'gallery',
                action: () => openModal([
                    '/assets/GoodHabit/gh1.png',
                    '/assets/GoodHabit/gh2.png',
                    '/assets/GoodHabit/gh3.png',
                    '/assets/GoodHabit/gh4.png'
                ]),
                label: t.gallery_btn
            },
            { type: 'github', url: 'https://github.com/LoliMG/GoodHabit' }
        ],
        slides: [
            '/assets/GoodHabit/gh1.png',
            '/assets/GoodHabit/gh2.png',
            '/assets/GoodHabit/gh3.png',
            '/assets/GoodHabit/gh4.png'
        ]
    },
    {
        title: 'CircularScore',
        desc: t.proj_data_2,
        tags: ['Node.js', 'React', 'Fullstack'],
        cover: '/assets/CircularScore/cs1.png',
        links: [
            {
                type: 'gallery',
                action: () => openModal([
                    '/assets/CircularScore/cs1.png',
                    '/assets/CircularScore/cs2.png',
                    '/assets/CircularScore/cs3.png',
                    '/assets/CircularScore/cs4.png'
                ]),
                label: t.gallery_btn
            }
        ],
        slides: [
            '/assets/CircularScore/cs1.png',
            '/assets/CircularScore/cs2.png',
            '/assets/CircularScore/cs3.png',
            '/assets/CircularScore/cs4.png'
        ]
    },
    {
        title: 'BookFly',
        desc: t.proj_data_3,
        tags: ['Node.js', 'React', 'MySQL', 'Bootstrap', 'CSS3'],
        cover: '/assets/BookFly/bf1.png',
        links: [
            {
                type: 'gallery',
                action: () => openModal([
                    '/assets/BookFly/bf1.png',
                    '/assets/BookFly/bf2.png',
                    '/assets/BookFly/bf3.png',
                    '/assets/BookFly/bf4.png'
                ]),
                label: t.gallery_btn
            },
            { type: 'github', url: 'https://github.com/LoliMG/LibraryProject' }
        ],
        slides: [
            '/assets/BookFly/bf1.png',
            '/assets/BookFly/bf2.png',
            '/assets/BookFly/bf3.png',
            '/assets/BookFly/bf4.png'
        ]
    }
];
