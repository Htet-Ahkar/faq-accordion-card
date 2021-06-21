const toggleTag = document.querySelectorAll(".q-and-a-container");

toggleTag.forEach((question) =>
  question.addEventListener("click", () => {
    if (question.classList.contains("active")) {
      question.classList.toggle("active");
    } else {
      toggleTag.forEach((question) => question.classList.remove("active"));
      question.classList.add("active");
    }
  })
);
