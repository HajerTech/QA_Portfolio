document.addEventListener('DOMContentLoaded', function () {
  const year = new Date().getFullYear();
  const yearElem = document.getElementById('year');
  if (yearElem) yearElem.textContent = year;
});
