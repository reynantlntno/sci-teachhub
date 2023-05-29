
    // JavaScript to show the mobile popup if necessary
    window.addEventListener('load', function() {
      var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      if (isMobile) {
        var popup = document.getElementById('mobile-popup');
        popup.style.display = 'block';
      }
    });
    
    // JavaScript for fading in the text in the interactive section
    window.addEventListener('scroll', function() {
      var interactiveSection = document.querySelector('.interactive-section');
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
      var sectionTop = interactiveSection.offsetTop;
      var sectionHeight = interactiveSection.offsetHeight;
      var fadeStart = sectionTop + (sectionHeight / 50);
      var fadeEnd = sectionTop + ((sectionHeight / 50) * 2);
      
      if (scrollTop > fadeStart && scrollTop < fadeEnd) {
        var overlayText = document.querySelector('.interactive-section .overlay-text');
        var opacity = (scrollTop - fadeStart) / (fadeEnd - fadeStart);
        
        overlayText.style.opacity = opacity;
      }
    });

    // JavaScript to handle header scaling
    window.addEventListener('scroll', function() {
      var header = document.querySelector('.header');
      var logo = document.querySelector('.header .logo img');
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      var scaleRatio = 0.8;
      
      if (scrollTop > 0) {
        header.style.height = (80 * scaleRatio) + 'px';
        logo.style.height = (50 * scaleRatio) + 'px';
      } else {
        header.style.height = '80px';
        logo.style.height = '50px';
      }
    });
    window.addEventListener('DOMContentLoaded', function() {
  var username = localStorage.getItem('username');
  if (!username) {
    username = prompt('Please enter your username:');
    localStorage.setItem('username', username);
  }
  showGreeting(username);
});

function showGreeting(username) {
  var greeting = 'Hello ' + username + '!';
  var usernameElement = document.getElementById('username');
  usernameElement.textContent = greeting;
}

    const sidebarIcon = document.querySelector('.sidebar-icon');
const sidebar = document.querySelector('.sidebar');

sidebarIcon.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});


function goToHomePage() {
  window.location.href = 'homepage.html';
}

function hideMobilePopup() {
  var popup = document.getElementById('mobile-popup');
  popup.style.display = 'none';
}
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('open');
}

    // JavaScript to fade in the overlay image
window.addEventListener('load', function() {
  var overlayImage = document.querySelector('.header-intro .overlay-image');
  overlayImage.style.opacity = '1';
});

    // JavaScript to fade in the --
window.addEventListener('initialize', function() {
  var selectionsItem = document.querySelector('.selections-item');
  selectionsItem.style.opacity = '1';
});
// Function to handle selection click
function handleSelectionClick(selection) {
  // Fade out the current icon
  const currentIcon = selection.querySelector('.selection-icon');
  currentIcon.classList.add('fade-out');

  // Get the original icon filename
  const originalIcon = selection.dataset.originalIcon;

  // Change the icon after fading out
  setTimeout(() => {
    currentIcon.src = 'https://i.imgur.com/mWLziRG.png';
    currentIcon.classList.remove('fade-out');
  }, 700);

  // Spin the new icon for a quarter second
  setTimeout(() => {
    currentIcon.classList.add('spin-animation');
  }, 700);

  // Redirect to the specified link after spinning
  const link = selection.dataset.link;
  setTimeout(() => {
    window.open(link, '_blank');
    setTimeout(() => {
      currentIcon.src = originalIcon;
      currentIcon.classList.remove('spin-animation');
    }, 3000);
  }, 1050);
}
function handleImageClick(url) {
      window.open(url, '_blank');
}
    // Attach click event listener to each image in the scroll container
    const images = document.querySelectorAll('.scroll-container img');
images.forEach(image => {
  image.addEventListener('click', () => {
    handleImageClick(image.parentNode.href);
  });
});
// JavaScript for animating the header text
function animateHeaderText() {
  const headerText = document.querySelector('.selections-header');
  const cursor = document.getElementById('cursor');

  let text = headerText.innerText;
  let index = 0;

  function type() {
    headerText.innerText = text.slice(0, index);
    cursor.style.display = 'inline';

    if (index < text.length) {
      index++;
      setTimeout(type, 50); // Adjust typing speed (in milliseconds)
    } else {
      cursor.style.display = 'none';
    }
  }

  type();
}

animateHeaderText();