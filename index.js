import { blogPosts } from "./data.js";

function homePage() {
  let html = "";

  blogPosts.forEach((data, index) => {
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
  }); // <-- closes forEach properly

  document.querySelector(".index-main").innerHTML = html;
}

homePage();
