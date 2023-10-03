import React, { useEffect, useState } from 'react';
import Filters from './components/filters.component';
import IssueCard from './components/issueCard.component';
import NavBar from './components/navbar.component';
import Pagination from './components/pagination.component';
import Spinner from './components/spinner.component';
import { Issue } from './types/searchIssueResponse';
import { githubApi } from './utils/api';
function App() {
  const [issues, setIssues] = useState<Issue[] | undefined>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('is:issue is:open');

  useEffect(() => {
    getIssues(currentPage);
  }, [currentPage, searchQuery]);

  const getIssues = async (page: number) => {
    try {
      setLoading(true);
      const response = await githubApi.getAllIssues(searchQuery, page);
      if (response) {
        const issues: Issue[] = response?.data.items;
        setIssues(issues);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <React.Fragment>
      <NavBar />
      <Filters setSearchQuery={setSearchQuery} />

      <div className="ml-[365px] relative h-screen">
        {!loading ? (
          <div className="grid grid-cols-2 gap-2">
            {issues &&
              issues.map(issue => (
                <div key={issue.id} className="w-full">
                  <IssueCard issue={issue} />
                </div>
              ))}
          </div>
        ) : (
          <Spinner />
        )}

        <Pagination
          prevPage={prevPage}
          currentPage={currentPage}
          nextPage={nextPage}
        />
      </div>
    </React.Fragment>
  );
}

export default App;
