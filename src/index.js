import loadHome from "./home";
import loadAbout from "./about";
import loadMenu from "./menu";
import "./styles.css";

const homeBtn = document.querySelector('button:nth-child(1)');
const menuBtn = document.querySelector('button:nth-child(2)');
const aboutBtn = document.querySelector('button:nth-child(3)');

homeBtn.addEventListener('click', loadHome);
menuBtn.addEventListener('click', loadMenu);
aboutBtn.addEventListener('click', loadAbout);

loadHome();

