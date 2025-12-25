// src/Api.ts
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import type { D1Database } from "@cloudflare/workers-types";
import { HomePageController } from "./controller/HomePageController";
import { ProjectsPageController } from './controller/ProjectsPageController';

// Define the environment types for Hono
export type Bindings = {
  DB: D1Database;
};

const app = new Hono<{ Bindings: Bindings }>();

// Add CORS middleware (replacing manual headers in controllers)
app.use('/api/*', cors());

// Define your routes
app.get('/api/home', async (c) => {
  return await HomePageController.handleHome(c);
});

app.get('/api/projects', async (c) => {
  return await ProjectsPageController.handleProjects(c);
})

app.notFound((c) => c.text('Not Found', 404));

export default app;