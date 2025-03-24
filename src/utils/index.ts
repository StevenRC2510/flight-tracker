export function getLocalTime(gmtOffset: number) {
  const now = new Date();

  const localTime = new Date(now.getTime() + gmtOffset * 60 * 60 * 1000);

  return localTime.toLocaleString("es-ES", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  });
}

export function getPaginationRange(
  current: number,
  totalPages: number,
  siblingCount = 2
) {
  const totalNumbers = siblingCount * 2 + 5;
  if (totalPages <= totalNumbers) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const leftSibling = Math.max(current - siblingCount, 1);
  const rightSibling = Math.min(current + siblingCount, totalPages);

  const showLeftDots = leftSibling > 2;
  const showRightDots = rightSibling < totalPages - 1;

  const pages = [];

  if (!showLeftDots) {
    for (let i = 1; i <= 3 + siblingCount; i++) pages.push(i);
    pages.push("...", totalPages);
  } else if (!showRightDots) {
    pages.push(1, "...");
    for (let i = totalPages - (2 + siblingCount); i <= totalPages; i++)
      pages.push(i);
  } else {
    pages.push(1, "...");
    for (let i = leftSibling; i <= rightSibling; i++) pages.push(i);
    pages.push("...", totalPages);
  }

  return pages;
}
