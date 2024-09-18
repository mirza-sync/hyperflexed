const trailer = document.getElementById("trailer");
const trailerIcon = document.getElementById("trailer-icon");

const animateTrailer = (e, interacting) => {
  const x = e.clientX - trailer.offsetWidth / 2;
  const y = e.clientY - trailer.offsetHeight / 2;

  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 5 : 1})`,
  };

  trailer.animate(keyframes, {
    duration: 800,
    fill: "forwards",
  });
};

const getTrailerClass = (type) => {
  switch (type) {
    case "video":
      return "▶";

    default:
      return "👀";
  }
};

window.onmousemove = (e) => {
  const interactable = e.target.closest(".interactable");
  const interacting = interactable !== null;

  animateTrailer(e, interacting);

  trailer.dataset.type = interacting ? interactable.dataset.type : "";

  if (interacting) {
    trailerIcon.innerHTML = getTrailerClass(interactable.dataset.type);
  }
};
