import Project from "../models/Project.model.js";
import Investment from "../models/Investment.model.js";
import mongoose from "mongoose";
import { CustomError } from "../utils/CustomError.js";

//Todo  : Implement getAllProjectsService, getProjectByIdService, updateProjectService, deleteProjectService

export const createProjectService = async (projectData) => {
    const project = await Project.create(projectData);

    if (!project) {
        throw new CustomError("Failed to create project", 500);
    }
    return project;
};

export async function getAllProjectsService(userId) {
    const projects = await Project.find({ owner: userId }).populate("owner");

    const investments = await Investment.find({
        project: { $in: projects.map((p) => p._id) },
    });

    if (!projects) {
        throw new CustomError("Error fetching projects: " + error.message);
    }
    return { projects, investments };
}

export async function getProjectByIdService(projectId) {
    const project = await Project.findById(projectId).populate("owner");
    if (!project) {
        throw new CustomError("Project not found", 404);
    }
    return project;
}

export async function updateProjectService(projectId, updateData) {
    const project = await Project.findByIdAndUpdate(projectId, updateData, {
        new: true,
    });
    if (!project) {
        throw new CustomError("Project not found", 404);
    }
    return project;
}

export async function deleteProjectService(projectId) {
    const project = await Project.findByIdAndDelete(projectId);
    if (!project) {
        throw new CustomError("Project not found", 404);
    }
    return project;
}

export async function closeProjectService(projectId) {
    const project = await Project.findByIdAndUpdate(
        projectId,
        { status: "closed" },
        { new: true },
    );
    if (!project) {
        throw new CustomError("Project not found", 404);
    }
    return project;
}
