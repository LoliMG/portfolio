import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from '../layouts/layout';
import Home from '../pages/home/Home';
import Experience from '../pages/experience/Experience';
import Skills from '../pages/skills/Skills';
import Projects from '../pages/projects/Projects';
import NotFoundError from '../pages/NotFound/NotFoundError';

const AppRoutes = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="experience" element={<Experience />} />
                    <Route path="skills" element={<Skills />} />
                    <Route path="projects" element={<Projects />} />
                    {/* Catch-all route for 404 Error Page */}
                    <Route path="*" element={<NotFoundError />} />
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default AppRoutes;