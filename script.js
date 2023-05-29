// Same variabels that re-used

const modal = document.getElementById("myModal");
const closespan = document.getElementsByClassName("close")[0];

const modalcontent = document.getElementsByClassName("modalContent");

closespan.addEventListener("click", () => {
  modal.style.display = "none";
});

// containers for the differnent btn containers

const containers = document.querySelectorAll(
  ".grid_box_five_information_box , .grid_box_six_information_box"
);

containers.forEach((container, index) => {
  container.addEventListener("click", () => {
    modal.style.display = "block";
    modalcontent.style.display = "block";

  });
});
