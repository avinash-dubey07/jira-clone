export const sampleTicketDetails = [
  {
    id: 1,
    issueType: "Bug", // enum of ISSUE_TYPE
    shortSummary: "Fix the bug", // string
    description: "Need to fix this bug as soon as possible.",
    status: "backlog",
    assignees: [1],
    reporter: 2,
    priority: "Urgent",
  },
  {
    id: 2,
    issueType: "Story", // enum of ISSUE_TYPE
    shortSummary: "Improvement Request", // string
    description: "There is a bug in the jira clone re rendering.",
    status: "inProgress",
    assignees: [3],
    reporter: 1,
    priority: "Medium",
  },
  {
    id: 3,
    issueType: "Task", // enum of ISSUE_TYPE
    shortSummary: "Website Deployment", // string
    description: "Deploy the app asap.",
    status: "todo",
    assignees: [2],
    reporter: 3,
    priority: "High",
  },
];
