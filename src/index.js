// Importing JS
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// Importing views
import Main from './view/main';
import Nav from './view/nav';
// Importing CSS
import './styles/style.css';

// On load: Begin initialization
$(() => {
  // Pop up the titlebox
  $('.titlebox').css('opacity', '1');
  $('.titlebox').css('margin-bottom', '0');

  // Smooth scrolling links
  $('a[href*=\\#]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $(this.hash).offset().top - 50 }, 800);
  });

  // Nav :after line
  $(document).on('scroll', function () {
    var scrollAmount = $(this).scrollTop() + 51;
    $('#nav-main').removeClass('active');
    $('#nav-about').removeClass('active');
    $('#nav-projects').removeClass('active');
    if (scrollAmount >= $('#projects').position().top) {
      $('#nav-projects').addClass('active');
    } else if (scrollAmount >= $('#about').position().top) {
      $('#nav-about').addClass('active');
    } else {
      $('#nav-main').addClass('active');
    }
  })

  // Titlecard carousel
  var scr = 0
  $('#scroller').scrollLeft(0);
  $("#scroller span").clone().appendTo("#scroller");
  setInterval(function () {
    $('#scroller').scrollLeft(scr++);
    if (scr >= $("#scroller span").width()) { scr = 0; }
  }, 16);
});

// Create the page
function App() {
  return (
    <React.Fragment>
      <Nav />
      <Main />
    </React.Fragment>
  )
}

// Render the body
ReactDOM.render(<App />, document.getElementById('root'));
