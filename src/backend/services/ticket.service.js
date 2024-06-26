import { db } from "../db/mockdb";
/**
 * This is a service file
 * It contains methods which perform CRUD
 * opertions on tickets table / collection
 */

//TO READ: ENUM, JSON, Array Of objects

const ISSUE_TYPE = ["Task", "Bug", "Story"];
const STATUS = ["BACKLOG", "To Do", "IN PROGRESS", "DONE"];
const PRIORTY = ["Low", "Medium", "High", "Urgent"];


// Create operation
/**
 * @param { { id: number; issueType: string; shortSummary: string; description: string; status: string; assignees: number[]; reporter: number; priority: string; estimateInHours: number; timeTracking: { timeLogged: number; timeLeft: number } } } ticket
 */
function createTicketInDB(ticket) {
  // Step 1. Get all tickets present in DB
  const dbTickets = db.tickets; // Array of tickets in DB [eg: 10 tickets] contains all the tickets

  // Step 2. Add new ticket to the DB Tickets
  dbTickets.push({ ...ticket, id: db.tickets.length + 1 });

  console.log({ dbTickets });
}

// Get all the tickets from DB
function getAllTickets() {
  //Create deep copy of DB Tickets
  const dbTickets = JSON.parse(JSON.stringify(db.tickets));
  return dbTickets;
}

// Read operation
function getTicketsByStatus(status) {
  // Step 1. Get all tickets present in DB

  const dbTickets = db.tickets; // Array of tickets in DB [eg: 10 tickets] contains all the tickets

  // Step 2. Declare an array of search ticket. This will only contain tickets which match the given filter
  // const searchTickets = []; // Tickets that will match the given filter [eg: 2 tickets found with report = 2]

  // Step 3. Iterate over all the tickets in DB and check for every ticket if it matches the filter. If it does then push
  // it to the search tickets array which is declared in the step 2

  const searchTickets = dbTickets.filter((ticket) => ticket.status === status);

  // for (i = 0; i < dbTickets.length; i++) {
  //   // Get the current ticket on which for loop index is currently at
  //   const dbTicket = ticketsInDB[i];
  //   // Check if this ticket has the reporter that was given as input filter
  //   if (dbTicket.status === status) {
  //     // if it matches then push this ticket to results array of searchTickets
  //     searchTickets.push(dbTicket);
  //   }
  // }

  // return all the tickets that match the filter
  return searchTickets;
}

// Update operation
function updateTicketInDB(ticketId, updatedTicket) {
  // get all tickets in db
  const ticketsInDB = db.tickets;

  // find the index of ticket where ticketId matches the filter ticket id
  const index = ticketsInDB.findIndex((ticket) => ticket.id === ticketId);

  // if a valid index is found then update the ticket to the one passed to function
  if (index >= 0) {
    ticketsInDB[index] = { ...ticketsInDB[index], ...updatedTicket };
  }
}

// Delete operation
function deleteTicketInDB(ticketId) {
  // Step 1. get all tickets in db
  const ticketsInDB = db.tickets;
  // Step 2. find the index of ticket where ticketId matches the filter ticket id
  const index = ticketsInDB.findIndex((ticket) => ticket.id === ticketId);
  // Step 3. Delete the ticket found at the index
  if (index >= 0) {
    ticketsInDB.splice(index, 1);
  }
}

export default {
  createTicketInDB,
  getAllTickets,
  getTicketsByStatus,
  updateTicketInDB,
  deleteTicketInDB,
};
