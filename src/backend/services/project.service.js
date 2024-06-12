import { db } from "../db/mockdb";

function getProjectDetails() {
  const project = db.project;
  return project;
}

function setProjectDetails(name, url, description, category) {
  db.project.name = name;
  db.project.url = url;
  db.project.description = description;
  db.project.category = category;
}

export default {
  getProjectDetails,
  setProjectDetails,
};
