(function() {

  var win = window;
  var intro = document.getElementById('intro');


  // Get innerHeight
  function getHeight(element){
    return element.innerHeight;
  }


  function fullHeight(element, offset) {
    var winheight = getHeight(win);

    // Set Full height as default
    var height = winheight;

    if (offset !== null){
      height =  winheight - offset;
    }

    return element.style.height = height + 'px';
  }


  // Set element full Height with resize event
  function setElementToFullHeight(element, offset, resize){
    fullHeight(element, offset);

    if (resize){
      win.addEventListener('resize', function() {
        fullHeight(element, offset);
      }, true);
    }
  }

  setElementToFullHeight(intro, null, true);

})();
