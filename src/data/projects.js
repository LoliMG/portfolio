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
        ],
        slides: [] // No gallery for this one
    },
    {
        title: 'CircularScore',
        desc: t.proj_data_2,
        tags: ['Node.js', 'React', 'Fullstack'],
        links: [
            { type: 'gallery', action: () => openModal(['/assets/circular1.png', '/assets/circular2.png', '/assets/circular3.png']), label: t.gallery_btn }
        ],
        slides: ['/assets/circular1.png', '/assets/circular2.png', '/assets/circular3.png']
    },
    {
        title: 'BooksLibrary',
        desc: t.proj_data_3,
        tags: ['Node.js', 'React', 'MySQL', 'Bootstrap', 'CSS3'],
        links: [
            /* Por ahora usamos los mismos slides a falta de imágenes de la librería, pero ya está preparado para que sean distintos */
            { type: 'gallery', action: () => openModal(['/assets/circular1.png', '/assets/circular2.png', '/assets/circular3.png']), label: t.gallery_btn },
            { type: 'github', url: 'https://github.com/LoliMG/LibraryProject' }
        ],
        slides: ['/assets/circular1.png', '/assets/circular2.png', '/assets/circular3.png']
    }
];
