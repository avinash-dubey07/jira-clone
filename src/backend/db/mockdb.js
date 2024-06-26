import { sampleProjectDetails } from "./sampleProject";
import { sampleTicketDetails } from "./sampleTickets";

export let db = {
  tickets: [],
  project: {},
  users: [],
};

// Start of the application
export function initalizeDB() {
  const localStorageDB = localStorage.getItem("db");
  // Either put values from local storage into DB
  if (localStorageDB) {
    db = JSON.parse(localStorageDB);
    console.log("Loaded from local storage:", db);
  }
  // If values no value in local storage, then add sample values into DB
  else {
    db.project = sampleProjectDetails;
    db.tickets = sampleTicketDetails;
    console.log("Initialized with sample data:", db);
  }
}


// Just before the end of the application
export function syncDbToLocalStorage() {
  // key-> stirng value -> string;
  localStorage.setItem("db", JSON.stringify(db));
  console.log("Synced to local storage:", db);
}
