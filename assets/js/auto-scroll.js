let redirected = false;

window.addEventListener("scroll", function () {
  if (redirected) return;

  const scrollPosition = window.innerHeight + window.scrollY;
  const pageHeight = document.documentElement.scrollHeight;

  if (scrollPosition >= pageHeight - 50) {
    redirected = true;

    setTimeout(() => {
      window.location.href = "/projects_and_competitions/";
    }, 600);
  }
});