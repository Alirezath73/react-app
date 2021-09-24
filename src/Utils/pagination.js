export const pagination = (totalItems, itemsPerPage, currentPage) => {
  const startIndex = (currentPage - 1) * itemsPerPage;

  return totalItems.slice(startIndex, (startIndex + itemsPerPage));
};
