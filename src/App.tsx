import { useEffect, useState } from 'react';
import Filters from './components/filters.component';
import IssueCard from './components/issueCard.component';
import NavBar from './components/navbar.component';
import Pagination from './components/pagination.component';
import Spinner from './components/spinner.component';
import { Issue } from './types/searchIssueResponse';
import { githubApi } from './utils/api';
import { useTheme } from './contexts/ThemeContext';


function App() {
  const [issues, setIssues] = useState<Issue[] | undefined>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('is:issue is:open');
  const {darkMode} = useTheme();

  useEffect(() => {
    getIssues(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, searchQuery]);

  const getIssues = async (page: number) => {
    try {
      setLoading(true);
      const response = await githubApi.getAllIssues(searchQuery, page);
      if (response) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const issues: any[] = response?.data.items;
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
    <div className={`${darkMode ? "dark" : "light"}`}>
      <NavBar />
      <Filters setSearchQuery={setSearchQuery} />
      <div className="lg:ml-[365px] relative h-full mt-2 p-2 dark:bg-dark">
        {!loading ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 dark:bg-dark">
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
      </div>
      <Pagination
        prevPage={prevPage}
        currentPage={currentPage}
        nextPage={nextPage}
      />
    </div>
  );
}

export default App;
