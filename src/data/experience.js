/**
 * Archivo de datos para la experiencia laboral.
 * Importado en: src/pages/experience/Experience.jsx
 */

export const getExperienceData = (t) => [
    { 
        date: '4/2026 - actual', 
        title: 'Fullstack Web Developer - Freelance', 
        company: 'Freelance', 
        projects: [
            { date: '5/2026 - actual', desc: t.exp_p_0 },
            { date: '4/2026', desc: t.exp_p_1 }
        ]
    },
    { date: '9/2025 - 2/2026', title: 'Fullstack Web Developer', company: 'Circular Score', desc: t.exp_p_2 },
    { date: '7/2023 - 9/2025', title: t.exp_h3_3, company: 'Amazon, GLS, Tipsa', desc: t.exp_p_3 },
    { date: '7/2017 - 3/2024', title: t.exp_h3_4, company: t.exp_h4_4, desc: t.exp_p_4 }
];
