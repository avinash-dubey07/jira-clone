/**
 * This a service file
 * It contains methods which perform CRUD
 * opertions on tickets table / collection
 */

//TO DO READ: ENUM
const STATUS = ["BACKLOG", "SELECTED FOR DEVELOPMENT", "IN PROGRESS", "DONE"];
const PRIORTY = ["Low", "Medium", "High", "Urgent"];

const sampleTicket = {
  shortSummary: "Modal Implementation", // string
  description:
    "Create a UI for creating tickets, then wrap it in a modal component", // string
  status: "BACKLOG", // enum of STATUS
  assignees: ["1"], // array of user ids
  reporter: "2", // userId of the reporter
  priority: "Medium", // enum of PRIORITY
  estimateInHours: 6, // Estimate for the time required to complete this ticket in hours
  timeTracking: {
    timeLogged: 4, // Time logged by the user in hours
    timeLeft: 2, // Time remaining for the task in hours
  },
};

// Create operation
function createTicketInDB() {}

// Read operation
function getTicketsFromDB() {}

// Update operation
function updateTicketInDB() {}

// Delete operation
function deleteTicketInDB() {}
