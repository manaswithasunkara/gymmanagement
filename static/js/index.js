let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let admin = document.querySelector(".admin")
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
	slider.classList.add("moveslider");
	formSection.classList.add("form-section-move");
});

// admin.addEventListener("click", () => {
// 	slider.classList.add("moveslider2");
// 	formSection.classList.add("form-section-move2");
// });

// admin.addEventListener("click", () => {
// 	slider.classList.remove("moveslider");
// 	formSection.classList.remove("form-section-move");
// });

login.addEventListener("click", () => {
	slider.classList.remove("moveslider");
	formSection.classList.remove("form-section-move");
});

// signup.addEventListener("click", () => {
// 	slider.classList.remove("moveslider");
// 	formSection.classList.remove("form-section-move");
// });


function myFunction(){
	window.open("./user.html")
}

function myFunction2(){
	window.open("./admin.html")
}
