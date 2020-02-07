import mongoose, { Schema } from 'mongoose';

export interface Project {
  name: string;
  image: string;
  price: string;
  categoryTree: string;
  partnerUrl: string;
  partner: string;
}

const ProjectSchema: Schema<Project> = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Project', ProjectSchema);
