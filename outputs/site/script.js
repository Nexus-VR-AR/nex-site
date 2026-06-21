const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");
const leadForm = document.querySelector("[data-lead-form]");
const formStatus = document.querySelector("[data-form-status]");
const segmentTabs = [...document.querySelectorAll("[data-segment]")];
const segmentTitle = document.querySelector("[data-segment-title]");
const segmentText = document.querySelector("[data-segment-text]");
const segmentIcon = document.querySelector("[data-segment-icon]");

const segments = {
  arquitetos: {
    title: "Arquitetos",
    text: "Projetos autorais precisam de portfólio, narrativa e conversas que filtrem orçamento, prazo e estilo antes da reunião.",
    icon: '<svg viewBox="0 0 24 24"><path d="m4 20 8-16 8 16M8 14h8" /></svg>',
  },
  engenheiros: {
    title: "Engenheiros",
    text: "Serviços técnicos exigem clareza sobre escopo, responsabilidade e confiança para transformar demanda complexa em proposta objetiva.",
    icon: '<svg viewBox="0 0 24 24"><path d="M5 19h14M7 19V8l5-3 5 3v11M10 12h4" /></svg>',
  },
  medicos: {
    title: "Médicos",
    text: "Autoridade precisa caminhar com ética, educação e triagem cuidadosa para gerar procura qualificada sem promessas inadequadas.",
    icon: '<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14M8 8l8 8M16 8l-8 8" /></svg>',
  },
  clinicas: {
    title: "Clínicas",
    text: "Unidades de atendimento precisam organizar canais, retornos e agendamentos para reduzir perda de pacientes entre interesse e consulta.",
    icon: '<svg viewBox="0 0 24 24"><path d="M4 20V7h16v13M8 7V4h8v3M9 13h6M12 10v6" /></svg>',
  },
};

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  nav?.classList.toggle("open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    menuButton?.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
    document.body.classList.remove("menu-open");
  }
});

segmentTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const key = tab.dataset.segment;
    const selected = segments[key];
    if (!selected) return;

    segmentTabs.forEach((item) => {
      const active = item === tab;
      item.classList.toggle("active", active);
      item.setAttribute("aria-selected", String(active));
    });

    segmentTitle.textContent = selected.title;
    segmentText.textContent = selected.text;
    segmentIcon.innerHTML = selected.icon;
  });
});

leadForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(leadForm);
  const name = String(data.get("name") || "").trim();
  const company = String(data.get("company") || "").trim();
  const goal = String(data.get("goal") || "").trim();

  if (!name || !company || !goal) {
    formStatus.textContent = "Preencha os campos principais para montar o diagnóstico.";
    return;
  }

  formStatus.textContent = `${name}, diagnóstico preparado para ${company}. Próximo passo: conectar este formulário ao WhatsApp, CRM ou agenda.`;
  leadForm.reset();
});
