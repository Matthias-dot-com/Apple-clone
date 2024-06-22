const headerLinks = document.querySelectorAll(".header-list a");

headerLinks.forEach((link) => {
  link.addEventListener("mouseout", () => {
    link.style.opacity = "0.7";
  });
});
headerLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.style.opacity = "1";
  });
});

const headImg = document.querySelectorAll("li img");
headImg.forEach((link) => {
  link.addEventListener("mouseout", () => {
    link.style.opacity = "0.7";
  });
});
headImg.forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.style.opacity = "1";
  });
});

const links = document.querySelectorAll(".links a");

links.forEach((link) =>
  link.addEventListener("mouseover", () => {
    link.style.color = "black";
    link.style.transition = "0.5s";
  })
);

links.forEach((link) =>
  link.addEventListener("mouseout", () => {
    link.style.color = "#0066cc";
  })
);


const tlLinks = document.querySelectorAll(".Tl a");


tlLinks.forEach((link) => {
    link.addEventListener("mouseover", () => {
        link.style.color = "black";
      link.style.textDecoration = "underline";
      link.style.transition = "0.5s";
    });
  
    link.addEventListener("mouseout", () => {
      link.style.textDecoration = "none";
      link.style.transition = "0.5s";
    });
  });

  
const footLinks = document.querySelectorAll(".foot-content a");
footLinks.forEach((link) => {
    link.addEventListener("mouseover", () => {
        link.style.color = "black";
      link.style.textDecoration = "underline";
      link.style.transition = "0.5s";
    });
  
    link.addEventListener("mouseout", () => {
      link.style.textDecoration = "none";
      link.style.transition = "0.5s";
    });
  });
