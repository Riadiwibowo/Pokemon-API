interface Props {
  currentPage: number;
  onPageChange: (page: number) => void;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

const Pagination = (props: Props) => {
  const { currentPage, onPageChange, hasNextPage, hasPreviousPage } = props;

  const handlePreviousPage = () => {
    if (hasPreviousPage) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (hasNextPage) {
      onPageChange(currentPage + 1);
    }
  };
  return (
    <div className="flex justify-between mt-4 ">
      <button onClick={handlePreviousPage} className="px-4 py-2 bg-gray-300 rounded">
        Previous
      </button>
      <span>Page {currentPage}</span>
      <button onClick={handleNextPage} className="px-4 py-2 bg-gray-300 rounded">
        Next
      </button>
    </div>
  );
};

export default Pagination;
