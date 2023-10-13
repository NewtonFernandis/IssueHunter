import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useTheme } from '../contexts/ThemeContext';

export default function NavBar(): JSX.Element {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <div className="overflow-hidden w-full bg-white  border-2 dark:border-gray-500  p-4  sticky top-0  z-10 mb-2 dark:bg-dark">
      <div className="flex items-center justify-between font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        <div>
          <span className="text-2xl">{'>_'}</span>IssueHunter
        </div>
        <div className="flex">
          <iframe
            src="https://ghbtns.com/github-btn.html?user=NewtonFernandis&repo=IssueHunter&type=star&count=true&size=large"
            scrolling="0"
            width="120"
            height="30"
            title="GitHub"
          ></iframe>
          <DarkModeSwitch
            className=" text-purple-400 bg-gray-100 rounded-full dark:bg-transparent dark:text-purple-400"
            checked={!darkMode}
            onChange={() => toggleDarkMode(darkMode)}
          />
        </div>
      </div>
    </div>
  );
}
