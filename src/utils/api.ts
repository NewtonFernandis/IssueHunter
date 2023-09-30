import { Octokit } from "@octokit/core";
import { SearchIssuesResponse } from "../types/searchIssueResponse";
const octokit = new Octokit({
  auth: import.meta.env.GITHUB_PERSONAL_ACCESS_TOKEN,
  request: {
    fetch: fetch,
  },
});

export const githubApi = {
  getAllIssues: async (searchQuery: string, page: number): Promise<any> => {
    try {
      return await octokit.request("GET /search/issues", {
        q: searchQuery,
        per_page: 20,
        page: page,
      });
    } catch (error) {
      console.log(error);
    }
    return {} as SearchIssuesResponse;
  },
};
