export interface SearchIssuesResponse {
  data: {
    total_count: number; // Total number of matching issues
    incomplete_results: boolean; // Indicates if the results are incomplete
    items: Issue[]; // An array of matching issues
  };
}

export interface Issue {
  id: number; // Issue ID
  node_id: string; // Node ID of the issue
  url: string; // URL of the issue
  repository_url: string; // URL of the repository containing the issue
  labels_url: string; // URL to access labels associated with the issue
  comments_url: string; // URL to access comments on the issue
  events_url: string; // URL to access events related to the issue
  html_url: string; // HTML URL of the issue
  number: number; // Issue number within the repository
  title: string; // Issue title
  user: User; // User who created the issue
  labels: Label[]; // Labels associated with the issue
  state: "open" | "closed"; // State of the issue (open or closed)
  locked: boolean; // Indicates if the issue is locked
  assignee: User | null; // User assigned to the issue (null if unassigned)
  assignees: User[]; // Users assigned to the issue
  milestone: Milestone | null; // Milestone associated with the issue (null if none)
  comments: number; // Number of comments on the issue
  created_at: string; // Date and time when the issue was created
  updated_at: string; // Date and time when the issue was last updated
  closed_at: string | null; // Date and time when the issue was closed (null if open)
  body: string; // Issue description or body
  reactions: Reactions; // Reactions on the issue
}

interface User {
  login: string; // Username of the user
  id: number; // User ID
  node_id: string; // Node ID of the user
  avatar_url: string; // URL to the user's avatar
  gravatar_id: string; // Gravatar ID of the user
  url: string; // URL to the user's profile
}

interface Label {
  id: number; // Label ID
  node_id: string; // Node ID of the label
  url: string; // URL to access the label
  name: string; // Name of the label
  description: string | null; // Description of the label (null if not provided)
  color: string; // Color code of the label
  default: boolean; // Indicates if the label is a default label for the repository
}

interface Milestone {
  url: string; // URL to access the milestone
  html_url: string; // HTML URL of the milestone
  labels_url: string; // URL to access labels associated with the milestone
  id: number; // Milestone ID
  node_id: string; // Node ID of the milestone
  number: number; // Milestone number
  state: "open" | "closed"; // State of the milestone (open or closed)
  title: string; // Milestone title
  description: string | null; // Description of the milestone (null if not provided)
  creator: User; // User who created the milestone
  open_issues: number; // Number of open issues in the milestone
  closed_issues: number; // Number of closed issues in the milestone
  created_at: string; // Date and time when the milestone was created
  updated_at: string; // Date and time when the milestone was last updated
  due_on: string | null; // Due date of the milestone (null if not set)
  closed_at: string | null; // Date and time when the milestone was closed (null if open)
}

interface Reactions {
  thumbs_up: number; // Number of thumbs-up reactions
  thumbs_down: number; // Number of thumbs-down reactions
  laugh: number; // Number of laugh reactions
  hooray: number; // Number of hooray reactions
  confused: number; // Number of confused reactions
  heart: number; // Number of heart reactions
  rocket: number; // Number of rocket reactions
  eyes: number; // Number of eyes reactions
}
