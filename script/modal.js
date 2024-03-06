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