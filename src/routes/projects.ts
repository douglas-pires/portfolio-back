import express from 'express';
const router = express.Router();
import ProjectDataSource from '../data-sources/project';
import Project from '../db/schema/project';

router.post('/projects', async (req, res) => {
  const projects = req.body;
  try {
    const dataSource = new ProjectDataSource(Project);
    const result = await dataSource.addProjects(JSON.parse(projects));
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

export default router;
