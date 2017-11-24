$(document).ready(function() {
  var c = document.getElementById("content");

  function clearPanel() {
    // You can put some code in here to do fancy DOM transitions, such as fade-out or slide-in.
    //c.style.transition = "all 3s";
  }

  Path.map("#/home")
    .to(function() {
      $(".content").fadeOut("slow", function() {
        c.src = "home.html";
      });
      $(".content").fadeIn("slow");
    })
    .enter(clearPanel);

  Path.map("#/projects")
    .to(function() {
      $(".content").fadeOut("slow", function() {
        c.src = "projects.html";
      });
      $(".content").fadeIn("slow");
    })
    .enter(clearPanel);

  Path.map("#/about")
    .to(function() {
      $(".content").fadeOut("slow", function() {
        c.src = "about.html";
      });
      $(".content").fadeIn("slow");
    })
    .enter(clearPanel);

  Path.map("#/contact")
    .to(function() {
      $(".content").fadeOut("slow", function() {
        c.src = "contact.html";
      });
      $(".content").fadeIn("slow");
    })
    .enter(clearPanel);

  Path.root("#/home");

  Path.listen();
});
