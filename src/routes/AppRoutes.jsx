import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../layouts/layout';
import Home from '../pages/home/Home';
import Experience from '../pages/experience/Experience';
import Skills from '../pages/skills/Skills';
import Projects from '../pages/projects/Projects';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="experience" element={<Experience />} />
                    <Route path="skills" element={<Skills />} />
                    <Route path="projects" element={<Projects />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;