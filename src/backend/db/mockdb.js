import { sampleProjectDetails } from "./sample";

export const db = {
  tickets: [],
  project: {},
  users: [],
  comments: [],
};

export function initalizeDB() {
  db.project = sampleProjectDetails;
}
