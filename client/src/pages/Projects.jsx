import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getOwnerProjects,
    getAllProjects,
} from "../store/slices/projectsSlice";
import ProjectsTable from "../components/ProjectsTable";
import ProjectsFilter from "../components/ProjectsFilter";

const Projects = () => {
    const { projects, error, loading } = useSelector((state) => state.projects);

    const { user } = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    useEffect(() => {
        if (user && user.role === "admin") {
            dispatch(getAllProjects());
        } else {
            dispatch(getOwnerProjects());
        }
    }, [dispatch, user]);

    return (
        <div>
            <h1 className="page-heading">projects page</h1>

            {error && <p className="text-red-500">{error}</p>}
            <ProjectsFilter />

            {loading ? (
                <p>Loading...</p>
            ) : projects.length > 0 ? (
                <div className="overflow-x-visible rounded shadow-lg bg-secondary border mt-4 border-secondary ">
                    <ProjectsTable projects={projects} />
                </div>
            ) : (
                <p>No projects found.</p>
            )}
        </div>
    );
};

export default Projects;
