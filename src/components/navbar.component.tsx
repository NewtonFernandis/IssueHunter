export default function NavBar(): JSX.Element {
  return (
    <div className="overflow-hidden w-full bg-white  border-2  p-4  sticky top-0  z-10 mb-2">
      <h1 className="flex items-center justify-between font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        <div>
          <span className="text-2xl">{'>_'}</span>IssueHunter
        </div>
        <iframe
          src="https://ghbtns.com/github-btn.html?user=NewtonFernandis&repo=IssueHunter&type=star&count=true&size=large"
          scrolling="0"
          width="170"
          height="30"
          title="GitHub"
        ></iframe>
      </h1>
    </div>
  );
}
