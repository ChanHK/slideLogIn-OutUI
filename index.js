const inbtn = document.getElementById("inbtn");
const upbtn = document.getElementById("upbtn");
const container = document.querySelector(".container");

inbtn.addEventListener("click", () => {
	container.classList.remove("displayPanel");
});

upbtn.addEventListener("click", () => {
	container.classList.add("displayPanel");
});
