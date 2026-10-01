/**
 * Archivo de datos para las habilidades técnicas.
 * Importado en: src/pages/skills/Skills.jsx
 */

export const getSkillsData = (t) => [
    {
        id: 'frontend',
        title: t.skill_cat_frontend || 'Frontend',
        icon: 'fa-code',
        badge: 'UI & Interacción',
        skills: [
            { name: 'React', icon: 'fa-react', fab: true, color: '#61DAFB' },
            { name: 'JavaScript (ES6+)', icon: 'fa-js-square', fab: true, color: '#F7DF1E' },
            { name: 'HTML5', icon: 'fa-html5', fab: true, color: '#E34F26' },
            { name: 'CSS3', icon: 'fa-css3-alt', fab: true, color: '#1572B6' },
            { name: 'Bootstrap', icon: 'fa-bold', fab: false, color: '#7952B3' },
        ]
    },
    {
        id: 'backend',
        title: t.skill_cat_backend || 'Backend & Datos',
        icon: 'fa-server',
        badge: 'Arquitectura & APIs',
        skills: [
            { name: 'Node.js', icon: 'fa-node-js', fab: true, color: '#339933' },
            { name: 'Express', icon: 'fa-bolt', fab: false, color: '#f59e0b' },
            { name: 'PostgreSQL', icon: 'fa-database', fab: false, color: '#336791' },
            { name: 'MySQL', icon: 'fa-database', fab: false, color: '#00758F' },
            { name: 'Supabase', icon: 'fa-cloud-upload-alt', fab: false, color: '#3ECF8E' },
        ]
    },
    {
        id: 'tools',
        title: t.skill_cat_tools || 'Herramientas & Flujo',
        icon: 'fa-tools',
        badge: 'Control & Diseño',
        skills: [
            { name: 'Git / GitHub', icon: 'fa-git-alt', fab: true, color: '#F05032' },
            { name: 'Vercel', icon: 'fa-cloud', fab: false, color: '#00d2ff' },
            { name: 'Figma', icon: 'fa-figma', fab: true, color: '#F24E1E' },
            { name: 'Scrum / Ágil', icon: 'fa-tasks', fab: false, color: '#06b6d4' },
            { name: 'Trello', icon: 'fa-clipboard-list', fab: false, color: '#0079BF' },
        ]
    },
    {
        id: 'ai-lang',
        title: t.skill_cat_ai_lang || 'IA & Comunicación',
        icon: 'fa-brain',
        badge: 'Productividad & Idiomas',
        isSpecial: true,
        skills: [
            { 
                name: t.skill_ai_dev || 'Desarrollo con IA', 
                subtitle: t.skill_ai_sub || 'Workflows con IA & Productividad',
                icon: 'fa-brain', 
                fab: false, 
                color: '#a855f7',
                isHighlight: true 
            },
            { 
                name: t.lang_es || 'Español', 
                level: t.level_native || 'Nativo', 
                icon: 'fa-globe-europe', 
                fab: false, 
                color: '#00d2ff',
                isLang: true 
            },
            { 
                name: t.lang_en || 'Inglés', 
                level: t.level_fluent || 'Fluido', 
                icon: 'fa-globe-americas', 
                fab: false, 
                color: '#3b82f6',
                isLang: true 
            },
        ]
    }
];
