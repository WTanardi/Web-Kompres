$(function () {
    $(document).scroll(function () {
        var $nav = $("header");
        $nav.toggleClass('active', $(this).scrollTop() > $nav.height());
        if($(window).scrollTop() < 1) {
            $("header").removeClass("active");
        }
    });
});

function updateList() {
	const titles = [...document.querySelectorAll('h1, .department')].sort((a, b) => {
		return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
	});

	document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));
	
	document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h1, .department')].indexOf(titles[0])].classList.add("selected-circle");
}

updateList();
window.addEventListener('scroll', () => {
    updateList();
})

const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
const header = document.querySelector("header");
const menuBtn = document.querySelectorAll(".menu-btn");
const homeBtn = document.getElementById("home-btn")

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    if (!header.classList.contains("active")) {
        header.classList.toggle("active")
    };
});

menuBtn.forEach(el => el.addEventListener("click", function(e) {
    menu.classList.toggle("hidden");
}))

homeBtn.addEventListener("click", () => {
    header.classList.remove("active");
})