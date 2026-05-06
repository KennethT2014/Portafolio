import { lazy, Suspense } from 'react';

const ProjectsComponent = lazy(() => import('@/components/Projects'));

export const preloadProjects = () => {
    import('@/components/Projects');
};

const ProjectsPage = () => {
    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-8">Mis Proyectos</h1>
            <Suspense fallback={<div>Cargando proyectos...</div>}>
                <ProjectsComponent />
            </Suspense>
        </div>
    );
};

export default ProjectsPage;
