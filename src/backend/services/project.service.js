import { db } from "../db/mockdb";

function getProjectDetails() {
  const project = db.project;
  return project;
}

export default {
  getProjectDetails,
};
