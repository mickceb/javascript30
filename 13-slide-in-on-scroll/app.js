function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  // Select all images
  const images = document.querySelectorAll('.slide-in')

  // Handle showing
  function handleImg(e) {

    images.forEach(img => {
    
        // Calculate the half of image
        const slideInAt = (window.scrollY + window.innerHeight) - (img.height / 2)
        // Where is the trigger
        const isHalfImg = slideInAt > img.offsetTop
        // Image appears when scroll go over the half of it
        if (isHalfImg) img.classList.add('active')

    })
  }

  window.addEventListener('scroll', debounce(handleImg))