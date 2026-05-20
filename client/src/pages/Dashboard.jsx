import "../styles/Dashboard.css";
import ProjectCard from "../components/ProjectCard";
import {
  FiFolder,
  FiCheckCircle,
  FiXCircle,
  FiDollarSign,
} from "react-icons/fi";
// import { useDispatch, useSelector } from "react-redux";
// import { getProjectsStats } from "../store/slices/projectsSlice";
// import { useEffect } from "react";

const Dashboard = () => {
  // this is the way to get the stats from the server and log it to the console, you can use this data to display it in the dashboard

  // const { stats, error, loading } = useSelector((state) => state.projects);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getProjectsStats());
  // }, [dispatch]);

  // console.log(stats);

  const projects = [
    {
      id: 1,
      title: "EduStream Platform",
      status: "Ouvert",
      target: "80 000 MAD",
      raised: "54 000 MAD",
      progress: 67,
      investors: 9,
    },

    {
      id: 2,
      title: "Health Connect",
      status: "Fermé",
      target: "120 000 MAD",
      raised: "120 000 MAD",
      progress: 45,
      investors: 7,
    },

    {
      id: 3,
      title: "Green Energy Hub",
      status: "Ouvert",
      target: "200 000 MAD",
      raised: "90 000 MAD",
      progress: 90,
      investors: 10,
    },

    {
      id: 4,
      title: "Smart Farming",
      status: "Fermé",
      target: "150 000 MAD",
      raised: "75 000 MAD",
      progress: 75,
      investors: 12,
    },
  ];

  return (
    <div className="dashboard">
      {/* DashboardHeader Start */}
      <div className="dashboard-header">
        <h1 className="title-color">Dashboard</h1>
        {/* <p className="title-color">Vue Globale De Vos Compagne</p> */}

        <button className="title-color">Nouveau Projet</button>
      </div>
      {/* DashboardHeader End */}

      <div className="stats-container">
        {/* DashboardTop Start */}
        <div className="stat-card">
          <div className="stat-top">
            <h3>Total Projects</h3>

            <div className="stat-icon">
              <FiFolder />
            </div>
          </div>
          <p>12</p>
        </div>

        <div className="stat-card">
          <div className="stat-top">
            <h3>Open Projects</h3>

            <div className="stat-icon open-icon">
              <FiCheckCircle />
            </div>
          </div>

          <p>8</p>
        </div>

        <div className="stat-card">
          <div className="stat-top">
            <h3>Closed Projects</h3>

            <div className="stat-icon closed-icon">
              <FiXCircle />
            </div>
          </div>

          <p>4</p>
        </div>

        <div className="stat-card">
          <div className="stat-top">
            <h3>Total Capital</h3>

            <div className="stat-icon capital-icon">
              <FiDollarSign />
            </div>
          </div>

          <p>$25,000</p>
        </div>
        {/* DashboardTop End */}
      </div>

      <div className="recent-projects">
        {/* DashboardHeaderBottom Start */}
        <div className="recent-header">
          <h2 className="title-color">Mes projets récents</h2>
          <span className="title-color">Voir tout</span>
        </div>
        {/* DashboardHeaderBottom End */}

        {/* DashboardBottom Start */}
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {/* DashboardBottom End */}
      </div>
    </div>
  );
};

export default Dashboard;
