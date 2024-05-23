import { sampleProjectDetails } from "./sampleProject";

export let db = {
  tickets: [],
  project: {},
  users: [],
  comments: [],
};

// Start of the application
export function initalizeDB() {
  const localStorageDB = localStorage.getItem("db");
  // Either put values from local storage into DB
  if (localStorageDB) {
    db = JSON.parse(localStorageDB);
  }
  // If values no value in local storage, then add sample values into DB
  else {
    db.project = sampleProjectDetails;
  }
}


// Just before the end of the application
export function syncDbToLocalStorage() {
  // key-> stirng value -> string;
  localStorage.setItem("db", JSON.stringify(db));
}
