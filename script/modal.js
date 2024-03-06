//  логика модалки 

const login = document.getElementById("login")
login.onclick = openModal

function openModal() {
  const overlay = document.getElementById("overlay")
  const modal = document.getElementById("modal")
  const modalBtn = document.getElementById("modalBtn")
  overlay.style.display = "block"
  modal.style.display = "flex"
  modalBtn.onclick = closeModal
}

function closeModal() {
  const overlay = document.getElementById("overlay")
  const modal = document.getElementById("modal")
  overlay.style.display = "none"
  modal.style.display = "none"
}

// -----логика дропдауна mobile------

const dropdownBtn = document.querySelector(".dropdown-icon")
const dropdownContent = document.querySelector(".dropdown-content")
const dropdownCloseBtn = document.querySelector(".dropdown-header-closeBtn")
const dropdownLoginBtn = document.getElementById("dropdown-loginBtn")

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

function loginBtnClick() {
  closeDropdown()
  openModal()
}

dropdownBtn.onclick = openDropdown
dropdownCloseBtn.onclick = closeDropdown
dropdownLoginBtn.onclick = loginBtnClick