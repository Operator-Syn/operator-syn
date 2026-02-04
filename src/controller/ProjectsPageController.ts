// src/controller/ProjectsPageController.ts
import type { Context } from "hono";
import { ProjectsPageModel } from "../model/ProjectsPageModel";
import type { Bindings } from "../Api";

export class ProjectsPageController {
  static async handleProjects(c: Context<{ Bindings: Bindings }>) {
    const model = new ProjectsPageModel(c.env.DB);
    
    try {
      const data = await model.getAllProjects();
      return c.json(data);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      console.error("Error fetching projects:", errorMessage);
      return c.json({ error: "Failed to fetch projects" }, 500);
    }
  }
}