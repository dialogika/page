// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize the first Swiper
  var swiperMain = new Swiper(".swiper-container-custom", {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: false, // Disable autoplay
  });

  // Event listener to handle "mengapa-show-content" click
  // document
  //   .getElementById("show-solution")
  //   .addEventListener("click", function () {
  //     const contentDiv = document.querySelector(".content-why-us");
  //     contentDiv.classList.add("d-none");

  //     const iconBoxes = document.querySelector(".icon-boxes");
  //     iconBoxes.classList.remove("d-none");
  //     iconBoxes.classList.add("d-flex");

  //     var swiperMengapa = new Swiper(".swiper-test", {
  //       direction: "horizontal", 
  //       loop: true, 
  //       slidesPerView: 1, 
  //       spaceBetween: 30, 
  //       pagination: {
  //         el: ".alasan-public-speaking-swiper-pagination",
  //         clickable: true, 
  //       },
  //       autoplay: false,
  //     });
  //   });
});
