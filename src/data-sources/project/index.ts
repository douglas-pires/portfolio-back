import DataSourceMongo from '../base';
import Project from '../../db/schema/project';

export default class ProjectDataSource extends DataSourceMongo {
  getProjects({ first, after }) {
    return this.find({ first, after });
  }

  getOneProject(input) {
    const { id } = input;
    return this.findOne({ _id: id });
  }

  addProjects(projects) {
    return this.insertMany(projects);
  }

  addProject(input) {
    const { name, image } = input;

    const project = new Project({
      name,
      image,
    });

    return this.save(project);
  }

  removeProject(input) {
    const { id } = input;

    return this.deleteOne({ _id: id });
  }

  updateProject(input) {
    const { id, name, image } = input;

    return this.updateOne(
      { _id: id },
      {
        name,
        image,
      },
    );
  }
}
