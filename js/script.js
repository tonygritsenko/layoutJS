// Burger
const burger = document?.querySelector("[data-burger]");
const header__nav = document?.querySelector("[data-nav]");
const header__navItems = header__nav?.querySelectorAll("a");
const body = document.body;
const header = document?.querySelector(".header");
const headerHeight = header.offsetHeight;

document
  .querySelector(":root")
  .style.setProperty("--header-height", `${headerHeight}px`);

burger?.addEventListener("click", () => {
  body.classList.toggle("stop-scroll");
  burger?.classList.toggle("burger--active");
  header__nav.style.transition = "transform 0.6s ease-in-out";
  header__nav?.classList.toggle("header__nav--visible");
});

header__navItems.forEach((el) => {
  el.addEventListener("click", () => {
    body.classList.remove("stop-scroll");
    burger?.classList.remove("burger--active");
    header__nav?.classList.remove("header__nav--visible");
  });
});

// Search
const searchOpen = document.querySelector('.search__btn');
const search = document.querySelector('.search__form');
const searchClose = document.querySelector('.search__close');

searchOpen.addEventListener('click', function () {
  search.classList.add('search__show')
})

searchClose.addEventListener('click', function () {
  search.classList.remove('search__show')
})

// Slider
const slider = document.querySelector(".swiper-container");

let swiper = new Swiper(slider, {
  slidesPerView: 1,
  loopedSlides: 3,
  speed: 3000,
  autoplay: {
    delay: 3000,
  },
  slideToClickedSlide: true,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
   a11y: {
    paginationBulletMessage: "Перейти к слайду {{index}}",
  },
});

// Tabs
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelector(".tabs");
  const tabsBtn = document.querySelectorAll(".tabs__btn");
  const tabsContent = document.querySelectorAll(".tabs__content");

  if (tabs) {
    tabs.addEventListener("click", (e) => {
      if (e.target.classList.contains("tabs__btn")) {
        const tabsPath = e.target.dataset.tabsPath;
        tabsBtn.forEach((el) => {
          el.classList.remove("tabs__btn--active");
        });
        document
          .querySelector(`[data-tabs-path="${tabsPath}"]`)
          .classList.add("tabs__btn--active");
        tabsHandler(tabsPath);
      }
    });
  }

  const tabsHandler = (path) => {
    tabsContent.forEach((el) => {
      el.classList.remove("tabs__content--active");
    });
    document
      .querySelector(`[data-tabs-target="${path}"]`)
      .classList.add("tabs__content--active");
  };
});

// Accordion
document.addEventListener('DOMContentLoaded', () => {
	const accordions = document.querySelectorAll('.accordion');

	accordions.forEach(el => {
		el.addEventListener('click', (e) => {
			const self = e.currentTarget;
			const control = self.querySelector('.accordion__control');
			const content = self.querySelector('.accordion__content');

			self.classList.toggle('open');

			if (self.classList.contains('open')) {
				control.setAttribute('aria-expanded', true);
				content.setAttribute('aria-hidden', false);
				content.style.maxHeight = content.scrollHeight + 'px';
			} else {
				control.setAttribute('aria-expanded', false);
				content.setAttribute('aria-hidden', true);
				content.style.maxHeight = null;
			}
		});
	});
});
