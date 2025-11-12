import { blogPosts } from "./data.js";

function homePage() {
  let html = "";

  blogPosts.slice(0, 7).forEach((data, index) => {
    if (index === 0) {
      html += `
        <div class="img-blog blog-${index + 1}">
            <img src="" alt="">
            <date class="date">${data.date}</date>
            <h1>${data.title}</h1>
            <p>${data.text}</p>
        </div>
      `;
    } else {
      html += `
        <div class="img-blog blog-${index + 1}">
            <img src="${data.img}" alt="${data.alt}">
            <date class="date">${data.date}</date>
            <h2>${data.title}</h2>
            <p>${data.text}</p>
        </div>
      `;
    }
  });

  document.querySelector(".index-main").innerHTML = html;

  // Hide view-less button whenever homePage runs
  const viewLessBtn = document.querySelector(".view-less");
  if (viewLessBtn) viewLessBtn.style.display = "none";

  // Show view-more button
  const viewMoreBtn = document.querySelector(".view-more");
  if (viewMoreBtn) viewMoreBtn.style.display = "flex";
}

function loadMorePosts() {
  let html = "";

  blogPosts.slice(7).forEach((data, index) => {
    html += `
      <div class="new-blog img-blog blog${index + 8}">
          <img src="${data.img}" alt="${data.alt}">
          <date class="date">${data.date}</date>
          <h2>${data.title}</h2>
          <p>${data.text}</p>
      </div>
    `;
  });

  document.querySelector(".new-blog-container").innerHTML += html;

  // Show/hide buttons
  const viewLessBtn = document.querySelector(".view-less");
  if (viewLessBtn) viewLessBtn.style.display = "flex";

  const viewMoreBtn = document.querySelector(".view-more");
  if (viewMoreBtn) viewMoreBtn.style.display = "none";
}

// Attach event listeners **after the DOM elements exist**
document.addEventListener("DOMContentLoaded", () => {
  homePage(); // render first 7 posts

  const viewMoreBtn = document.querySelector(".view-more");
  const viewLessBtn = document.querySelector(".view-less");

  if (viewMoreBtn) {
    viewMoreBtn.addEventListener("click", (e) => {
      e.preventDefault();
      loadMorePosts();
    });
  }

  if (viewLessBtn) {
    viewLessBtn.addEventListener("click", (e) => {
      e.preventDefault();
      // Clear new posts
      document.querySelector(".new-blog-container").innerHTML = "";
      homePage(); // go back to first 7 posts
    });
  }
});
