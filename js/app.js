// let nav = document.querySelector("nav");
// console.log(nav);
// let active = document.querySelector(".active");
// console.log(active);
// let paragraph = document.querySelector("#first");
// console.log(paragraph);

// let paragraphAndHeader = document.querySelectorAll("h1,p")
// console.log(paragraphAndHeader[1].innerText);

// console.log(nav.children[0].children[0].children[0]);
// console.log(paragraphAndHeader[0].nextElementSibling.nextElementSibling);
// console.log(document.body.children[1].firstElementChild.lastElementChild.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling);
// console.log(nav.firstElementChild.childElementCount);
// console.log(document.body.childElementCount);
// let box1 = document.querySelector("section").firstElementChild;
// let box2 = box1.nextElementSibling;
// let box3 = box2.nextElementSibling;

// box1.classList.add("dark");
// box1.classList.remove("dark");
// box2.classList.add("dissapear");
// box2.classList.remove("dissapear");

// box2.classList.toggle("light");

// console.log(box2.classList.contains("light"));

// let number = document.querySelector("section").lastElementChild.previousElementSibling.dataset.boxNumber;
// console.log(number);

// document.body.innerHTML = "<h1>Texto prueba</h1>"
// console.log(querySelector("section".outerHTML = "<h1>Texto prueba 2</h1>"
// document.body.insertAdjacentHTML("afterbegin", "<nav>Navigation</nav>");

// document
//   .querySelector("nav")
//   .insertAdjacentHTML("beforebegin", "<h1>Main header</h1>");
// document
//   .querySelector("nav")
//   .insertAdjacentHTML("beforeend", ' <a href="https://google.com">Go Google</a>');
// document
//   .querySelector("nav")
//   .insertAdjacentHTML("afterend", "<p>lorem ipsum sit dolor amet</p>");
// console.log(document.querySelector("nav").textContent);
// document.querySelector("h1").textContent = "Stronger together";

let header = document.createElement("h1");
header.append("Hello, World!");
header.prepend("¡");
document.body.append(header);
document.querySelector("h1").firstChild.before("¡¡");
let paragraph = document.createElement("p");
paragraph.textContent = "Writting a paragraph";
// document.body.append(paragraph);
document.querySelector("h1").after(paragraph);
document.querySelector("h1").replaceWith(paragraph);
paragraph.remove();
