const burger = document.querySelector('.burger');
burger.addEventListener('click', () => {
	var links_btn = document.querySelector('.links-btn');
	links_btn.classList.toggle('show-btn');
});