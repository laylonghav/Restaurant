document.querySelectorAll(".nav-item a").forEach((link) => {
  link.addEventListener("click", function () {
    // Remove 'active' class from all links
    document.querySelectorAll(".nav-item a").forEach((link) => {
      link.classList.remove("active");
    });

    // Add 'active' class to the clicked link
    this.classList.add("active");
  });
});
