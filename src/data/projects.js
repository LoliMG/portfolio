/**
 * Archivo de datos para los proyectos.
 * Importado en: src/pages/projects/Projects.jsx
 */

const gallery = (folder, files) => files.map(f => `/assets/${folder}/${f}.webp`);

const eventosSlides = gallery('EventOS', ['eventos-1', 'eventos-2', 'eventos-3', 'eventos-4', 'eventos-5']);
const goodHabitSlides = gallery('GoodHabit', ['gh1', 'gh2', 'gh3', 'gh4']);
const circularSlides = gallery('CircularScore', ['cs4', 'cs2', 'cs3', 'cs1']);
const bookFlySlides = gallery('BookFly', ['bf1', 'bf2', 'bf3', 'bf4']);
const matatenaSlides = gallery('Matatena', ['matatena1', 'matatena2', 'matatena3']);
const gameroomSlides = gallery('GameroomLibrary', ['room-1', 'console', 'room-2', 'room-3']);

export const getProjectsData = (t, openModal) => [
    {
        title: 'EventOS',
        desc: t.proj_data_5,
        badge: t.badge_client,
        note: t.private_note,
        isLive: false,
        tags: ['React', 'Node.js', 'Express', 'Google Calendar API', 'PostgreSQL', 'Supabase'],
        cover: eventosSlides[0],
        links: [
            { type: 'gallery', action: () => openModal(eventosSlides), label: t.gallery_btn }
        ],
    },
    {
        title: 'CircularScore',
        desc: t.proj_data_2,
        badge: t.badge_client,
        note: t.private_note,
        isLive: false,
        tags: ['React', 'Bootstrap', 'CSS3', 'Node.js', 'Express', 'MySQL', 'Vite'],
        cover: circularSlides[0],
        links: [
            { type: 'gallery', action: () => openModal(circularSlides), label: t.gallery_btn }
        ],
    },
    {
        title: 'Gameroom Library',
        desc: t.proj_data_7,
        badge: '🟢 Live Demo',
        isLive: true,
        tags: ['React', 'TypeScript', 'Three.js', 'React Three Fiber', 'Supabase', 'PostgreSQL', 'Vercel'],
        cover: gameroomSlides[0],
        links: [
            { type: 'app', url: 'https://gameroom-library.vercel.app' },
            { type: 'gallery', action: () => openModal(gameroomSlides), label: t.gallery_btn },
            { type: 'github', url: 'https://github.com/LoliMG/Gameroom-Library' }
        ],
    },
    {
        title: 'GoodHabits',
        desc: t.proj_data_1,
        badge: '⚡ Fullstack App',
        isLive: false,
        tags: ['React', 'Vite', 'Node.js', 'Express', 'PostgreSQL', 'Supabase', 'Vercel'],
        cover: goodHabitSlides[0],
        links: [
            { type: 'gallery', action: () => openModal(goodHabitSlides), label: t.gallery_btn },
            { type: 'github', url: 'https://github.com/LoliMG/GoodHabit' }
        ],
    },
    {
        title: 'BookFly',
        desc: t.proj_data_3,
        badge: '📚 Fullstack App',
        isLive: false,
        tags: ['React', 'Vite', 'Bootstrap', 'CSS3', 'Node.js', 'MySQL'],
        cover: bookFlySlides[0],
        links: [
            { type: 'gallery', action: () => openModal(bookFlySlides), label: t.gallery_btn },
            { type: 'github', url: 'https://github.com/LoliMG/LibraryProject' }
        ],
    },
    {
        title: 'Matatena',
        desc: t.proj_data_6,
        badge: '🟢 Live Demo',
        isLive: true,
        tags: ['HTML5', 'CSS3', 'JavaScript', 'Vercel'],
        cover: matatenaSlides[0],
        links: [
            { type: 'app', url: 'https://matatena-eight.vercel.app/' },
            { type: 'gallery', action: () => openModal(matatenaSlides), label: t.gallery_btn },
            { type: 'github', url: 'https://github.com/LoliMG/matatena' }
        ],
    }
];
