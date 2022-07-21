const mobileNav = document.getElementById('main-nav-mb')
const faders = document.querySelectorAll(".fader")
const uppers = document.querySelectorAll(".upper")
const lefters = document.querySelectorAll(".lefter")
const righters = document.querySelectorAll(".righter")

// mb-nav
function showMobileNav() {
	mobileNav.style.top = "0";
}

function hideMobileNav() {
	mobileNav.style.top = "-1000px";
}
// appearOnScroll
const appearOnScroll = new IntersectionObserver(function(entries, appearOnscroll) {
	entries.forEach(entry => {
		if (!entry.isIntersecting) {
			return
		} else {
			entry.target.classList.add("show");
			appearOnScroll.unobserve(entry.target)
		}
	})
}, {
	rootMargin: "0px 0px -70px 0px"
})



// application
faders.forEach(fader => {
	appearOnScroll.observe(fader)
})
uppers.forEach(upper => {
	appearOnScroll.observe(upper)
})
lefters.forEach(lefter => {
	appearOnScroll.observe(lefter)
})
righters.forEach(righter => {
	appearOnScroll.observe(righter)
})
