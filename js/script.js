// Doce Noel Confeitaria - todos os recursos de JavaScript
// Recursos: 1 slideshow, 2 parallax, 3 sons, 4 cards dinâmicos, 5 filtro/busca,
// 6 carrinho, 7 contagem regressiva, 8 validação, 9 menu responsivo,
// 10 modal/lightbox, 11 neve, 12 modo noite, 13 animação ao rolar, 14 voltar ao topo

function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function mostrarToast(texto) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = texto;
  toast.classList.add("visivel");
  clearTimeout(mostrarToast.timer);
  mostrarToast.timer = setTimeout(() => toast.classList.remove("visivel"), 2200);
}

// ===== 3. Sons =====
const musica = new Audio("sons/musica-natal.mp3");
musica.loop = true;
musica.volume = 0.2;
const sino = new Audio("sons/sino.mp3");
sino.volume = 0.4;

function tocarSino() {
  sino.currentTime = 0;
  sino.play().catch(() => {});
}

const btnMusica = document.getElementById("btn-musica");
if (btnMusica) {
  btnMusica.addEventListener("click", () => {
    if (musica.paused) {
      musica.play().catch(() => {});
      btnMusica.textContent = "🔊";
      btnMusica.title = "Desligar música";
      localStorage.setItem("musica", "on");
    } else {
      musica.pause();
      btnMusica.textContent = "🔈";
      btnMusica.title = "Ligar música";
      localStorage.setItem("musica", "off");
    }
  });
}
document.querySelectorAll(".botao").forEach((b) => b.addEventListener("click", tocarSino));

// ===== 9. Menu responsivo =====
const btnMenu = document.querySelector(".btn-menu");
const menu = document.querySelector(".menu");
if (btnMenu && menu) {
  btnMenu.addEventListener("click", () => {
    menu.classList.toggle("aberto");
    btnMenu.textContent = menu.classList.contains("aberto") ? "✕" : "☰";
  });
}

// ===== 12. Modo "Noite de Natal" =====
const btnTema = document.getElementById("btn-tema");
if (localStorage.getItem("tema") === "noite") document.body.classList.add("noite");
if (btnTema) {
  btnTema.textContent = document.body.classList.contains("noite") ? "☀️" : "🌙";
  btnTema.addEventListener("click", () => {
    document.body.classList.toggle("noite");
    const noite = document.body.classList.contains("noite");
    localStorage.setItem("tema", noite ? "noite" : "dia");
    btnTema.textContent = noite ? "☀️" : "🌙";
  });
}

// ===== 1. Slideshow =====
const slides = document.querySelectorAll(".slide");
if (slides.length) {
  const indicadores = document.querySelector(".indicadores");
  let atual = 0;
  slides.forEach((_, i) => {
    const bolinha = document.createElement("button");
    bolinha.setAttribute("aria-label", `Ir para o slide ${i + 1}`);
    bolinha.addEventListener("click", () => { mostrarSlide(i); reiniciar(); });
    indicadores.appendChild(bolinha);
  });
  function mostrarSlide(n) {
    slides[atual].classList.remove("ativo");
    indicadores.children[atual].classList.remove("ativo");
    atual = (n + slides.length) % slides.length;
    slides[atual].classList.add("ativo");
    indicadores.children[atual].classList.add("ativo");
  }
  let intervalo = setInterval(() => mostrarSlide(atual + 1), 5000);
  function reiniciar() { clearInterval(intervalo); intervalo = setInterval(() => mostrarSlide(atual + 1), 5000); }
  document.querySelector(".seta.anterior").addEventListener("click", () => { mostrarSlide(atual - 1); reiniciar(); });
  document.querySelector(".seta.proximo").addEventListener("click", () => { mostrarSlide(atual + 1); reiniciar(); });
  slides[0].classList.add("ativo");
  indicadores.children[0].classList.add("ativo");
}

// ===== 2. Parallax (camadas em velocidades diferentes) =====
const camadas = document.querySelectorAll("[data-velocidade]");
if (camadas.length) {
  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    camadas.forEach((c) => {
      c.style.transform = `translateY(${y * parseFloat(c.dataset.velocidade)}px)`;
    });
  }, { passive: true });
}

// ===== 6. Carrinho (localStorage) =====
let carrinho = JSON.parse(localStorage.getItem("carrinho") || "[]");

function salvarCarrinho() {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  renderizarCarrinho();
}

function adicionarAoCarrinho(id) {
  const item = carrinho.find((i) => i.id === id);
  if (item) item.qtd++;
  else carrinho.push({ id, qtd: 1 });
  salvarCarrinho();
  const p = produtos.find((p) => p.id === id);
  mostrarToast(`🎁 ${p.nome} foi para o carrinho!`);
}

function alterarQtd(id, delta) {
  const item = carrinho.find((i) => i.id === id);
  if (!item) return;
  item.qtd += delta;
  if (item.qtd <= 0) carrinho = carrinho.filter((i) => i.id !== id);
  salvarCarrinho();
}

function renderizarCarrinho() {
  const lista = document.getElementById("carrinho-itens");
  const badge = document.getElementById("contador-carrinho");
  const totalEl = document.getElementById("carrinho-total");
  const qtdTotal = carrinho.reduce((s, i) => s + i.qtd, 0);
  if (badge) badge.textContent = qtdTotal;
  if (!lista) return;
  if (carrinho.length === 0) {
    lista.innerHTML = `<li class="vazio"><span>🛷</span>Seu trenó está vazio!</li>`;
  } else {
    lista.innerHTML = carrinho.map((i) => {
      const p = produtos.find((p) => p.id === i.id);
      return `<li class="item">
        <img src="${p.imagem}" alt="${p.nome}">
        <div><strong>${p.nome}</strong><small>${formatarPreco(p.preco)}</small></div>
        <div class="qtd">
          <button data-menos="${p.id}" aria-label="Diminuir">−</button>
          <span>${i.qtd}</span>
          <button data-mais="${p.id}" aria-label="Aumentar">+</button>
        </div>
      </li>`;
    }).join("");
  }
  const total = carrinho.reduce((s, i) => s + produtos.find((p) => p.id === i.id).preco * i.qtd, 0);
  totalEl.textContent = formatarPreco(total);
}

const painelCarrinho = document.getElementById("carrinho");
const sombraFundo = document.getElementById("sombra-fundo");
function abrirCarrinho(abrir) {
  painelCarrinho.classList.toggle("aberto", abrir);
  sombraFundo.classList.toggle("ativo", abrir);
}
document.getElementById("btn-carrinho")?.addEventListener("click", () => abrirCarrinho(true));
document.getElementById("fechar-carrinho")?.addEventListener("click", () => abrirCarrinho(false));
sombraFundo?.addEventListener("click", () => abrirCarrinho(false));
document.getElementById("carrinho-itens")?.addEventListener("click", (e) => {
  if (e.target.dataset.mais) alterarQtd(Number(e.target.dataset.mais), 1);
  if (e.target.dataset.menos) alterarQtd(Number(e.target.dataset.menos), -1);
});
document.getElementById("finalizar")?.addEventListener("click", () => {
  if (carrinho.length === 0) return mostrarToast("Adicione alguns doces primeiro! 🍪");
  tocarSino();
  carrinho = [];
  salvarCarrinho();
  abrirCarrinho(false);
  mostrarToast("🎄 Pedido enviado! Feliz Natal!");
});
renderizarCarrinho();

// ===== 4. Cards dinâmicos =====
function criarCard(p) {
  return `<article class="card revelar">
    <div class="card-img" data-detalhe="${p.id}">
      <img src="${p.imagem}" alt="${p.nome}" loading="lazy">
    </div>
    <div class="card-corpo">
      <span class="card-categoria">${categorias[p.categoria]}</span>
      <h3>${p.nome}</h3>
      <p>${p.descricao}</p>
      <span class="preco">${formatarPreco(p.preco)}</span>
      <div class="card-botoes">
        <button class="botao contorno" data-detalhe="${p.id}">Detalhes</button>
        <button class="botao" data-add="${p.id}">Comprar</button>
      </div>
    </div>
  </article>`;
}

function ligarCliquesCards(container) {
  container.addEventListener("click", (e) => {
    const alvo = e.target.closest("[data-add],[data-detalhe]");
    if (!alvo) return;
    if (alvo.dataset.add) { tocarSino(); adicionarAoCarrinho(Number(alvo.dataset.add)); }
    else abrirDetalhe(Number(alvo.dataset.detalhe));
  });
}

// Home: só os destaques
const gradeDestaques = document.getElementById("destaques");
if (gradeDestaques) {
  gradeDestaques.innerHTML = produtos.filter((p) => p.destaque).map(criarCard).join("");
  ligarCliquesCards(gradeDestaques);
}

// ===== 5. Filtro e busca =====
const gradeProdutos = document.getElementById("lista-produtos");
if (gradeProdutos) {
  const busca = document.getElementById("busca");
  const ordem = document.getElementById("ordem");
  const chips = document.getElementById("chips");
  const contador = document.getElementById("contador");
  let categoriaAtual = new URLSearchParams(location.search).get("categoria") || "todas";

  chips.innerHTML = [["todas", "Todas"], ...Object.entries(categorias)]
    .map(([k, v]) => `<button class="chip ${k === categoriaAtual ? "ativo" : ""}" data-cat="${k}">${v}</button>`).join("");

  chips.addEventListener("click", (e) => {
    if (!e.target.dataset.cat) return;
    categoriaAtual = e.target.dataset.cat;
    chips.querySelectorAll(".chip").forEach((c) => c.classList.toggle("ativo", c === e.target));
    atualizarLista();
  });
  busca.addEventListener("input", atualizarLista);
  ordem.addEventListener("change", atualizarLista);

  function atualizarLista() {
    const termo = busca.value.trim().toLowerCase();
    let resultado = produtos.filter((p) =>
      (categoriaAtual === "todas" || p.categoria === categoriaAtual) &&
      p.nome.toLowerCase().includes(termo)
    );
    if (ordem.value === "menor") resultado = [...resultado].sort((a, b) => a.preco - b.preco);
    if (ordem.value === "maior") resultado = [...resultado].sort((a, b) => b.preco - a.preco);
    if (ordem.value === "nome") resultado = [...resultado].sort((a, b) => a.nome.localeCompare(b.nome));

    contador.textContent = `Mostrando ${resultado.length} de ${produtos.length} produtos`;
    gradeProdutos.innerHTML = resultado.length
      ? resultado.map(criarCard).join("")
      : `<div class="vazio"><span>☃️</span>Nenhum produto encontrado. Que tal procurar outro docinho?</div>`;
    observarRevelar();
  }
  ligarCliquesCards(gradeProdutos);
  atualizarLista();
}

// Ofertas (galeria.html)
const gradeOfertas = document.getElementById("lista-ofertas");
if (gradeOfertas) {
  const idsOferta = [1, 16, 21, 31, 32, 36, 42, 50];
  gradeOfertas.innerHTML = idsOferta.map((id) => {
    const p = produtos.find((p) => p.id === id);
    const novo = p.preco * 0.8;
    return `<article class="card revelar">
      <span class="oferta-selo">-20%</span>
      <div class="card-img" data-detalhe="${p.id}"><img src="${p.imagem}" alt="${p.nome}" loading="lazy"></div>
      <div class="card-corpo">
        <span class="card-categoria">${categorias[p.categoria]}</span>
        <h3>${p.nome}</h3>
        <p>${p.descricao}</p>
        <div><span class="preco-antigo">${formatarPreco(p.preco)}</span><span class="preco">${formatarPreco(novo)}</span></div>
        <div class="card-botoes"><button class="botao" data-add="${p.id}">Aproveitar</button></div>
      </div>
    </article>`;
  }).join("");
  ligarCliquesCards(gradeOfertas);
}

// ===== 10. Modal de detalhes e lightbox =====
const modal = document.getElementById("modal");
function abrirDetalhe(id) {
  if (!modal) return;
  const p = produtos.find((p) => p.id === id);
  modal.querySelector(".modal-conteudo").innerHTML = `
    <button class="fechar" aria-label="Fechar">✕</button>
    <img src="${p.imagem}" alt="${p.nome}">
    <div class="modal-info">
      <span class="card-categoria">${categorias[p.categoria]}</span>
      <h3>${p.nome}</h3>
      <p>${p.descricao}</p>
      <p>Feito artesanalmente em nossa cozinha, com ingredientes selecionados e muito carinho natalino. Entregamos embalado para presente. 🎁</p>
      <span class="preco">${formatarPreco(p.preco)}</span>
      <button class="botao pulsar" data-add-modal="${p.id}">Adicionar ao carrinho</button>
    </div>`;
  modal.classList.add("aberto");
}
modal?.addEventListener("click", (e) => {
  if (e.target === modal || e.target.classList.contains("fechar")) modal.classList.remove("aberto");
  if (e.target.dataset.addModal) {
    tocarSino();
    adicionarAoCarrinho(Number(e.target.dataset.addModal));
    modal.classList.remove("aberto");
  }
});

const lightbox = document.getElementById("lightbox");
document.querySelectorAll(".galeria figure").forEach((fig) => {
  fig.addEventListener("click", () => {
    const img = fig.querySelector("img");
    lightbox.querySelector("img").src = img.src;
    lightbox.querySelector("img").alt = img.alt;
    lightbox.classList.add("aberto");
    tocarSino();
  });
});
lightbox?.addEventListener("click", (e) => {
  if (e.target === lightbox || e.target.classList.contains("fechar")) lightbox.classList.remove("aberto");
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal?.classList.remove("aberto");
    lightbox?.classList.remove("aberto");
    if (painelCarrinho) abrirCarrinho(false);
  }
});

// ===== 7. Contagem regressiva =====
function atualizarContagem() {
  const agora = new Date();
  let natal = new Date(agora.getFullYear(), 11, 25);
  if (agora > natal) natal = new Date(agora.getFullYear() + 1, 11, 25);
  const diff = natal - agora;
  const dias = Math.floor(diff / 86400000);
  const horas = Math.floor((diff / 3600000) % 24);
  const minutos = Math.floor((diff / 60000) % 60);
  const segundos = Math.floor((diff / 1000) % 60);
  document.querySelectorAll(".contagem").forEach((c) => {
    c.querySelector("[data-dias]").textContent = dias;
    c.querySelector("[data-horas]").textContent = String(horas).padStart(2, "0");
    c.querySelector("[data-minutos]").textContent = String(minutos).padStart(2, "0");
    c.querySelector("[data-segundos]").textContent = String(segundos).padStart(2, "0");
  });
}
if (document.querySelector(".contagem")) {
  atualizarContagem();
  setInterval(atualizarContagem, 1000);
}

// ===== 8. Validação do formulário =====
const formulario = document.getElementById("form-contato");
if (formulario) {
  const mensagem = document.getElementById("msg-sucesso");
  function marcarErro(id, texto) {
    const campo = document.getElementById(id).closest(".campo");
    campo.classList.toggle("erro", !!texto);
    campo.querySelector(".msg-erro").textContent = texto || "";
    return !texto;
  }
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = formulario.nome.value.trim();
    const email = formulario.email.value.trim();
    const assunto = formulario.assunto.value;
    const texto = formulario.mensagem.value.trim();
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
    const ok = [
      marcarErro("nome", nome.length < 3 ? "Digite seu nome (mínimo 3 letras)." : ""),
      marcarErro("email", !email ? "Digite seu e-mail." : !emailValido ? "E-mail inválido. Ex.: noel@polonorte.com" : ""),
      marcarErro("assunto", !assunto ? "Escolha um assunto." : ""),
      marcarErro("mensagem", texto.length < 10 ? "A mensagem precisa ter pelo menos 10 caracteres." : "")
    ].every(Boolean);
    mensagem.classList.remove("visivel");
    if (ok) {
      tocarSino();
      mensagem.textContent = `Obrigado, ${nome}! 🎄 Sua mensagem foi enviada. Responderemos em breve no e-mail ${email}.`;
      mensagem.classList.add("visivel");
      formulario.reset();
    }
  });
}

// ===== 11. Efeito de neve (canvas) =====
const canvas = document.getElementById("neve");
if (canvas) {
  const ctx = canvas.getContext("2d");
  let flocos = [];
  function redimensionar() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    const qtd = innerWidth < 600 ? 40 : 90;
    flocos = Array.from({ length: qtd }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 3 + 1,
      v: Math.random() * 1 + 0.4,
      vento: Math.random() * 0.6 - 0.3
    }));
  }
  function nevar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(255,255,255,0.85)";
    flocos.forEach((f) => {
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
      ctx.fill();
      f.y += f.v;
      f.x += f.vento + Math.sin(f.y / 40) * 0.3;
      if (f.y > canvas.height) { f.y = -5; f.x = Math.random() * canvas.width; }
    });
    requestAnimationFrame(nevar);
  }
  addEventListener("resize", redimensionar);
  redimensionar();
  nevar();
}

// ===== 13. Animação ao rolar =====
var observador;
function observarRevelar() {
  if (!observador) {
    observador = new IntersectionObserver((entradas) => {
      entradas.forEach((ent) => {
        if (ent.isIntersecting) { ent.target.classList.add("visivel"); observador.unobserve(ent.target); }
      });
    }, { threshold: 0.12 });
  }
  document.querySelectorAll(".revelar:not(.visivel)").forEach((el) => observador.observe(el));
}
observarRevelar();

// ===== 14. Voltar ao topo =====
const btnTopo = document.getElementById("voltar-topo");
if (btnTopo) {
  addEventListener("scroll", () => btnTopo.classList.toggle("visivel", scrollY > 400), { passive: true });
  btnTopo.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}
