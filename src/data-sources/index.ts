import UserDataSource from './user';
import ProjectDataSource from './project';
import User from '../db/schema/user';
import Project from '../db/schema/project';

export default () => ({
  user: new UserDataSource(User),
  project: new ProjectDataSource(Project),
});
