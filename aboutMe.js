import { profileData, blogPosts, fateData } from "./data.js";

let midParaAbout = document.querySelector(".mid-paragraph-about");

function topHeader() {
  const aboutHeader = document.querySelector(".home-header-about");
  const navHtml = ` 
          <nav>
              <ul>
                  <li class="learning"><a href="index.html">My Learning Journal</a></li>
                  <li class="home"><a href="./home.html">HOME</a></li>
                  <li class="about"><a href="./aboutMe.html">ABOUT ME</a></li>
              </ul>
          </nav>
      `;
  aboutHeader.innerHTML = navHtml;
}

function footAbout() {
  const foot = document.querySelector(".home-footer");
  const footerHtml = `    
          <p>My Learning Journal</p>
          <small>Copyright &#169 2025</small>
      `;
  foot.innerHTML = footerHtml;
}

function aboutMe() {
  let html = `<div class="img-blog"> 
          <img src="${profileData.image}" alt="${profileData.altText}"> 
          <h1>${profileData.title}</h1>
          <p>${profileData.description}</p> 
        </div>`;
  document.querySelector(".top-header-about").innerHTML = html;
}

function midContent() {
  midParaAbout = document.querySelector(".mid-paragraph-about");

  midParaAbout.innerHTML = fateData
    .map((item) => {
      return `<h2 class="mid-title-about">${item.title}</h2>
  <p class="mid-paragraph-about">${item.content}</p>`;
    })
    .join("");
}

function blog() {
  let blogHtml = "";

  for (let i = 1; i <= 3; i++) {
    blogHtml += `<div class="home-blog home-blog-${i + 2}">
                    <img src="${blogPosts[i].img}" alt="${blogPosts[i].alt}">
                    <date class="date">${blogPosts[i].date}</date>
                    <h2 class="blog-title">${blogPosts[i].title}</h2>
                    <p>${blogPosts[i].text}</p>
                </div>`;
  }
  midParaAbout.innerHTML += `<h3 class="recentPosts">Recent Posts</h3>`;
  midParaAbout.innerHTML += `<div class="blog-div">${blogHtml}</div>`;
}

topHeader();

aboutMe();

midContent();

blog();

footAbout();
