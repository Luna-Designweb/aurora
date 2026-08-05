/* ============================================================
   Aurora Café — script.js
   ============================================================ */
(function () {
  'use strict';

  const img = (id, w) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w || 900}&q=80`;

  /* ---------------- DADOS ---------------- */
  const MENU = [
    { name:'Espresso', cat:'cafe', catLabel:'Café', badge:'Clássico', price:'R$ 9', desc:'Microlote da Mantiqueira, 25s de extração. Doce, encorpado e com final de cacau.', notes:['Intenso','25 ml'], img:'1510591509098-f4fdc6d0ff04' },
    { name:'Cappuccino', cat:'cafe', catLabel:'Café', badge:'Mais pedido', price:'R$ 16', desc:'Espresso duplo, leite vaporizado sedoso e uma pitada de canela da casa.', notes:['Cremoso','180 ml'], img:'1572442388796-11668a67e53d' },
    { name:'Latte', cat:'cafe', catLabel:'Café', badge:'Suave', price:'R$ 17', desc:'Proporção alta de leite texturizado, arte livre feita à mão pelo barista.', notes:['Leve','240 ml'], img:'1517701550927-30cf4ba1dba5' },
    { name:'Mocha', cat:'cafe', catLabel:'Café', badge:'Indulgente', price:'R$ 19', desc:'Chocolate 70% derretido na hora, espresso e chantilly batido na casa.', notes:['Doce','240 ml'], img:'1579888944880-d98341245702' },
    { name:'Cold Brew', cat:'cafe', catLabel:'Café', badge:'18h de infusão', price:'R$ 18', desc:'Extração a frio por 18 horas. Refrescante, sem amargor e naturalmente doce.', notes:['Gelado','300 ml'], img:'1461023058943-07fcbe16d735' },
    { name:'Chocolate Quente', cat:'bebida', catLabel:'Bebida', badge:'Conforto', price:'R$ 21', desc:'Cacau belga, leite integral e um toque de flor de sal. Servido em caneca de barro.', notes:['Quente','280 ml'], img:'1517578239113-b03992dcdd25' },
    { name:'Chás da Casa', cat:'bebida', catLabel:'Bebida', badge:'7 blends', price:'R$ 14', desc:'Blends autorais de folha inteira: hortelã-limão, chai defumado e camomila dourada.', notes:['Infusão','400 ml'], img:'1576092768241-dec231879fc3' },
    { name:'Croissant Amanteigado', cat:'doce', catLabel:'Confeitaria', badge:'Assado 6h', price:'R$ 15', desc:'Massa folhada de 72 horas com manteiga francesa. Crocante por fora, aerado por dentro.', notes:['Fresco','Manhã'], img:'1555507036-ab1f4038808a' },
    { name:'Cheesecake de Frutas Vermelhas', cat:'doce', catLabel:'Confeitaria', badge:'Da vitrine', price:'R$ 24', desc:'Base de biscoito amanteigado, creme suave e calda de frutas colhidas na serra.', notes:['Gelado','Fatia'], img:'1533134242443-d4fd215305ad' },
    { name:'Cookies Artesanais', cat:'doce', catLabel:'Confeitaria', badge:'Feito à mão', price:'R$ 12', desc:'Gotas de chocolate meio amargo, centro macio e borda crocante. Saem quentes às 15h.', notes:['Quente','90 g'], img:'1499636136210-6f4ee915583e' },
    { name:'Brownie Belga', cat:'doce', catLabel:'Confeitaria', badge:'Sem farinha', price:'R$ 16', desc:'Denso, úmido e intenso. Chocolate 70% com nozes-pecã caramelizadas.', notes:['Denso','110 g'], img:'1606313564200-e75d5e30476c' }
  ];

  const GALLERY = [
    { id:'1495474472287-4d71bcdd2085', cap:'Do balcão para a mesa', cls:'tall' },
    { id:'1509042239860-f550ce710b93', cap:'Latte art', cls:'' },
    { id:'1554118811-1e0d58224f24', cap:'Salão principal', cls:'wide' },
    { id:'1555507036-ab1f4038808a', cap:'Confeitaria fresca', cls:'' },
    { id:'1453614512568-c4024d13c247', cap:'No balcão', cls:'' },
    { id:'1541167760496-1628856ab772', cap:'Leite vaporizado', cls:'tall' },
    { id:'1517248135467-4c7edcad34c4', cap:'Fim de tarde', cls:'wide' },
    { id:'1559925393-8be0ec4767c8', cap:'Nossa fachada', cls:'' }
  ];

  const TIMELINE = [
    { year:'2009', title:'Uma torradeira de 5 kg', text:'Helena Rocha começa a torrar café na garagem de casa e vende sacos para vizinhos aos sábados.' },
    { year:'2013', title:'O primeiro balcão', text:'Abrimos um quiosque de nove metros quadrados na Vila Madalena. Três banquetas e uma fila na calçada.' },
    { year:'2017', title:'Relação direta', text:'Fechamos as primeiras parcerias diretas com produtores da Mantiqueira, comprando safras inteiras.' },
    { year:'2021', title:'A casa atual', text:'Mudança para o sobrado de 1940: três salões, torra à vista e uma confeitaria própria na cozinha.' },
    { year:'2026', title:'Clube Aurora', text:'Mais de 4.000 assinantes recebem em casa o microlote do mês, torrado na semana do envio.' }
  ];

  const REVIEWS = [
    { txt:'O melhor cappuccino que já tomei em São Paulo. O atendimento tem um cuidado raro — te explicam o grão sem nenhuma pretensão.', name:'Marina Alencar', role:'Google · há 2 semanas', img:'1494790108377-be9c29b29330' },
    { txt:'Trabalhei a manhã inteira no mezanino. Wi-Fi impecável, silêncio respeitado e um cold brew que me segurou até a tarde.', name:'Rafael Guimarães', role:'TripAdvisor · há 1 mês', img:'1500648767791-00dcc994a43e' },
    { txt:'O croissant sai do forno às sete da manhã e vale acordar cedo. A massa esfarela do jeito certo. Virei cliente de todo sábado.', name:'Beatriz Nunes', role:'Google · há 3 semanas', img:'1438761681033-6461ffad8d80' },
    { txt:'Levei clientes para uma reunião no jardim interno e todos pediram o endereço. O ambiente faz metade do trabalho.', name:'Thiago Moretti', role:'Google · há 2 meses', img:'1507003211169-0a1dd7228f2d' },
    { txt:'Assino o clube há um ano. Cada microlote vem com uma carta contando de qual produtor veio. É café com história mesmo.', name:'Carolina Vidal', role:'Clube Aurora · há 5 dias', img:'1534528741775-53994a69daeb' }
  ];

  const FAQ = [
    { q:'Preciso reservar mesa?', a:'Não é obrigatório, mas nos fins de semana entre 9h e 12h costuma haver espera. Reservas podem ser feitas pelo formulário desta página ou pelo WhatsApp, com até 7 dias de antecedência.' },
    { q:'Vocês vendem os grãos torrados?', a:'Sim. Todos os microlotes servidos no balcão estão à venda em pacotes de 250 g e 1 kg, com data de torra impressa. Moemos na hora, no ponto do seu método.' },
    { q:'Há opções veganas e sem glúten?', a:'Temos leites vegetais de aveia, amêndoa e castanha sem custo adicional, além de cookies veganos e um brownie sem farinha feitos diariamente.' },
    { q:'O espaço é pet friendly?', a:'O jardim interno e a calçada recebem pets de qualquer porte, com bebedouro à disposição. Os salões internos são exclusivos para cães-guia.' },
    { q:'Posso trabalhar ou estudar na cafeteria?', a:'Claro. O mezanino tem tomadas em todas as mesas e Wi-Fi dedicado. Pedimos apenas que chamadas em viva-voz sejam feitas na área externa.' },
    { q:'Vocês fazem eventos privados?', a:'Sim, o salão principal pode ser fechado para eventos de até 50 pessoas às segundas e terças à noite, com menu de degustação de cafés e confeitaria.' }
  ];

  /* ---------------- LOADER ---------------- */
  const loader = document.getElementById('loader');
  const hideLoader = () => setTimeout(() => loader && loader.classList.add('hidden'), 900);
  window.addEventListener('load', hideLoader);
  setTimeout(hideLoader, 3500);

  /* ---------------- RENDER ---------------- */
  const menuGrid = document.getElementById('menuGrid');
  menuGrid.innerHTML = MENU.map(m => `
    <article class="menu-card" data-cat="${m.cat}">
      <div class="menu-thumb">
        <span class="menu-badge">${m.badge}</span>
        <img src="${img(m.img, 800)}" alt="${m.name}" loading="lazy" />
      </div>
      <div class="menu-body">
        <p class="menu-cat">${m.catLabel}</p>
        <h3>${m.name}</h3>
        <p>${m.desc}</p>
        <div class="menu-foot">
          <span class="price">${m.price}</span>
          <div class="notes">${m.notes.map(n => `<span class="note">${n}</span>`).join('')}</div>
        </div>
      </div>
    </article>`).join('');

  document.getElementById('gallery').innerHTML = GALLERY.map(g => `
    <figure class="gal-item ${g.cls}">
      <img src="${img(g.id, 900)}" alt="${g.cap}" loading="lazy" />
      <figcaption class="gal-cap">${g.cap}</figcaption>
    </figure>`).join('');

  document.getElementById('timeline').innerHTML = TIMELINE.map(t => `
    <div class="tl-item reveal">
      <span class="tl-year">${t.year}</span>
      <h3>${t.title}</h3>
      <p>${t.text}</p>
    </div>`).join('');

  document.getElementById('reviews').innerHTML = REVIEWS.map(r => `
    <article class="review">
      <div class="stars">★★★★★</div>
      <p>“${r.txt}”</p>
      <div class="reviewer">
        <img src="${img(r.img, 200)}" alt="${r.name}" loading="lazy" />
        <div><strong>${r.name}</strong><small>${r.role}</small></div>
      </div>
    </article>`).join('');

  document.getElementById('accordion').innerHTML = FAQ.map((f, i) => `
    <div class="acc-item${i === 0 ? ' open' : ''}">
      <button class="acc-q" type="button">${f.q}</button>
      <div class="acc-a"><p>${f.a}</p></div>
    </div>`).join('');

  /* ---------------- FILTROS ---------------- */
  document.getElementById('filters').addEventListener('click', e => {
    const btn = e.target.closest('.chip');
    if (!btn) return;
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('.menu-card').forEach(card => {
      const show = f === 'all' || card.dataset.cat === f;
      card.classList.toggle('hide', !show);
      if (show) { card.style.animation = 'none'; void card.offsetWidth; card.style.animation = 'fadeUp .6s cubic-bezier(.22,.61,.36,1) both'; }
    });
  });

  const style = document.createElement('style');
  style.textContent = '@keyframes fadeUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}';
  document.head.appendChild(style);

  /* ---------------- ACCORDION ---------------- */
  const acc = document.getElementById('accordion');
  const syncAcc = () => acc.querySelectorAll('.acc-item').forEach(it => {
    const a = it.querySelector('.acc-a');
    a.style.maxHeight = it.classList.contains('open') ? a.scrollHeight + 'px' : '0px';
  });
  acc.addEventListener('click', e => {
    const q = e.target.closest('.acc-q');
    if (!q) return;
    const item = q.parentElement;
    const isOpen = item.classList.contains('open');
    acc.querySelectorAll('.acc-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
    syncAcc();
  });
  syncAcc();
  window.addEventListener('resize', syncAcc);

  /* ---------------- REVIEWS SLIDER ---------------- */
  const rev = document.getElementById('reviews');
  const step = () => Math.min(rev.clientWidth * 0.8, 420);
  document.getElementById('revNext').onclick = () => rev.scrollBy({ left: step(), behavior: 'smooth' });
  document.getElementById('revPrev').onclick = () => rev.scrollBy({ left: -step(), behavior: 'smooth' });

  /* ---------------- HEADER / NAV ---------------- */
  const header = document.getElementById('header');
  const nav = document.getElementById('nav');
  const burger = document.getElementById('burger');
  const toTop = document.getElementById('toTop');
  const progress = document.getElementById('scrollProgress');

  const closeNav = () => { nav.classList.remove('open'); burger.classList.remove('open'); document.body.classList.remove('locked'); };
  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    burger.classList.toggle('open', open);
    document.body.classList.toggle('locked', open);
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));

  const sections = [...document.querySelectorAll('section[id]')];
  const links = [...document.querySelectorAll('.nav-link')];

  function onScroll() {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 60);
    toTop.classList.toggle('show', y > 600);
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';

    let current = 'home';
    sections.forEach(s => { if (y >= s.offsetTop - 140) current = s.id; });
    links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current));

    // Parallax
    document.querySelectorAll('.parallax-bg,.parallax').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.bottom < -200 || rect.top > window.innerHeight + 200) return;
      const speed = parseFloat(el.dataset.speed || 0.2);
      const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * speed;
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    });
  }
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { onScroll(); ticking = false; });
  }, { passive: true });
  onScroll();

  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---------------- SCROLL REVEAL ---------------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en, i) => {
      if (en.isIntersecting) {
        setTimeout(() => en.target.classList.add('visible'), i * 90);
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  document.querySelectorAll('.menu-card,.gal-item,.review,.ambiente-card').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = (i % 4) * 0.08 + 's';
    io.observe(el);
  });

  /* ---------------- TOAST + FORMS ---------------- */
  const toastEl = document.getElementById('toast');
  let toastTimer;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 3600);
  }
  const isEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

  document.getElementById('newsForm').addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('newsName').value.trim();
    const mail = document.getElementById('newsEmail').value.trim();
    if (!name) return toast('Diga seu nome para personalizarmos a carta.');
    if (!isEmail(mail)) return toast('Confira o e-mail informado.');
    e.target.reset();
    toast(`Bem-vindo ao Clube Aurora, ${name.split(' ')[0]}! ☕`);
  });

  document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    const n = document.getElementById('cName').value.trim();
    const p = document.getElementById('cPhone').value.trim();
    const d = document.getElementById('cDate').value;
    if (!n) return toast('Precisamos do seu nome para a reserva.');
    if (p.replace(/\D/g, '').length < 10) return toast('Informe um telefone válido com DDD.');
    if (!d) return toast('Escolha a data da visita.');
    e.target.reset();
    toast('Reserva enviada! Confirmamos no WhatsApp em até 1 hora.');
  });

  // Máscara simples de telefone
  const phone = document.getElementById('cPhone');
  phone.addEventListener('input', () => {
    let v = phone.value.replace(/\D/g, '').slice(0, 11);
    if (v.length > 6) v = `(${v.slice(0,2)}) ${v.slice(2,7)}-${v.slice(7)}`;
    else if (v.length > 2) v = `(${v.slice(0,2)}) ${v.slice(2)}`;
    else if (v.length) v = `(${v}`;
    phone.value = v;
  });

  // Data mínima = hoje
  const dateEl = document.getElementById('cDate');
  dateEl.min = new Date().toISOString().split('T')[0];

  /* ---------------- MISC ---------------- */
  document.getElementById('year').textContent = new Date().getFullYear();

  document.getElementById('gallery').addEventListener('click', e => {
    const item = e.target.closest('.gal-item');
    if (item) toast(item.querySelector('.gal-cap').textContent + ' — Aurora Café');
  });
})();
