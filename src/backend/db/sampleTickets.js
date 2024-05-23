export const sampleTicketDetails = [
  {
  id: 1,
  issueType: "bug", // enum of ISSUE_TYPE
  shortSummary: "Fix the bug", // string
  description: "Need to fix this bug as soon as possible.",
  status: "BACKLOG", 
  assignees: [1],
  reporter: 2,
  priority: 'urgent',
},
{
  id: 2,
  issueType: "story", // enum of ISSUE_TYPE
  shortSummary: "Retrouville", // string
  description: "To find peace once again or to find each other.",
  status: "inProgress", 
  assignees: [3],
  reporter: 1,
  priority: 'medium',
},
{
  id: 3,
  issueType: "task", // enum of ISSUE_TYPE
  shortSummary: "save the plants in your city", // string
  description: "Plant trees around your offices and support planting trees.",
  status: "todo", 
  assignees: [2],
  reporter: 3,
  priority: 'high',
}
]