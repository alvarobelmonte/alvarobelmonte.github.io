$(document).ready(function() {
  var c = document.getElementById("content");

  function clearPanel() {
    // You can put some code in here to do fancy DOM transitions, such as fade-out or slide-in.
    //c.style.transition = "all 3s";
  }

  function transitionFade(path){
    $(".content").fadeOut("slow", function() {
      c.src = path;
    });
    $(".content").fadeIn("slow");
  }

  Path.map("#/home")
    .to(function() {
      transitionFade("home.html");
      $('.content').addClass="home";
    })
    .enter(clearPanel);

  Path.map("#/projects")
    .to(function() {
      transitionFade("projects.html");
    })
    .enter(clearPanel);

  Path.map("#/about")
    .to(function() {
      transitionFade("about.html");
    })
    .enter(clearPanel);

  Path.map("#/contact")
    .to(function() {
      transitionFade("contact.html");
    })
    .enter(clearPanel);

  Path.root("#/home");

  Path.listen();
});
