const openModal = document.getElementById("openModal");

const closeModal = document.getElementById("closeModal");

const modal = document.getElementById("modal");

openModal.addEventListener("click", function () {
  modal.style.display = "block";
});

closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});
