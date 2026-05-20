import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjectById } from "../store/slices/projectsSlice";
import { Link, useParams } from "react-router-dom";
import { ArrowLeftIcon, Goal, HandCoins, Percent } from "lucide-react";
import ProjectStatusTag from "../components/ProjectStatusTag";
import InvestorsList from "../components/InvestorsList";
import StatCard from "../components/StatsCard";
import { formatDate } from "../utils/formatDate";

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
            <InvestorsList
                investments={selectedProject?.investments}
                selectedProject={selectedProject}
            />
            <div className="w-full grid grid-cols-2 gap-4 mt-6">
                <div className="bg-card rounded-lg border border-border p-3 w-full ">
                    <h2 className="uppercase text-md text-card-foreground">
                        Owner
                    </h2>
                    <div className="flex mt-3 bg-secondary rounded-lg p-3 items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                            {selectedProject?.owner.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                        </div>

                        <div>
                            <h3 className="font-semibold text-base">
                                {selectedProject?.owner.name}
                            </h3>

                            <p className="text-sm text-muted-foreground">
                                {selectedProject?.owner.email}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-card rounded-lg border border-border p-3 w-full ">
                    <h2 className="uppercase text-md text-card-foreground">
                        Details
                    </h2>

                    <div className="flex mt-3 bg-secondary rounded-lg p-3 flex-col gap-2">
                        <p className="flex items-center justify-between">
                            <span className="">Created At: </span>
                            <span className="text-muted-foreground font-semibold">
                                {new Date(
                                    selectedProject?.createdAt,
                                ).toLocaleDateString()}
                            </span>
                        </p>
                        <p className="flex items-center justify-between">
                            <span className="">last update : </span>
                            <span className="text-muted-foreground font-semibold">
                                {formatDate(selectedProject?.updatedAt)}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
