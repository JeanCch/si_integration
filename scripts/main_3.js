const white_div = document.querySelector('.white_color_box')
const grey_div = document.querySelector('.grey_color_box')

white_div.addEventListener(
  'click',
  function() {
    let link = document.getElementById('picture_modifier');
    let href = link.getAttribute('src');
    link.setAttribute('src', '../images/homepod_white.png');
  }
)

white_div.addEventListener(
  'click',
  function() {
    this.style.border = '2px solid #0070C9';
    grey_div.style.border = '2px solid #999';
  }
)

grey_div.addEventListener(
  'click',
  function() {
    let link = document.getElementById('picture_modifier');
    let href = link.getAttribute('src');
    link.setAttribute('src', '../images/homepod_grey.png');
  }
)

grey_div.addEventListener(
  'click',
  function() {
    this.style.border = '2px solid #0070C9';
    white_div.style.border = '2px solid #999';
  }
)
