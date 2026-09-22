import Reveal from "reveal.js";
import "reveal.js/reveal.css";
import gsap from "gsap";
import Chart from "chart.js/auto";

const ctx = document.getElementById("myChart") as HTMLCanvasElement;

new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Giáo Viên", "Bác Sĩ", "Kỹ Sư", "Công Nhân", "Tuyển Thủ"],
    datasets: [
      {
        data: [45, 25, 18, 10, 2],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom', // Đặt chú thích (legend) xuống dưới biểu đồ cho gọn
        labels: {
          color: '#2B2D42', // Màu chữ chú thích khớp với thiết kế trước đó
          font: {
            size: 17,
            family: "Quicksand, sans-serif" // Font chữ cho chú thích
          }
        }
      },
      tooltip: {
        enabled: true // Hiển thị thông tin chi tiết khi rê chuột vào từng phần quạt
      }
    },
  }
}
);

const deck = new Reveal({
  controls: false,
  progress: false,
  slideNumber: false,
  history: false,
  navigationMode: 'linear',
  hash: true,
  center: true,
  transition: 'slide',
  transitionSpeed: 'slow',
  backgroundTransition: 'fade',
});

deck.initialize();

let currentSlide = 1;

deck.on('slidechanged', () => {
  currentSlide = deck.getIndices().h + 1;
});

document.addEventListener('keydown', (event) => {
  if ((event.key === "A" || event.key === "a") && currentSlide === 1) {
    slide1();
  }

  else if ((event.key === "A" || event.key === "a") && currentSlide === 2) {
    slide2();
  }
  
  else if ((event.key === "A" || event.key === "a") && currentSlide === 3) {
    slide3();
  }

});
  
const slide1 = () => {
  const tl = gsap.timeline();
  const char = document.querySelectorAll(".char");
  const char2 = document.querySelectorAll(".char2");
  tl.to(char, { duration: 1, opacity: 1, y: 0, ease: "power1.out", stagger: 0.05 })
    .to("#slogan", { duration: 2, opacity: 1, ease: "power1.out" }, "-=1")
    .to("#author", { duration: 1, opacity: 1, ease: "power1.out" }, "-=1")
    .to(char2, { duration: 1, opacity: 1, y: 0, ease: "power1.out", stagger: 0.05 }, "-=1");
}

gsap.set(['#explain', '#why', '#status'], { opacity: 0, filter: "blur(5px)" });
gsap.set('.chart-div', { opacity: 0, filter: "blur(8px)" });
gsap.set(['#lister', '#teacher', '#doctor', '#engineer', '#worker', '#gamer', '.sources-page'], { opacity: 0, filter: "blur(5px)" });

const slide2 = () => {
  const tl = gsap.timeline();
    tl.to("#explain", { duration: 2, opacity: 1, ease: "sine.out", filter: "blur(0px)" })
      .to("#why", { duration: 2, opacity: 1, ease: "sine.out", filter: "blur(0px)" }, "-=1.5")
      .to("#status", { duration: 2, opacity: 1, ease: "sine.out", filter: "blur(0px)" }, "-=1");
  
};

const slide3 = () => {
  const tl = gsap.timeline();
  tl.to("#lister", { duration: 1.5, opacity: 1, ease: "power2.out", filter: "blur(0px)" })
  .to("#teacher", { duration: 1.5, opacity: 1, ease: "power2.out", filter: "blur(0px)" }, "-=1.2")
  .to("#doctor", { duration: 1.5, opacity: 1, ease: "power2.out", filter: "blur(0px)" }, "-=1.2")
  .to("#engineer", { duration: 1.5, opacity: 1, ease: "power2.out", filter: "blur(0px)" }, "-=1.2")
  .to("#worker", { duration: 1.5, opacity: 1, ease: "power2.out", filter: "blur(0px)" }, "-=1.2")
  .to("#gamer", { duration: 1.5, opacity: 1, ease: "power2.out", filter: "blur(0px)" }, "-=1.2")
  .to(".chart-div", { duration: 2, opacity: 1, ease: "power2.out", filter: "blur(0px)" }, "-=1.2")
  .to(".sources-page", { duration: 2, opacity: 1, ease: "power2.out", filter: "blur(0px)" }, "-=1.2")
  ;
};