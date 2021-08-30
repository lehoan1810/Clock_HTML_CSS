const main = document.querySelector(".main");
const button = document.querySelector("#button");
const second = document.querySelector("#sec");
const minute = document.querySelector("#mi");
const hour = document.querySelector("#ho");

let toggle_value = 0;
dark_mode = () => {
	if (toggle_value === 0) {
		toggle_value = 1;
		button.innerHTML = `<i class="fa fa-sun-o"></i>`;
	} else {
		toggle_value = 0;
		button.innerHTML = `<i class="fa fa-moon-o"></i>`;
	}
	main.classList.toggle("dark");
};
button.addEventListener("click", dark_mode);

run = () => {
	let currentTime = new Date();
	let sec = currentTime.getSeconds();
	let mi = currentTime.getMinutes();
	let ho = currentTime.getHours();

	let secTime = -90 + sec * 6;
	let minuteTime = -90 + mi * 6;
	let hourTime = -90 + ho * (360 / 12);

	second.style.transform = `rotate(${secTime}deg)`;
	minute.style.transform = `rotate(${minuteTime}deg)`;
	hour.style.transform = `rotate(${hourTime}deg)`;
};

setInterval(() => {
	run();
}, 1000);
