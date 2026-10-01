import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from '../layouts/layout';
import Home from '../pages/home/Home';
import Experience from '../pages/experience/Experience';
import Education from '../pages/education/Education';
import Skills from '../pages/skills/Skills';
import Projects from '../pages/projects/Projects';
import NotFoundError from '../pages/NotFound/NotFoundError';

const AppRoutes = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="projects" element={<Home autoScrollTo="projects" />} />
                    <Route path="experience" element={<Home autoScrollTo="experience" />} />
                    <Route path="education" element={<Home autoScrollTo="education" />} />
                    <Route path="skills" element={<Home autoScrollTo="skills" />} />
                    {/* Catch-all route for 404 Error Page */}
                    <Route path="*" element={<NotFoundError />} />
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default AppRoutes;