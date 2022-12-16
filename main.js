const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
    let visibility = primaryNav.getAttribute("data-visible");
    if (visibility === "false") {
        navToggle.setAttribute("aria-expanded", true);
        primaryNav.setAttribute("data-visible", true);
    }
    else {
        navToggle.setAttribute("aria-expanded", false);
        primaryNav.setAttribute("data-visible", false);
    }
})

//  -------------- Drop-down Boxes---------------------



const featuresTag = document.querySelector(".features-tag");
const featuresList = featuresTag.querySelector(".features-list")

featuresTag.addEventListener("click", () => {
    const featuresArrowUp = document.querySelector(".features-arrow-up");
    const featuresArrowDown = document.querySelector(".features-arrow-down");
    let visibility = featuresList.getAttribute("data-visible");
    if (visibility === "false") {
        featuresTag.setAttribute("aria-expanded", true);
        featuresList.setAttribute("data-visible", true);
        featuresArrowDown.style.display = "none"
        featuresArrowUp.style.display = "block"
    }
    else {
        featuresTag.setAttribute("aria-expanded", false);
        featuresList.setAttribute("data-visible", false);
        featuresArrowDown.style.display = "block";
        featuresArrowUp.style.display = "none"
    }
})

const companyList = document.querySelector(".company-list")
const companyTag = document.querySelector(".company-tag")

companyTag.addEventListener("click", () => {
    const companyArrowUp = document.querySelector(".company-arrow-up");
    const companyArrowDown = document.querySelector(".company-arrow-down");
    let visibility = companyList.getAttribute("data-visible");
    if (visibility === "false") {
        companyTag.setAttribute("aria-expande", true);
        companyList.setAttribute("data-visible", true);
        companyArrowDown.style.display = "none";
        companyArrowUp.style.display = "block";
    }
    else {
        companyTag.setAttribute("aria-expanded", false);
        companyList.setAttribute("data-visible", false);
        companyArrowDown.style.display = "block";
        companyArrowUp.style.display = "none";
    }
})