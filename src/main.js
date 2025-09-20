import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

const navBtn = document.querySelector("#menu");
const menuBar = document.querySelector("[role='menubar']");

navBtn.addEventListener("click", () => {
    const isExpanded = JSON.parse(navBtn.getAttribute('aria-expanded'));
    navBtn.setAttribute('aria-expanded', !isExpanded);
    menuBar.classList.toggle("hidden");
    menuBar.classList.toggle("flex");
})