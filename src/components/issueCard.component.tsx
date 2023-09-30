import { Card, CardContent } from "@mui/joy";
import moment from "moment";
import { Issue } from "../types/searchIssueResponse";

type Props = {
  issue: Issue;
};
export default function IssueCard({ issue }: Props): JSX.Element {
  return (
    <Card className="mb-2 h-64">
      <div>
        <h3 className="text-lg font-medium mb-2 truncate">{issue.title}</h3>

        <p className="text-gray-600">
          <strong>Created By:</strong> {issue.user.login}{" "}
          {moment(issue.created_at).fromNow()}
        </p>

        <p className="text-gray-600">
          <strong>Assignee:</strong>{" "}
          {issue.assignee ? issue.assignee.login : "Unassigned"}
        </p>

        <p className="text-gray-600">
          <strong>Status:</strong> {issue.state === "open" ? "Open" : "Closed"}
        </p>

        <p className="text-gray-600">
          <strong>Comments:</strong> {issue.comments}
        </p>

        <p className="text-gray-600">
          <strong>Updated:</strong> {moment(issue.updated_at).fromNow()}
        </p>

        <p className="text-gray-600">
          {issue.labels.map((label) => (
            <a
              key={label.id}
              className="bg-gray-200 text-gray-800 rounded-full text-xs px-2 py-1 mr-1"
            >
              {label.name}
            </a>
          ))}
        </p>
      </div>
      <CardContent orientation="horizontal">
        <a
          href={issue.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-3 py-1 border border-purple-400 rounded-md hover:bg-purple-400 hover:text-white hover:border-transparent h-fit"
        >
          View Issue
        </a>

        <a
          href={issue.repository_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-3 py-1 border border-purple-400 rounded-md  hover:bg-purple-400 hover:text-white hover:border-transparent h-fit"
        >
          View Repository
        </a>
      </CardContent>
    </Card>
  );
}
