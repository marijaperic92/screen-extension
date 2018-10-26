document.addEventListener('DOMContentLoaded', function() {
  var width = document.getElementById('width');
  var height = document.getElementById('height');
  var dpi = document.getElementById('dpi');
  var dppx = document.getElementById('dppx');
  var sensitivity = document.getElementById('sensitivity');

  width.innerText =  window.screen.width + " | " +window.screen.availWidth
  height.innerText = window.screen.height + " | " + window.screen.availHeight

  var one = {dpi: 96, dpcm: 96 / 2.54}

  function getDppx() {
    // devicePixelRatio: Webkit (Chrome/Android/Safari), Opera (Presto 2.8+), FF 18+
    return typeof window == 'undefined' ? 0 : +window.devicePixelRatio || ie() || 0
  }

  function getDpi() {
    return getDppx() * one.dpi
  }

  dpi.innerText = getDpi()
  dppx.innerText =getDppx()


});