// ==========================================
// COPA DO MUNDO 2026 — SCRIPT PRINCIPAL
// ==========================================

// BANDEIRAS
const countryCodes = {
  'Argentina':'ARG','Brasil':'BRA','Colômbia':'COL','Equador':'ECU',
  'Paraguai':'PAR','Uruguai':'URU','Canadá':'CAN',
  'Estados Unidos':'USA','México':'MEX','Curaçao':'CUW',
  'Haiti':'HAI','Panamá':'PAN','Arábia Saudita':'KSA',
  'Austrália':'AUS','Catar':'QAT','Coreia do Sul':'KOR',
  'Irã':'IRN','Iraque':'IRQ','Japão':'JPN','Jordânia':'JOR',
  'Uzbequistão':'UZB','África do Sul':'RSA','Argélia':'ALG',
  'Cabo Verde':'CPV','Costa do Marfim':'CIV','Egito':'EGY',
  'Gana':'GHA','Marrocos':'MAR','RD Congo':'COD',
  'República Democrática do Congo':'COD','Senegal':'SEN',
  'Tunísia':'TUN','Nova Zelândia':'NZL','Alemanha':'GER',
  'Áustria':'AUT','Bélgica':'BEL',
  'Bósnia e Herzegovina':'BIH','Bósnia':'BIH',
  'Croácia':'CRO','Escócia':'SCO','Espanha':'ESP',
  'França':'FRA','Holanda':'NED','Inglaterra':'ENG',
  'Noruega':'NOR','Portugal':'POR',
  'República Tcheca':'CZE','Suécia':'SWE',
  'Suíça':'SUI','Turquia':'TUR','Itália':'ITA',
  'Dinamarca':'DEN','Ucrânia':'UKR','Sérvia':'SRB',
  'Camarões':'CMR',
  'Chile':'CHI','Alemanha Ocidental':'FRG','Rússia':'RUS',
  'Coreia do Sul/Japão':'KOR/JPN',
  'Canadá, México e Estados Unidos':'CAN/MEX/USA'
};

const getCode = team => countryCodes[team] || '';

// Todas as seleções aparecem pela sigla de 3 letras (ex.: BRA, ESP, ENG).
const flagHtml = team => {
  const code = getCode(team);
  return code ? `<span class="flag-code">${code}</span>` : '';
};

// ==========================================
// GRUPOS
// ==========================================

// Classificação final da fase de grupos da Copa do Mundo 2026.
// Fonte: FIFA / Wikipedia (tabelas oficiais dos grupos).
// w = vitórias, d = empates, l = derrotas, gf = gols feitos, ga = gols sofridos.
const groupTeam = (name, w, d, l, gf, ga) => ({
  name,
  pld: w + d + l,
  w,
  d,
  l,
  gf,
  ga,
  gd: gf - ga,
  pts: w * 3 + d
});

const groups = [
  { name:'A', teams:[
    groupTeam('México',3,0,0,6,0),
    groupTeam('África do Sul',1,1,1,2,3),
    groupTeam('Coreia do Sul',1,0,2,2,3),
    groupTeam('República Tcheca',0,1,2,2,6)
  ]},
  { name:'B', teams:[
    groupTeam('Suíça',2,1,0,7,3),
    groupTeam('Canadá',1,1,1,8,3),
    groupTeam('Bósnia e Herzegovina',1,1,1,5,6),
    groupTeam('Catar',0,1,2,2,10)
  ]},
  { name:'C', teams:[
    groupTeam('Brasil',2,1,0,7,1),
    groupTeam('Marrocos',2,1,0,6,3),
    groupTeam('Escócia',1,0,2,1,4),
    groupTeam('Haiti',0,0,3,2,8)
  ]},
  { name:'D', teams:[
    groupTeam('Estados Unidos',2,0,1,8,4),
    groupTeam('Austrália',1,1,1,2,2),
    groupTeam('Paraguai',1,1,1,2,4),
    groupTeam('Turquia',1,0,2,3,5)
  ]},
  { name:'E', teams:[
    groupTeam('Alemanha',2,0,1,10,4),
    groupTeam('Costa do Marfim',2,0,1,4,2),
    groupTeam('Equador',1,1,1,2,2),
    groupTeam('Curaçao',0,1,2,1,9)
  ]},
  { name:'F', teams:[
    groupTeam('Holanda',2,1,0,10,4),
    groupTeam('Japão',1,2,0,7,3),
    groupTeam('Suécia',1,1,1,7,7),
    groupTeam('Tunísia',0,0,3,2,12)
  ]},
  { name:'G', teams:[
    groupTeam('Bélgica',1,2,0,6,2),
    groupTeam('Egito',1,2,0,5,3),
    groupTeam('Irã',0,3,0,3,3),
    groupTeam('Nova Zelândia',0,1,2,4,10)
  ]},
  { name:'H', teams:[
    groupTeam('Espanha',2,1,0,5,0),
    groupTeam('Cabo Verde',0,3,0,2,2),
    groupTeam('Uruguai',0,2,1,3,4),
    groupTeam('Arábia Saudita',0,2,1,1,5)
  ]},
  { name:'I', teams:[
    groupTeam('França',3,0,0,10,2),
    groupTeam('Noruega',2,0,1,8,7),
    groupTeam('Senegal',1,0,2,8,6),
    groupTeam('Iraque',0,0,3,1,12)
  ]},
  { name:'J', teams:[
    groupTeam('Argentina',3,0,0,8,1),
    groupTeam('Áustria',1,1,1,6,6),
    groupTeam('Argélia',1,1,1,5,7),
    groupTeam('Jordânia',0,0,3,3,8)
  ]},
  { name:'K', teams:[
    groupTeam('Colômbia',2,1,0,4,1),
    groupTeam('Portugal',1,2,0,6,1),
    groupTeam('RD Congo',1,1,1,4,3),
    groupTeam('Uzbequistão',0,0,3,2,11)
  ]},
  { name:'L', teams:[
    groupTeam('Inglaterra',2,1,0,6,2),
    groupTeam('Croácia',2,0,1,5,5),
    groupTeam('Gana',1,1,1,2,2),
    groupTeam('Panamá',0,0,3,0,4)
  ]}
];

// ==========================================
// RANKING FIFA
// Pontuação oficial do ranking masculino de 7 de outubro de 2026.
// ==========================================

const ranking = [
  {pos:1, team:'Espanha', conf:'UEFA', points:2011.57},
  {pos:2, team:'Argentina', conf:'CONMEBOL', points:1972.80},
  {pos:3, team:'França', conf:'UEFA', points:1958.86},
  {pos:4, team:'Inglaterra', conf:'UEFA', points:1925.59},
  {pos:5, team:'Portugal', conf:'UEFA', points:1807.69},
  {pos:6, team:'Brasil', conf:'CONMEBOL', points:1806.51},
  {pos:7, team:'Marrocos', conf:'CAF', points:1805.34}
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
    icon:'👟',
    title:'Artilheiro da Copa',
    desc:'Mbappé terminou a competição como artilheiro, com 22 gols.'
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

// Os 8 melhores terceiros colocados também avançam para o mata-mata.
// Critérios: pontos, saldo de gols e gols marcados.
function getBestThirds() {
  const thirds = groups
    .map(group => ({ group: group.name, team: group.teams[2] }))
    .filter(item => item.team);

  thirds.sort((a, b) =>
    b.team.pts - a.team.pts ||
    b.team.gd - a.team.gd ||
    b.team.gf - a.team.gf ||
    a.group.localeCompare(b.group)
  );

  return new Set(thirds.slice(0, 8).map(item => item.team.name));
}

function renderGroups() {
  const container = document.getElementById('groupsContainer');
  if (!container) return;

  const bestThirds = getBestThirds();

  container.innerHTML = groups.map(group => `
    <div class="group-card reveal">
      <div class="group-header">
        <h3>Grupo ${group.name}</h3>
        <span class="group-pot">4 seleções</span>
      </div>

      <div class="group-table">
        <div class="group-table-head">
          <span>#</span>
          <span>Seleção</span>
          <span>Pts</span>
        </div>

        ${group.teams.map((team, index) => {
          const isThird = index === 2 && bestThirds.has(team.name);
          const classes = [
            'group-team',
            index < 2 ? 'qualified' : '',
            isThird ? 'third-qualified' : '',
            team.name === 'Espanha' ? 'highlight-row' : ''
          ].filter(Boolean).join(' ');

          return `
            <div class="${classes}"
                 title="${team.pld} jogos · ${team.w}V ${team.d}E ${team.l}D · ${team.gf} GP, ${team.ga} GC · SG ${team.gd > 0 ? '+' : ''}${team.gd}${isThird ? ' · classificado entre os 8 melhores terceiros' : ''}">
              <span class="pos">${index + 1}</span>
              <span class="name">
                <span class="flag">${flagHtml(team.name)}</span>
                ${team.name}
                ${team.name === 'Espanha' ? '🏆' : ''}
              </span>
              <span class="pts">${team.pts}</span>
            </div>
          `;
        }).join('')}
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
                  <span class="name">${flagHtml(team1)} ${team1}</span>
                  <span class="score">${score1}</span>
                </div>

                <div class="vs">vs</div>

                <div class="b-team ${winner === team2 ? 'winner' : ''}">
                  <span class="name">${flagHtml(team2)} ${team2}</span>
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
            <span class="flag">${flagHtml(match.t1)}</span>
            ${match.t1}

            <strong class="m-result">
              ${match.s1} - ${match.s2}
            </strong>

            <span class="flag">${flagHtml(match.t2)}</span>
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
                <span class="flag">${flagHtml(item.team)}</span>
                <span class="name">${item.team}</span>
              </div>
            </td>

            <td>
              <span class="conf-badge">${item.conf}</span>
            </td>

            <td class="pts-cell">
              ${item.points === null ? 'Não informado' : item.points.toFixed(2)}
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>

    <p class="ranking-footnote">
      Ranking Mundial FIFA de 7 de outubro de 2026 · Fonte: FIFA.
      Clique em uma seleção para ver os detalhes.
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
          ${flagHtml(item.host)} ${item.host}
        </div>

        <div class="tl-desc">
          Campeão: ${flagHtml(item.champion)} ${item.champion}
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
  const group = groups.find(item => item.teams.some(t => t.name === team));
  const groupTeam = group ? group.teams.find(t => t.name === team) : null;

  body.innerHTML = `
    <div style="text-align:center;margin-bottom:1rem">
      <div style="font-size:4rem">${flagHtml(team)}</div>

      <h2>${team}</h2>

      ${rankingItem
        ? `<p>${rankingItem.pos}º no ranking exibido</p>`
        : ''}

      ${group
        ? `<p>Grupo ${group.name} · Copa do Mundo 2026</p>`
        : ''}

      ${groupTeam
        ? `<p>${groupTeam.pts} pts na fase de grupos · ${groupTeam.w}V ${groupTeam.d}E ${groupTeam.l}D</p>`
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
