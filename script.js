const btn = document.querySelector(".btnOpen");
const form = document.querySelector(".fact-form");

btn.addEventListener("click", function () {
  /* To open the form */ if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    /* To close the form */
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});
