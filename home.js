import { blogPosts, fateData, header, footer } from "./data.js";

const main = document.querySelector(".home-main");
const foot = document.querySelector(".home-footer");

function topHeader() {
  const topHeader = document.querySelector(".top-header").innerHTML = `
    <date>${blogPosts[0].date}</date>
    <h1>${blogPosts[0].title}</h1>
    <p>${blogPosts[0].text}</p>`

  }

function midParagragh() {
  const midParagraph = document.querySelector(".mid-paragraph");

  midParagraph.innerHTML = fateData
    .map((item) => {
      return `<h2>${item.title}</h2>
    <p>${item.content}</p>`;
    })
    .join("");

  midParagraph.innerHTML += ` <div class="recent-posts">
      <h3>Recent posts</h3>
  </div>`;
}

function blog() {
  let blogHtml = "";

  for (let i = 0; i <= 2; i++) {
    blogHtml += `<div class="home-blog home-blog-${i + 1}">
                    <img src="${blogPosts[i].img}" alt="${blogPosts[i].alt}">
                    <date class="date">${blogPosts[i].date}</date>
                    <h2 class="blog-title">${blogPosts[i].title}</h2>
                    <p>${blogPosts[i].text}</p>
                </div>`;
  }
main.innerHTML += blogHtml;
}


function navBar(){document.querySelector(".home-header").innerHTML = header}


function footPage(){
  foot.innerHTML = footer;
}

     // NavBar

 navBar()

    //   TOP HEADER

topHeader()


   //   MID PARAGRAPH

midParagragh()


   //        BLOGS   

blog()

  // footer

footPage()


