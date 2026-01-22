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

// Add CORS middleware
app.use('/api/*', cors());

// 1. Root Redirect: Redirect base URL to your main site
app.get('/', (c) => {
  return c.redirect('https://www.syn-forge.com', 301);
});

// 2. API Routes
app.get('/api/home', async (c) => {
  return await HomePageController.handleHome(c);
});

app.get('/api/projects', async (c) => {
  return await ProjectsPageController.handleProjects(c);
});

// 3. Global Catch-all: Redirect any undefined routes to main site
app.notFound((c) => {
  return c.redirect('https://www.syn-forge.com', 302);
});

export default app;