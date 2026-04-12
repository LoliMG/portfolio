/**
 * Archivo de datos para los proyectos.
 * Importado en: src/pages/projects/Projects.jsx
 */

export const getProjectsData = (t, openModal) => [
    {
        title: 'GoodHabits',
        desc: t.proj_data_1,
        tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Supabase', 'Vercel'],
        links: [
            { type: 'app', url: 'https://good-habit.vercel.app/' },
            { type: 'github', url: 'https://github.com/LoliMG/GoodHabit' }
        ]
    },
    {
        title: 'CircularScore',
        desc: t.proj_data_2,
        tags: ['Node.js', 'React', 'Fullstack'],
        links: [
            { type: 'gallery', action: () => openModal(), label: t.gallery_btn }
        ]
    },
    {
        title: 'BooksLibrary',
        desc: t.proj_data_3,
        tags: ['Node.js', 'React', 'MySQL', 'Bootstrap', 'CSS3'],
        links: [
            { type: 'app', url: '#' },
            { type: 'github', url: 'https://github.com/LoliMG/LibraryProject' }
        ]
    }
];
