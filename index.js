import { blogPosts } from "./data.js";

function homePage(){
    let html = "";

    blogPosts.forEach((data, index) => {
    html += `

        <div class="img-blog blog-${index + 1}">
            <img src="${data.img}" alt="${data.alt}">
            <date class="date">${data.date}</date>
            <h1>${data.title}</h1>
            <p>${data.text}</p>

        </div>
    `;
    });

    document.querySelector("main").innerHTML = html;
}

homePage()