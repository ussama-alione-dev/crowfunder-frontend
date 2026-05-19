//TODO : create project controller , get all projects controller, get project by id controller, update project controller, delete project controller

import {
    createProjectService,
    getAllProjectsService,
    getProjectByIdService,
    updateProjectService,
    deleteProjectService,
    closeProjectService,
} from "../services/project.service.js";

export const createProjectController = async (req, res) => {
    const projectData = req.body;
    projectData.owner = req.user._id;

    if (req.body.maxInvestPercentage) {
        projectData.maxInvestPercentage =
            Number(req.body.maxInvestPercentage) / 100;
    }

    const project = await createProjectService(projectData);

    res.status(201).json({
        success: true,
        data: project,
    });
};

export const getAllProjectsController = async (req, res) => {
    // const { projects, investments } = await getAllProjectsService();
    const { projects, investments } = await getAllProjectsService(req.user._id);

    res.status(200).json({
        success: true,
        data: { projects, investments },
    });
};

export const getProjectByIdController = async (req, res) => {
    const projectId = req.params.id;
    const project = await getProjectByIdService(projectId);
    res.status(200).json({
        success: true,
        data: project,
    });
};

export const updateProjectController = async (req, res) => {
    const projectId = req.params.id;

    const updateData = req.body;

    const project = await updateProjectService(projectId, updateData);
    res.status(200).json({
        success: true,
        data: project,
    });
};

export const deleteProjectController = async (req, res) => {
    const projectId = req.params.id;
    await deleteProjectService(projectId);
    res.status(200).json({
        success: true,
        message: "Project deleted successfully",
    });
};

export const closeProjectController = async (req, res) => {
    const projectId = req.params.id;
    const project = await closeProjectService(projectId);
    res.status(200).json({
        success: true,
        data: project,
    });
};
