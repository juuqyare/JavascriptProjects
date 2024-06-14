//get modal element
let modal = document.querySelector("#simpleModal");
//get open button
let modalBtn = document.querySelector("#modalBtn");
//get close button
let closeBtn = document.querySelector(".closeBtn");

//Listen for open click
modalBtn.addEventListener("click", openModal);
//Listen for close click
closeBtn.addEventListener("click", closeModal);
//Listen for outsideclick
window.addEventListener("click", outsideClick);

//function to open modal
function openModal() {
    modal.style.display = "block";
}

//function to close modal
function closeModal() {
    modal.style.display = "none";
}

//function to close modal if outside is click
function outsideClick(e) {
    if(e.target == modal){
    modal.style.display = "none";
    }
}

