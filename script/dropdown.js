// -----mobile------

const dropdownBtn = document.querySelector(".dropdown-icon")
const dropdownContent = document.querySelector(".dropdown-content")
const dropdownCloseBtn = document.querySelector(".dropdown-header-closeBtn")

function openDropdown() {
  const overlay = document.getElementById("overlay")
  dropdownContent.style.display = 'block'
  overlay.style.display = "block"
}
function closeDropdown() {
  const overlay = document.getElementById("overlay")
  dropdownContent.style.display = 'none'
  overlay.style.display = "none"
}

dropdownBtn.onclick = openDropdown
dropdownCloseBtn.onclick = closeDropdown