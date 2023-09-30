import { Button, ButtonGroup } from "@mui/joy";

type Props = {
  prevPage: () => void;
  currentPage: number;
  nextPage: () => void;
};
export default function Pagination({
  prevPage,
  currentPage,
  nextPage,
}: Props): JSX.Element {
  return (
    <div
      className="fixed bottom-0 right-0 h-16  
        bg-white border-t-2 border-l-2 border-purple-300 p-4
        flex items-center justify-end pr-4 rounded-tr-none rounded-bl-none rounded-lg
         z-10 shadow-lg"
    >
      <ButtonGroup aria-label="outlined primary button group">
        <Button onClick={prevPage} disabled={currentPage === 1}>
          Previous Page
        </Button>
        <Button onClick={nextPage}>Next Page</Button>
      </ButtonGroup>
    </div>
  );
}
