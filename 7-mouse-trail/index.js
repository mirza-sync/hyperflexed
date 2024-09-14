const trailer = document.getElementById("trailer");
window.onmousemove = (e) => {
  const x = e.clientX - trailer.offsetWidth / 2;
  const y = e.clientY - trailer.offsetHeight / 2;

  console.log(x, y);
  trailer.style.transform = `translate(${x}px, ${y}px)`;
};
