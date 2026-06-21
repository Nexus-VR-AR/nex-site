const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");
const leadForm = document.querySelector("[data-lead-form]");
const formStatus = document.querySelector("[data-form-status]");

function closeMenu() {
  menuButton?.setAttribute("aria-expanded", "false");
  nav?.classList.remove("open");
  document.body.classList.remove("menu-open");
}

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  nav?.classList.toggle("open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    closeMenu();
  }
});

leadForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(leadForm);
  const name = String(data.get("name") || "").trim();
  const segment = String(data.get("segment") || "").trim();
  const message = String(data.get("message") || "").trim();

  if (!name || !segment || !message) {
    formStatus.textContent = "Preencha os campos principais para montar o diagnóstico.";
    return;
  }

  formStatus.textContent = `${name}, diagnóstico preparado. Próximo passo: conectar este formulário ao WhatsApp, CRM ou agenda.`;
  leadForm.reset();
});
