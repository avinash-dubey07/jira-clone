import { db } from "../db/mockdb";

function getProjectDetails() {
  const project = db.project;
  return project;
}

function setProjectDetails(name, url, description, projectCategory) {
  db.project.name = name;
  db.project.url = url;
  db.project.description = description;
  db.project.projectCategory = projectCategory;
}

export default {
  getProjectDetails,
  setProjectDetails,
};
