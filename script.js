gsap.to(".circle", {
  rotate: 0,
  duration: 2,
});

let active = 4;
let miniCircle = document.querySelectorAll(".miniCircle");
let sec = document.querySelectorAll(".sec");
let smallCircle = document.querySelectorAll(".smallCircle");

gsap.to(miniCircle[active - 1], {
  opacity: 0.5,
});
gsap.to(sec[active - 1], {
  opacity: 1,
});
gsap.to(smallCircle[active - 1], {
  opacity: 1,
});

miniCircle.forEach((eachCircle, index) => {
  eachCircle.addEventListener("click", () => {
    gsap.to(".circle", {
      rotate: (active - (index + 1)) * 10,
    });
    greyAllCircle();
    gsap.to(eachCircle, {
      opacity: 0.5,
    });
    gsap.to(sec[index], {
      opacity: 1,
    });
    gsap.to(smallCircle[index], {
      opacity: 1,
    });
  });
});

const greyAllCircle = () => {
  gsap.to(miniCircle, {
    opacity: 0.1,
  });
  gsap.to(sec, {
    opacity: 0.1,
  });
  gsap.to(smallCircle, {
    opacity: 0.1,
  });
};
