$(document).ready(function () {
  $(".navbar_toggler .open").on("click", function () {
    $("#sidebar").addClass("active");
    document.querySelector(".navbar_brand").style.display = "none";
    document.querySelector(".navbar_toggler .open").style.display = "none";
    document.querySelector(".navbar_toggler .close").style.display = "block";
    // $(this).toggleClass("active");
    document.querySelector("#header").style.position = "unset";
  });
});

$(document).ready(function () {
  $(".navbar_toggler .close").on("click", function () {
    $("#sidebar").removeClass("active");
    document.querySelector(".navbar_brand").style.display = "block";
    document.querySelector(".navbar_toggler .open").style.display = "block";
    document.querySelector(".navbar_toggler .close").style.display = "none";
    // $(this).toggleClass("active");
  });
});

$(window).resize(function () {
  if ($(window).width() >= 1185) {
    $("#sidebar").removeClass("active");
    document.querySelector(".navbar_brand").style.display = "block";
    document.querySelector(".navbar_toggler .open").style.display = "block";
    document.querySelector(".navbar_toggler .close").style.display = "none";
  }
  //   if ($(window).width() <= 1200) {
  //     document.querySelector(".navbar_toggler").style.display = "block";
  //     document.querySelector(".navbar_brand img").style.width = "48px";
  //     document.querySelector(".navbar_link").style.display = "none";
  //   } else {
  //     document.querySelector(".navbar_toggler").style.display = "none";
  //     document.querySelector(".navbar_brand img").style.width = "80px";
  //     document.querySelector(".navbar_link").style.display = "flex";
  //   }
});

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 350 ||
    document.documentElement.scrollTop > 350
  ) {
    if ($(window).width() >= 1200) {
      document.getElementById("header").style.position = "fixed";
      document.querySelector(".nav-logo").style.display = "none";
      document.querySelector("#header .container_").style.justifyContent =
        "flex-end";
      document.querySelector("#header").style.background = "#fff";
      document.querySelector(".navbar_link .active").style.lineHeight = "48px";
    } else {
      document.querySelector(".nav-logo").style.display = "flex";
      document.querySelector("#header .container_").style.justifyContent =
        "flex-start";
      document.querySelector("#header").style.position = "fixed";
    }
  } else {
    document.getElementById("header").style.position = "absolute";
    document.querySelector(".nav-logo").style.display = "flex";
    document.querySelector("#header .container_").style.justifyContent =
      "space-between";
    document.querySelector("#header").style.background = "transparent";
    document.querySelector(".navbar_link .active").style.lineHeight = "80px";
  }
}

function preventScroll(e) {
  e.preventDefault();
  e.stopPropagation();

  return false;
}

function disable() {
  document.querySelector("#content").addEventListener("wheel", preventScroll);
}

function enable() {
  document
    .querySelector("#content")
    .removeEventListener("wheel", preventScroll);
}

document.querySelector("#content .open").addEventListener("click", disable);
document.querySelector("#content .close").addEventListener("click", enable);
