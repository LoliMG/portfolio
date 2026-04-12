/**
 * Archivo de datos para las habilidades técnicas.
 * Importado en: src/pages/skills/Skills.jsx
 */

export const getSkillsData = (t) => [
    {
        title: 'Frontend',
        icon: 'fa-code',
        skills: [
            { name: 'REACT', icon: 'fa-react', fab: true },
            { name: 'JAVASCRIPT', icon: 'fa-js-square', fab: true },
            { name: 'BOOTSTRAP', icon: 'fa-bold', fab: false },
            { name: 'HTML5', icon: 'fa-html5', fab: true },
            { name: 'CSS3', icon: 'fa-css3-alt', fab: true },
        ]
    },
    {
        title: 'Backend',
        icon: 'fa-server',
        skills: [
            { name: 'NODE.JS', icon: 'fa-node-js', fab: true },
            { name: 'EXPRESS', icon: 'fa-bolt', fab: false },
            { name: 'mySQL', icon: 'fa-database', fab: false },
            { name: 'postgreSQL', icon: 'fa-database', fab: false },
            { name: 'SUPABASE', icon: 'fa-cloud-upload-alt', fab: false },
        ]
    },
    {
        title: t.skill_cat_devops,
        icon: 'fa-tools',
        skills: [
            { name: 'DOCKER', icon: 'fa-docker', fab: true },
            { name: 'GIT/GITHUB', icon: 'fa-git-alt', fab: true },
            { name: 'VERCEL', icon: 'fa-cloud', fab: false },
            { name: 'ANTIGRAVITY', icon: 'fa-rocket', fab: false },
        ]
    },
    {
        title: t.skill_cat_design,
        icon: 'fa-paint-brush',
        skills: [
            { name: 'FIGMA', icon: 'fa-figma', fab: true },
            { name: 'UI/UX', icon: 'fa-pen-nib', fab: false },
            { name: 'CANVA', icon: 'fa-palette', fab: false },
            { name: 'SCRUM', icon: 'fa-tasks', fab: false },
            { name: 'TRELLO', icon: 'fa-tasks', fab: false },
        ]
    }
];
