import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjectById } from "../store/slices/projectsSlice";
import { Link, useParams } from "react-router-dom";
import { ArrowLeftIcon, Goal, HandCoins, Percent } from "lucide-react";
import ProjectStatusTag from "../components/ProjectStatusTag";
import InvestorsList from "../components/InvestorsList";

const ProjectDetails = () => {
    const { selectedProject, loading, error } = useSelector(
        (state) => state.projects,
    );
    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProjectById(id));
    }, [dispatch, id]);

    if (error) return <h1>{error}</h1>;

    console.log(selectedProject);

    if (loading) return <h1>Loading...</h1>;
    return (
        <div>
            <h1 className="page-heading mb-10">Project Details</h1>

            <div className="flex w-full  items-center justify-between">
                <Link
                    to="/projects"
                    className="flex items-center group  gap-2 justify-start "
                >
                    <div className="bg-accent group-hover:text-primary flex w-8 h-8 hover:bg-accent/60 transition-all duration-200 hover:text-primary items-center justify-center p-2 rounded-full">
                        <ArrowLeftIcon className="" size={15} />
                    </div>
                    Back to Projects
                </Link>
                <ProjectStatusTag status={selectedProject?.status} />
            </div>

            <div className="w-full grid grid-cols-3 gap-4 mt-6">
                <StatCard
                    title="funding goal"
                    value={`$${selectedProject?.fundingGoal.toLocaleString()}`}
                    icon={<Goal />}
                />
                <StatCard
                    title="current funding"
                    value={`$${selectedProject?.currentFunding.toLocaleString()}`}
                    icon={<HandCoins />}
                />
                <StatCard
                    title="max investment percentage"
                    value={`${selectedProject?.maxInvestPercentage}%`}
                    icon={<Percent />}
                />
            </div>
            <InvestorsList investments={selectedProject?.investments} />
        </div>
    );
};

const StatCard = ({ title, value, icon }) => {
    return (
        <div className="bg-secondary rounded-lg p-4">
            {icon && <div className="mb-4">{icon}</div>}
            <h3 className="text-sm text-gray-500">{title}</h3>
            <p className="text-2xl font-bold">{value}</p>
        </div>
    );
};

export default ProjectDetails;
