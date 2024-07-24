import { useEffect, useState } from "react";

export const usePagination = (initialOffset: number = 0, limit: number = 20) => {
  const [offset, setOffset] = useState<number>(initialOffset);
  const [currentPage, setCurrentPage] = useState<number>(Math.floor(initialOffset / limit) + 1);

  const handlePageChange = (newPage: number) => {
    const newOffset = (newPage - 1) * limit;
    setOffset(newOffset);
    setCurrentPage(newPage);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return { offset, currentPage, handlePageChange };
};
