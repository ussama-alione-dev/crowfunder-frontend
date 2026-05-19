import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../store/slices/projectsSlice";
import ProjectsTable from "../components/ProjectsTable";
import ProjectsFilter from "../components/ProjectsFilter";
import ProjectsTableSkeleton from "../components/ProjectsTableSkeleton";
import EmptyProjects from "../components/EmptyProjects";
import { Link } from "react-router-dom";

const Projects = () => {
    const { projects, error, loading } = useSelector((state) => state.projects);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProjects());
    }, [dispatch]);

    return (
        <div>
            <div className="w-full flex mb-10 items-center justify-between">
                <h1 className="page-heading">projects page</h1>
                <Link
                    to={"/create-project"}
                    className="mt-6 px-5 py-2 rounded text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                >
                    + Create Project
                </Link>
            </div>

            {error && <p className="text-red-500">{error}</p>}
            <ProjectsFilter />

            {loading ? (
                <ProjectsTableSkeleton rows={5} />
            ) : projects.length > 0 ? (
                <div className="overflow-x-visible rounded shadow-lg bg-secondary border mt-4 border-secondary ">
                    <ProjectsTable projects={projects} />
                </div>
            ) : (
                <EmptyProjects />
            )}
        </div>
    );
};

export default Projects;
