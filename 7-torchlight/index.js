const chars = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";

const randomChar = () => {
  return chars[Math.floor(Math.random() * chars.length)];
};
const randomString = (length) =>
  Array.from(Array(length)).map(randomChar).join("");

const box = document.getElementById("letterbox");

window.onmousemove = (e) => {
  box.innerText = randomString(1500);
};
