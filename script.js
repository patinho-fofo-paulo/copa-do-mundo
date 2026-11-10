// ==========================================
// COPA DO MUNDO 2026 — SCRIPT PRINCIPAL
// ==========================================

// BANDEIRAS
const flags = {
  'Argentina':'🇦🇷','Brasil':'🇧🇷','Colômbia':'🇨🇴','Equador':'🇪🇨',
  'Paraguai':'🇵🇾','Uruguai':'🇺🇾','Canadá':'🇨🇦',
  'Estados Unidos':'🇺🇸','México':'🇲🇽','Curaçao':'🇨🇼',
  'Haiti':'🇭🇹','Panamá':'🇵🇦','Arábia Saudita':'🇸🇦',
  'Austrália':'🇦🇺','Catar':'🇶🇦','Coreia do Sul':'🇰🇷',
  'Irã':'🇮🇷','Iraque':'🇮🇶','Japão':'🇯🇵','Jordânia':'🇯🇴',
  'Uzbequistão':'🇺🇿','África do Sul':'🇿🇦','Argélia':'🇩🇿',
  'Cabo Verde':'🇨🇻','Costa do Marfim':'🇨🇮','Egito':'🇪🇬',
  'Gana':'🇬🇭','Marrocos':'🇲🇦','RD Congo':'🇨🇩',
  'República Democrática do Congo':'🇨🇩','Senegal':'🇸🇳',
  'Tunísia':'🇹🇳','Nova Zelândia':'🇳🇿','Alemanha':'🇩🇪',
  'Áustria':'🇦🇹','Bélgica':'🇧🇪',
  'Bósnia e Herzegovina':'🇧🇦','Bósnia':'🇧🇦',
  'Croácia':'🇭🇷','Escócia':'🏴','Espanha':'🇪🇸',
  'França':'🇫🇷','Holanda':'🇳🇱','Inglaterra':'🏴',
  'Noruega':'🇳🇴','Portugal':'🇵🇹',
  'República Tcheca':'🇨🇿','Suécia':'🇸🇪',
  'Suíça':'🇨🇭','Turquia':'🇹🇷','Itália':'🇮🇹',
  'Dinamarca':'🇩🇰','Ucrânia':'🇺🇦','Sérvia':'🇷🇸',
  'Camarões':'🇨🇲'
};

const getFlag = team => flags[team] || '🏳️';

// ==========================================
// GRUPOS
// ==========================================

const groups = [
  { name:'A', teams:['México','África do Sul','Coreia do Sul','República Tcheca'] },
  { name:'B', teams:['Canadá','Bósnia e Herzegovina','Catar','Suíça'] },
  { name:'C', teams:['Brasil','Marrocos','Haiti','Escócia'] },
  { name:'D', teams:['Estados Unidos','Paraguai','Austrália','Turquia'] },
  { name:'E', teams:['Alemanha','Curaçao','Costa do Marfim','Equador'] },
  { name:'F', teams:['Holanda','Japão','Suécia','Tunísia'] },
  { name:'G', teams:['Bélgica','Egito','Irã','Nova Zelândia'] },
  { name:'H', teams:['Espanha','Cabo Verde','Arábia Saudita','Uruguai'] },
  { name:'I', teams:['França','Senegal','Iraque','Noruega'] },
  { name:'J', teams:['Argentina','Argélia','Áustria','Jordânia'] },
  { name:'K', teams:['Portugal','RD Congo','Uzbequistão','Colômbia'] },
  { name:'L', teams:['Inglaterra','Croácia','Gana','Panamá'] }
];

// ==========================================
// RANKING FIFA
// Pontuações não informadas: não foram inventadas.
// ==========================================

const ranking = [
  {pos:1, team:'Espanha', conf:'UEFA', points:null},
  {pos:2, team:'Argentina', conf:'CONMEBOL', points:null},
  {pos:3, team:'França', conf:'UEFA', points:null},
  {pos:4, team:'Inglaterra', conf:'UEFA', points:null},
  {pos:5, team:'Portugal', conf:'UEFA', points:null},
  {pos:6, team:'Brasil', conf:'CONMEBOL', points:null},
  {pos:7, team:'Marrocos', conf:'CAF', points:null}
];

const confNames = {
  UEFA:'Europa',
  CONMEBOL:'América do Sul',
  CAF:'África',
  AFC:'Ásia',
  CONCACAF:'América do Norte e Central',
  OFC:'Oceania'
};

const confs = [
  'GERAL','UEFA','CONMEBOL','CAF','AFC','CONCACAF','OFC'
];

let activeConf = 'GERAL';
let rankingSearchTerm = '';
let rankingSort = 'pos';

// ==========================================
// RESULTADOS DO MATA-MATA
// ==========================================

const bracketRounds = [
  {
    name:'16 avos de final',
    matches:[
      ['Canadá',1,'África do Sul',0,'Canadá'],
      ['Brasil',2,'Japão',1,'Brasil'],
      ['Alemanha',1,'Paraguai',1,'Alemanha','Alemanha classificada nos pênaltis'],
      ['Holanda',1,'Marrocos',1,'Holanda','Holanda classificada nos pênaltis'],
      ['Costa do Marfim',1,'Noruega',2,'Noruega'],
      ['França',3,'Suécia',0,'França'],
      ['México',2,'Equador',0,'México'],
      ['RD Congo',1,'Inglaterra',2,'Inglaterra'],
      ['Senegal',2,'Bélgica',3,'Bélgica'],
      ['Bósnia',0,'Estados Unidos',2,'Estados Unidos'],
      ['Espanha',3,'Áustria',0,'Espanha'],
      ['Croácia',1,'Portugal',2,'Portugal'],
      ['Argélia',0,'Suíça',2,'Suíça'],
      ['Egito',1,'Austrália',1,'Egito','Egito classificado nos pênaltis'],
      ['Argentina',3,'Cabo Verde',2,'Argentina'],
      ['Gana',0,'Colômbia',1,'Colômbia']
    ]
  },
  {
    name:'Oitavas de final',
    matches:[
      ['Canadá',0,'Marrocos',3,'Marrocos'],
      ['Paraguai',0,'França',1,'França'],
      ['Brasil',1,'Noruega',2,'Noruega'],
      ['México',2,'Inglaterra',3,'Inglaterra'],
      ['Portugal',0,'Espanha',1,'Espanha'],
      ['Estados Unidos',1,'Bélgica',4,'Bélgica'],
      ['Argentina',3,'Egito',2,'Argentina'],
      ['Suíça',0,'Colômbia',0,'Suíça','Suíça classificada nos pênaltis']
    ]
  },
  {
    name:'Quartas de final',
    matches:[
      ['França',2,'Marrocos',0,'França','09/07'],
      ['Espanha',2,'Bélgica',1,'Espanha','10/07'],
      ['Noruega',1,'Inglaterra',2,'Inglaterra','11/07 · Prorrogação'],
      ['Argentina',3,'Suíça',1,'Argentina','11/07 · Prorrogação']
    ]
  },
  {
    name:'Semifinais',
    matches:[
      ['França',0,'Espanha',2,'Espanha','14/07'],
      ['Inglaterra',1,'Argentina',2,'Argentina','15/07']
    ]
  },
  {
    name:'Disputa do 3º lugar',
    matches:[
      ['Inglaterra',6,'França',4,'Inglaterra','18/07 · Miami']
    ]
  },
  {
    name:'Grande Final',
    matches:[
      ['Espanha',1,'Argentina',0,'Espanha','19/07 · Prorrogação']
    ]
  }
];

// ==========================================
// LISTA DE PARTIDAS
// ==========================================

const matchSchedule = [];

bracketRounds.forEach(round => {
  round.matches.forEach(match => {
    const [t1,s1,t2,s2,winner,detail] = match;

    matchSchedule.push({
      date:round.name,
      t1,
      s1,
      t2,
      s2,
      winner,
      note:detail || 'Encerrado',
      done:true
    });
  });
});

// ==========================================
// HISTÓRIA DAS COPAS
// ==========================================

const worldCups = [
  {year:1930,host:'Uruguai',champion:'Uruguai'},
  {year:1934,host:'Itália',champion:'Itália'},
  {year:1938,host:'França',champion:'Itália'},
  {year:1950,host:'Brasil',champion:'Uruguai'},
  {year:1954,host:'Suíça',champion:'Alemanha Ocidental'},
  {year:1958,host:'Suécia',champion:'Brasil'},
  {year:1962,host:'Chile',champion:'Brasil'},
  {year:1966,host:'Inglaterra',champion:'Inglaterra'},
  {year:1970,host:'México',champion:'Brasil'},
  {year:1974,host:'Alemanha Ocidental',champion:'Alemanha Ocidental'},
  {year:1978,host:'Argentina',champion:'Argentina'},
  {year:1982,host:'Espanha',champion:'Itália'},
  {year:1986,host:'México',champion:'Argentina'},
  {year:1990,host:'Itália',champion:'Alemanha Ocidental'},
  {year:1994,host:'Estados Unidos',champion:'Brasil'},
  {year:1998,host:'França',champion:'França'},
  {year:2002,host:'Coreia do Sul/Japão',champion:'Brasil'},
  {year:2006,host:'Alemanha',champion:'Itália'},
  {year:2010,host:'África do Sul',champion:'Espanha'},
  {year:2014,host:'Brasil',champion:'Alemanha'},
  {year:2018,host:'Rússia',champion:'França'},
  {year:2022,host:'Catar',champion:'Argentina'},
  {year:2026,host:'Canadá, México e Estados Unidos',champion:'Espanha'}
];

// ==========================================
// CURIOSIDADES
// ==========================================

const curiosities = [
  {
    icon:'🇪🇸',
    title:'A Espanha conquistou o bi',
    text:'No cenário desta edição do projeto, a Espanha conquistou seu segundo título mundial, depois de 2010.'
  },
  {
    icon:'🏆',
    title:'A campeã de 2026',
    text:'A Espanha venceu a Argentina por 1 a 0 na grande final, após a prorrogação.'
  },
  {
    icon:'🌎',
    title:'48 seleções',
    text:'A edição de 2026 foi planejada com 48 seleções participantes.'
  },
  {
    icon:'🏟️',
    title:'Três países-sede',
    text:'Canadá, México e Estados Unidos são os países anfitriões do torneio.'
  }
];

// ==========================================
// GALERIA
// ==========================================

const galleryItems = [
  {
    icon:'🏆',
    title:'Espanha campeã',
    desc:'A seleção espanhola aparece como campeã desta edição no projeto.'
  },
  {
    icon:'🇪🇸',
    title:'A força da Espanha',
    desc:'A Espanha chegou à final após vencer França e Bélgica.'
  },
  {
    icon:'⚽',
    title:'A grande final',
    desc:'Espanha 1 x 0 Argentina, resultado informado para a decisão.'
  },
  {
    icon:'🌎',
    title:'Três países-sede',
    desc:'Canadá, México e Estados Unidos recebem a competição.'
  },
  {
    icon:'🥇',
    title:'O caminho até o título',
    desc:'Confira os resultados da fase eliminatória.'
  },
  {
    icon:'🇦🇷',
    title:'Argentina vice-campeã',
    desc:'A seleção argentina terminou a competição como vice-campeã.'
  }
];

// ==========================================
// RENDERIZAR GRUPOS
// ==========================================

function renderGroups() {
  const container = document.getElementById('groupsContainer');
  if (!container) return;

  container.innerHTML = groups.map(group => `
    <div class="group-card reveal">
      <div class="group-header">
        <h3>Grupo ${group.name}</h3>
        <span class="group-pot">4 seleções</span>
      </div>

      <div class="group-table">
        <div class="group-table-head">
          <span>Seleção</span>
          <span>Pts</span>
        </div>

        ${group.teams.map(team => `
          <div class="group-team ${team === 'Espanha' ? 'highlight-row' : ''}">
            <span class="name">
              <span class="flag">${getFlag(team)}</span>
              ${team}
              ${team === 'Espanha' ? '🏆' : ''}
            </span>
            <span class="pts">—</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// ==========================================
// RENDERIZAR MATA-MATA
// ==========================================

function renderBracket() {
  const container = document.getElementById('bracketContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="bracket-rounds">
      ${bracketRounds.map(round => `
        <div class="bracket-round">
          <h4>
            ${round.name}
            <span>(${round.matches.length} jogos)</span>
          </h4>

          ${round.matches.map(match => {
            const [team1,score1,team2,score2,winner,detail] = match;

            return `
              <div class="bracket-match ${round.name === 'Grande Final' ? 'final-match' : ''}">
                <div class="b-team ${winner === team1 ? 'winner' : ''}">
                  <span class="name">${getFlag(team1)} ${team1}</span>
                  <span class="score">${score1}</span>
                </div>

                <div class="vs">vs</div>

                <div class="b-team ${winner === team2 ? 'winner' : ''}">
                  <span class="name">${getFlag(team2)} ${team2}</span>
                  <span class="score">${score2}</span>
                </div>

                ${detail ? `<div class="bracket-pen">${detail}</div>` : ''}

                ${round.name === 'Grande Final'
                  ? '<div class="champion-stamp">🏆 ESPANHA CAMPEÃ</div>'
                  : ''}
              </div>
            `;
          }).join('')}
        </div>
      `).join('')}
    </div>
  `;
}

// ==========================================
// RENDERIZAR LISTA DE CONFRONTOS
// ==========================================

function renderMatchList() {
  const container = document.getElementById('matchList');
  if (!container) return;

  container.innerHTML = `
    <div class="match-grid">
      ${matchSchedule.map(match => `
        <div class="match-item reveal">
          <span class="m-date">${match.date}</span>

          <div class="m-teams">
            <span class="flag">${getFlag(match.t1)}</span>
            ${match.t1}

            <strong class="m-result">
              ${match.s1} - ${match.s2}
            </strong>

            <span class="flag">${getFlag(match.t2)}</span>
            ${match.t2}
          </div>

          <span class="m-status done">
            ${match.note}
          </span>
        </div>
      `).join('')}
    </div>
  `;
}

// ==========================================
// RENDERIZAR RANKING
// ==========================================

function renderRanking() {
  const container = document.getElementById('rankingContainer');
  if (!container) return;

  let data = [...ranking];

  if (activeConf !== 'GERAL') {
    data = data.filter(item => item.conf === activeConf);
  }

  if (rankingSearchTerm) {
    const query = rankingSearchTerm.toLowerCase();

    data = data.filter(item =>
      item.team.toLowerCase().includes(query) ||
      item.conf.toLowerCase().includes(query) ||
      (confNames[item.conf] || '').toLowerCase().includes(query)
    );
  }

  if (rankingSort === 'points') {
    data.sort((a,b) => {
      if (a.points === null && b.points === null) return a.pos - b.pos;
      if (a.points === null) return 1;
      if (b.points === null) return -1;
      return b.points - a.points;
    });
  } else {
    data.sort((a,b) => a.pos - b.pos);
  }

  container.innerHTML = `
    <table class="ranking-table">
      <thead>
        <tr>
          <th>Posição</th>
          <th>Seleção</th>
          <th>Confederação</th>
          <th>Pontos</th>
        </tr>
      </thead>

      <tbody>
        ${data.map(item => `
          <tr class="${item.pos <= 3 ? 'top3' : ''}"
              onclick="openModal('${item.team}')">

            <td class="pos-cell">${item.pos}º</td>

            <td>
              <div class="team-cell">
                <span class="flag">${getFlag(item.team)}</span>
                <span class="name">${item.team}</span>
              </div>
            </td>

            <td>
              <span class="conf-badge">${item.conf}</span>
            </td>

            <td class="pts-cell">
              ${item.points === null ? 'Não informado' : item.points}
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>

    <p class="ranking-footnote">
      Ranking resumido do projeto. As pontuações não foram informadas.
      Consulte a FIFA para conferir a classificação oficial atualizada.
    </p>
  `;
}

// ==========================================
// FILTROS E ORDENAÇÃO DO RANKING
// ==========================================

function setupRankingFilters() {
  const filters = document.getElementById('rankingFilters');
  const searchInput = document.getElementById('rankingSearch');

  if (filters) {
    filters.innerHTML = confs.map(conf => `
      <button
        class="${conf === 'GERAL' ? 'active' : ''}"
        data-conf="${conf}">
        ${conf === 'GERAL' ? '🌍 Geral' : conf}
      </button>
    `).join('');

    filters.addEventListener('click', event => {
      const button = event.target.closest('button[data-conf]');
      if (!button) return;

      activeConf = button.dataset.conf;

      filters.querySelectorAll('button').forEach(item => {
        item.classList.remove('active');
      });

      button.classList.add('active');
      renderRanking();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      rankingSearchTerm = searchInput.value.trim();
      renderRanking();
    });
  }

  document.querySelectorAll('.sort-btn').forEach(button => {
    button.addEventListener('click', () => {
      rankingSort = button.dataset.sort;

      document.querySelectorAll('.sort-btn').forEach(item => {
        item.classList.remove('active');
      });

      button.classList.add('active');
      renderRanking();
    });
  });
}

// ==========================================
// RENDERIZAR GALERIA
// ==========================================

function renderGallery() {
  const container = document.getElementById('galleryGrid');
  if (!container) return;

  container.innerHTML = galleryItems.map(item => `
    <div class="gallery-item reveal">
      <div class="gallery-bg">${item.icon}</div>

      <div class="gallery-info">
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
      </div>
    </div>
  `).join('');
}

// ==========================================
// LINHA DO TEMPO
// ==========================================

function renderTimeline() {
  const container = document.getElementById('timelineContainer');
  if (!container) return;

  container.innerHTML = worldCups.map(item => `
    <div class="timeline-item reveal">
      <div class="tl-content">
        <div class="tl-year">${item.year}</div>

        <div class="tl-title">
          ${getFlag(item.host)} ${item.host}
        </div>

        <div class="tl-desc">
          Campeão: ${getFlag(item.champion)} ${item.champion}
        </div>
      </div>

      <div class="tl-dot"></div>
    </div>
  `).join('');
}

// ==========================================
// CURIOSIDADES
// ==========================================

function renderCuriosities() {
  const container = document.getElementById('curiositiesContainer');
  if (!container) return;

  container.innerHTML = curiosities.map(item => `
    <div class="curiosity-card reveal">
      <div class="curiosity-icon">${item.icon}</div>
      <h4>${item.title}</h4>
      <p>${item.text}</p>
    </div>
  `).join('');
}

// ==========================================
// MODAL DAS SELEÇÕES
// ==========================================

function openModal(team) {
  const modal = document.getElementById('teamModal');
  const body = document.getElementById('modalBody');

  if (!modal || !body) return;

  const rankingItem = ranking.find(item => item.team === team);
  const group = groups.find(item => item.teams.includes(team));

  body.innerHTML = `
    <div style="text-align:center;margin-bottom:1rem">
      <div style="font-size:4rem">${getFlag(team)}</div>

      <h2>${team}</h2>

      ${rankingItem
        ? `<p>${rankingItem.pos}º no ranking exibido</p>`
        : ''}

      ${group
        ? `<p>Grupo ${group.name} · Copa do Mundo 2026</p>`
        : ''}

      ${team === 'Espanha'
        ? '<p class="modal-champion">🏆 Campeã no projeto</p>'
        : ''}
    </div>
  `;

  modal.classList.add('open');
}

function initModal() {
  const modal = document.getElementById('teamModal');
  const closeButton = document.getElementById('modalClose');

  if (!modal) return;

  if (closeButton) {
    closeButton.addEventListener('click', () => {
      modal.classList.remove('open');
    });
  }

  modal.addEventListener('click', event => {
    if (event.target === modal) {
      modal.classList.remove('open');
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      modal.classList.remove('open');
    }
  });
}

// ==========================================
// TEMA CLARO E ESCURO
// ==========================================

function initTheme() {
  const button = document.getElementById('themeToggle');
  if (!button) return;

  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme','light');
    button.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    document.documentElement.removeAttribute('data-theme');
    button.innerHTML = '<i class="fas fa-moon"></i>';
  }

  button.addEventListener('click', () => {
    const isLight =
      document.documentElement.getAttribute('data-theme') === 'light';

    if (isLight) {
      document.documentElement.removeAttribute('data-theme');
      button.innerHTML = '<i class="fas fa-moon"></i>';
      localStorage.setItem('theme','dark');
    } else {
      document.documentElement.setAttribute('data-theme','light');
      button.innerHTML = '<i class="fas fa-sun"></i>';
      localStorage.setItem('theme','light');
    }
  });
}

// ==========================================
// MENU DE NAVEGAÇÃO
// ==========================================

function initNavbar() {
  const header = document.getElementById('header');
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('navMenu');

  window.addEventListener('scroll', () => {
    if (header) {
      header.classList.toggle('scrolled', window.scrollY > 50);
    }
  });

  if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      menu.classList.toggle('open');
    });
  }

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (hamburger) hamburger.classList.remove('active');
      if (menu) menu.classList.remove('open');

      document.querySelectorAll('.nav-link').forEach(item => {
        item.classList.remove('active');
      });

      link.classList.add('active');
    });
  });

  if ('IntersectionObserver' in window) {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
        });

        const activeLink = document.querySelector(
          `.nav-link[href="#${entry.target.id}"]`
        );

        if (activeLink) activeLink.classList.add('active');
      });
    }, {
      rootMargin:'-50% 0px -50% 0px'
    });

    sections.forEach(section => observer.observe(section));
  }
}

// ==========================================
// BARRA DE PROGRESSO
// ==========================================

function initProgressBar() {
  const bar = document.getElementById('progressBar');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const progress = totalHeight > 0
      ? (window.scrollY / totalHeight) * 100
      : 0;

    bar.style.width = `${progress}%`;
  });
}

// ==========================================
// BOTÃO VOLTAR AO TOPO
// ==========================================

function initBackToTop() {
  const button = document.getElementById('backToTop');
  if (!button) return;

  window.addEventListener('scroll', () => {
    button.classList.toggle('show', window.scrollY > 500);
  });

  button.addEventListener('click', () => {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  });
}

// ==========================================
// TELA DE CARREGAMENTO
// ==========================================

function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;

  const hideLoader = () => {
    loader.classList.add('hidden');
  };

  if (document.readyState === 'complete') {
    hideLoader();
  } else {
    window.addEventListener('load', hideLoader, {once:true});
  }
}

// ==========================================
// ANIMAÇÕES AO ROLAR A PÁGINA
// ==========================================

function initScrollReveal() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(element => {
      element.classList.add('visible');
    });
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold:0.1
  });

  document.querySelectorAll('.reveal').forEach(element => {
    observer.observe(element);
  });
}

// ==========================================
// MENSAGEM DE CAMPEÃ
// ==========================================

function initCountdown() {
  const countdown = document.getElementById('countdown');
  if (!countdown) return;

  countdown.innerHTML = `
    <div class="champion-panel">
      <strong>🏆 Copa do Mundo 2026 encerrada</strong>
      <span>🇪🇸 Espanha — Campeã Mundial</span>
    </div>
  `;
}

// ==========================================
// ANO AUTOMÁTICO NO RODAPÉ
// ==========================================

function initYear() {
  const year = document.getElementById('year');

  if (year) {
    year.textContent = new Date().getFullYear();
  }
}

// ==========================================
// INICIALIZAÇÃO
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initTheme();
  initNavbar();
  initProgressBar();
  initBackToTop();
  initModal();
  initCountdown();
  initYear();

  renderGroups();
  renderBracket();
  renderMatchList();

  setupRankingFilters();
  renderRanking();

  renderGallery();
  renderTimeline();
  renderCuriosities();

  initScrollReveal();
});