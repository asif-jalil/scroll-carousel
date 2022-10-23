window.addEventListener('DOMContentLoaded', () => {
    function isScrolledIntoView(el) {
        if (!el) {
          return false;
        }
        const rect = el.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        const windowWidth =
          window.innerWidth || document.documentElement.clientWidth;
        const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
        const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;
        return vertInView && horInView;
      }
      let x = 0;
      let y = 0;
      const p1 = document.getElementById("mainBox1");
      const p2 = document.getElementById("box1");
      const p3 = document.getElementById("mainBox2");
      const p4 = document.getElementById("box2");
    
      window.addEventListener("scroll", function (e) {
        if (isScrolledIntoView(p1)) {
          p2.style.transform = `translateX(${x}%)`;
          x -= 0.055;
          if (x <= -50) {
            x = 0;
          }
        }
        if (isScrolledIntoView(p3)) {
          p4.style.transform = `translateX(${y}%)`;
          y -= 0.05;
          if (y <= -50) {
            y = 0;
          }
        }
      });
});