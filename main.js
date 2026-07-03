   // Header navbar
document.addEventListener("DOMContentLoaded", function () {
  const headerHeight = document.querySelector(".header").offsetHeight;
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navbar a");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }, {
    rootMargin: `-${headerHeight}px 0px 0px 0px`,
    threshold: 0.6,
  });

  sections.forEach((section) => observer.observe(section));
});


    // Profassion Names
var typed= new Typed(".text",{
strings:["Frontend Developer.", "Fullstack Developer.", "Web Designer."],
typeSpeed:100,
backSpeed:100,
backDelay:1000,
loop:true
});



    // More About Me Button
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("aboutModal");
  const btn = document.getElementById("moreBtn");
  const close = document.querySelector(".modal .close");

  btn.addEventListener("click", function (e) {
    e.preventDefault();
    modal.style.display = "flex";
  });

  close.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});


    // Protfolio pop up
document.addEventListener("click", function (e) {
    const isCard = e.target.closest(".work_card");
    const isCloseBtn = e.target.closest(".portfolio_popup-close");
    const popup = document.querySelector(".portfolio_popup");

    // Open popup on card click
    if (isCard) {
        showPortfolioPopup(isCard);
    }

    // Close on close button click
    if (isCloseBtn) {
        togglePortfolioPopup(false);
    }

    // Close popup when clicking outside the popup content
    if (popup.classList.contains("open") && !e.target.closest(".portfolio_popup-inner") && !isCard) {
        togglePortfolioPopup(false);
    }
});

function togglePortfolioPopup(open) {
    const popup = document.querySelector(".portfolio_popup");
    if (open) {
        popup.classList.add("open");
    } else {
        popup.classList.remove("open");
    }
}

function showPortfolioPopup(portfolioItem) {
    const popup = document.querySelector(".portfolio_popup");
    const imgSrc = portfolioItem.querySelector(".work_img").src;
    const title = portfolioItem.querySelector(".work_title").innerText;
    const details = portfolioItem.querySelector(".portfolio_item-details").innerHTML;

    popup.querySelector(".pp_thumbnail img").src = imgSrc;
    popup.querySelector(".portfolio_popup-subtitle span").innerText = title;
    popup.querySelector(".portfolio_popup-body").innerHTML = details;

    togglePortfolioPopup(true);
}


    // Contact me from
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const thankYou = document.getElementById("thank-you-message");

  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const formData = new FormData(form);

      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        form.reset();
        thankYou.classList.remove("hidden");
        thankYou.textContent = "Thank you! Your message has been sent.";

        // Optional: Hide after 5s (safety fallback)
        setTimeout(() => {
          thankYou.classList.add("hidden");
        }, 6000);
      } else {
        thankYou.classList.remove("hidden");
        thankYou.textContent = " Sorry! Something went wrong.";
        thankYou.style.backgroundColor = "#ffe0e0";
        thankYou.style.color = "red";
      }
    });
  }
});


    // Auto footer year set
 document.getElementById("year").textContent = new Date().getFullYear();









 