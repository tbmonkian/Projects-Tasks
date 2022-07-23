import express from 'express';
import projectsRoutes from './routes/projects.routes.js';
import tasksRoutes from './routes/tasks.routes.js';

const app = express();

app.use(express.json()) //para que pueda interpretar la data que reciba en json y guarda en req.body

app.use(projectsRoutes);
app.use(tasksRoutes);

export default app;