// Header: navbar Burgers 2019.04.08
document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }

  });

  // =================================================
// search 2019.05.30
// function: open and close search form
// =================================================
if (typeof show_search == 'undefined') {
    var show_search = false;
  }
  if (!show_search) {
    $("#search-btn").show();
  }
  // click search button event
  $("#search-btn").click(function(event) {
      // $("#search-input").val("");
      $("#search-form").fadeIn();
      $("#search-btn").hide();
      $('#search-input').focus();
      $("#search-results").show();
      event.stopPropagation();
  });
  // click close button event
  $("#close-btn").click(function(event) {
    $("#search-form").hide();
    $("#search-results").hide(); 
    $("#search-btn").fadeIn(); 
    // $("#search-input").val(""); //clear search field text  
    event.stopPropagation();
  });
  // click outside of search form event
  $(document).mouseup(function(e) 
  {
      var container = $("#search-form");
      
      // if the target of the click isn't the container nor a descendant of the container
      if (show_search && !container.is(e.target) && container.has(e.target).length === 0) 
      {
          container.hide();
          $("#search-results").hide(); 
          $("#search-btn").fadeIn();
      }
  });
  // scroll event
  $(window).scroll(function(){
    $("#search-form").hide(); 
    $("#search-results").hide(); 
    $("#search-btn").show();
  });