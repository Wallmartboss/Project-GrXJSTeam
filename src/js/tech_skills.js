const body_my = document.body;
//   console.log(body_my.classList);
// if (body_my.classList.contains('dark-mode')) {
    const marquee = document.querySelector(".marquee");
    const marquee_tilt = document.querySelector(".marquee_tilt");
    marquee.classList.add("dark-mode");
    marquee_tilt.classList.add("dark-mode");
    const bw_dot = document.querySelectorAll(".bw_dot");
    bw_dot.forEach((dot) => dot.classList.add("filter-white"));
// }