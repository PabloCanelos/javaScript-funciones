function pintar(ele, color = 'green') {
    ele.style.backgroundColor = color;
  }
  
  const ele = document.getElementById("ele1");
  ele.addEventListener("click", function() {
    pintar(ele, 'yellow');
  });
//ejercicio pintar.html, he puesto este mensaje para 
//  hacer referencia al archivo al cual está referido este js
//ya que me perdí respecto al orden de las carpetas