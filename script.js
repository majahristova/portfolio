//JS for Modal

const modal = document.getElementsByClassName("modal");
const spans = document.getElementsByClassName("close");


const containers = document.querySelectorAll(".grid_box");

containers.forEach((onClickContainer, index) => {
  onClickContainer.addEventListener("click", () => {
    modal[index].style.display = "block";
  });
  spans[index].addEventListener("click", () => {
    modal[index].style.display = "none";
  });
 
});


//Darkmode with localstorage

let darkmode = localStorage.getItem("darkMode");
const darkModeBtn = document.querySelector('#dark-mode-btn');

const turnOnDarkMode = () =>{
  document.body.classList.add('darkmode');

  localStorage.setItem('darkMode', 'enabled');

}
const disableDarkmode = () =>{
  document.body.classList.remove('darkmode');

  localStorage.setItem('darkMode', null);

}


darkModeBtn.addEventListener('click', ()=>{
if (darkmode !== 'enabled'){
  turnOnDarkMode();
  console.log(darkmode)
} else {
  disableDarkmode();
  console.log(darkmode)
}
})


