const flags = {
  'Argentina':'🇦🇷','Brasil':'🇧🇷','Colômbia':'🇨🇴','Equador':'🇪🇨','Paraguai':'🇵🇾','Uruguai':'🇺🇾',
  'Canadá':'🇨🇦','Estados Unidos':'🇺🇸','México':'🇲🇽','Curaçao':'🇨🇼','Haiti':'🇭🇹','Panamá':'🇵🇦',
  'Arábia Saudita':'🇸🇦','Austrália':'🇦🇺','Catar':'🇶🇦','Coreia do Sul':'🇰🇷','Irã':'🇮🇷','Iraque':'🇮🇶',
  'Japão':'🇯🇵','Jordânia':'🇯🇴','Uzbequistão':'🇺🇿','África do Sul':'🇿🇦','Argélia':'🇩🇿','Cabo Verde':'🇨🇻',
  'Costa do Marfim':'🇨🇮','Egito':'🇪🇬','Gana':'🇬🇭','Marrocos':'🇲🇦','RD Congo':'🇨🇩','Senegal':'🇸🇳',
  'Tunísia':'🇹🇳','Nova Zelândia':'🇳🇿','Alemanha':'🇩🇪','Áustria':'🇦🇹','Bélgica':'🇧🇪','Bósnia e Herzegovina':'🇧🇦',
  'Croácia':'🇭🇷','Escócia':'🏴󠁧󠁢󠁳󠁣󠁴󠁿','Espanha':'🇪🇸','França':'🇫🇷','Holanda':'🇳🇱','Inglaterra':'🏴󠁧󠁢󠁥󠁮󠁧󠁿',
  'Noruega':'🇳🇴','Portugal':'🇵🇹','República Tcheca':'🇨🇿','Suécia':'🇸🇪','Suíça':'🇨🇭','Turquia':'🇹🇷',
  'Itália':'🇮🇹','Dinamarca':'🇩🇰','Ucrânia':'🇺🇦','Sérvia':'🇷🇸','Camarões':'🇨🇲'
};
const getFlag = t => flags[t] || '🏳️';

const groups = [
  { name: 'A', teams: [
    { name:'México', pts:9, j:3, v:3, e:0, d:0, gp:6, gc:0, sg:6 },
    { name:'África do Sul', pts:4, j:3, v:1, e:1, d:1, gp:2, gc:3, sg:-1 },
    { name:'Coreia do Sul', pts:3, j:3, v:1, e:0, d:2, gp:2, gc:3, sg:-1 },
    { name:'República Tcheca', pts:1, j:3, v:0, e:1, d:2, gp:2, gc:6, sg:-4 }
  ]},
  { name: 'B', teams: [
    { name:'Suíça', pts:7, j:3, v:2, e:1, d:0, gp:7, gc:3, sg:4 },
    { name:'Canadá', pts:4, j:3, v:1, e:1, d:1, gp:8, gc:3, sg:5 },
    { name:'Bósnia e Herzegovina', pts:4, j:3, v:1, e:1, d:1, gp:5, gc:6, sg:-1 },
    { name:'Catar', pts:1, j:3, v:0, e:1, d:2, gp:2, gc:10, sg:-8 }
  ]},
  { name: 'C', teams: [
    { name:'Brasil', pts:7, j:3, v:2, e:1, d:0, gp:7, gc:1, sg:6 },
    { name:'Marrocos', pts:7, j:3, v:2, e:1, d:0, gp:6, gc:3, sg:3 },
    { name:'Escócia', pts:3, j:3, v:1, e:0, d:2, gp:1, gc:4, sg:-3 },
    { name:'Haiti', pts:0, j:3, v:0, e:0, d:3, gp:2, gc:8, sg:-6 }
  ]},
  { name: 'D', teams: [
    { name:'Estados Unidos', pts:6, j:3, v:2, e:0, d:1, gp:8, gc:4, sg:4 },
    { name:'Austrália', pts:4, j:3, v:1, e:1, d:1, gp:2, gc:2, sg:0 },
    { name:'Paraguai', pts:4, j:3, v:1, e:1, d:1, gp:2, gc:4, sg:-2 },
    { name:'Turquia', pts:3, j:3, v:1, e:0, d:2, gp:3, gc:5, sg:-2 }
  ]},
  { name: 'E', teams: [
    { name:'Alemanha', pts:6, j:3, v:2, e:0, d:1, gp:10, gc:4, sg:6 },
    { name:'Costa do Marfim', pts:6, j:3, v:2, e:0, d:1, gp:4, gc:2, sg:2 },
    { name:'Equador', pts:4, j:3, v:1, e:1, d:1, gp:2, gc:2, sg:0 },
    { name:'Curaçao', pts:1, j:3, v:0, e:1, d:2, gp:1, gc:9, sg:-8 }
  ]},
  { name: 'F', teams: [
    { name:'Holanda', pts:7, j:3, v:2, e:1, d:0, gp:10, gc:4, sg:6 },
    { name:'Japão', pts:5, j:3, v:1, e:2, d:0, gp:7, gc:3, sg:4 },
    { name:'Suécia', pts:4, j:3, v:1, e:1, d:1, gp:7, gc:7, sg:0 },
    { name:'Tunísia', pts:0, j:3, v:0, e:0, d:3, gp:2, gc:12, sg:-10 }
  ]},
  { name: 'G', teams: [
    { name:'Bélgica', pts:5, j:3, v:1, e:2, d:0, gp:6, gc:2, sg:4 },
    { name:'Egito', pts:5, j:3, v:1, e:2, d:0, gp:5, gc:3, sg:2 },
    { name:'Irã', pts:3, j:3, v:0, e:3, d:0, gp:3, gc:3, sg:0 },
    { name:'Nova Zelândia', pts:1, j:3, v:0, e:1, d:2, gp:4, gc:10, sg:-6 }
  ]},
  { name: 'H', teams: [
    { name:'Espanha', pts:7, j:3, v:2, e:1, d:0, gp:5, gc:0, sg:5 },
    { name:'Cabo Verde', pts:3, j:3, v:0, e:3, d:0, gp:2, gc:2, sg:0 },
    { name:'Uruguai', pts:2, j:3, v:0, e:2, d:1, gp:3, gc:4, sg:-1 },
    { name:'Arábia Saudita', pts:2, j:3, v:0, e:2, d:1, gp:1, gc:5, sg:-4 }
  ]},
  { name: 'I', teams: [
    { name:'França', pts:9, j:3, v:3, e:0, d:0, gp:10, gc:2, sg:8 },
    { name:'Noruega', pts:6, j:3, v:2, e:0, d:1, gp:8, gc:7, sg:1 },
    { name:'Senegal', pts:3, j:3, v:1, e:0, d:2, gp:8, gc:6, sg:2 },
    { name:'Iraque', pts:0, j:3, v:0, e:0, d:3, gp:1, gc:12, sg:-11 }
  ]},
  { name: 'J', teams: [
    { name:'Argentina', pts:9, j:3, v:3, e:0, d:0, gp:8, gc:1, sg:7 },
    { name:'Áustria', pts:4, j:3, v:1, e:1, d:1, gp:6, gc:6, sg:0 },
    { name:'Argélia', pts:4, j:3, v:1, e:1, d:1, gp:5, gc:7, sg:-2 },
    { name:'Jordânia', pts:0, j:3, v:0, e:0, d:3, gp:3, gc:8, sg:-5 }
  ]},
  { name: 'K', teams: [
    { name:'Colômbia', pts:7, j:3, v:2, e:1, d:0, gp:4, gc:1, sg:3 },
    { name:'Portugal', pts:5, j:3, v:1, e:2, d:0, gp:6, gc:1, sg:5 },
    { name:'RD Congo', pts:4, j:3, v:1, e:1, d:1, gp:4, gc:3, sg:1 },
    { name:'Uzbequistão', pts:0, j:3, v:0, e:0, d:3, gp:2, gc:11, sg:-9 }
  ]},
  { name: 'L', teams: [
    { name:'Inglaterra', pts:7, j:3, v:2, e:1, d:0, gp:6, gc:2, sg:4 },
    { name:'Croácia', pts:6, j:3, v:2, e:0, d:1, gp:5, gc:5, sg:0 },
    { name:'Gana', pts:4, j:3, v:1, e:1, d:1, gp:2, gc:2, sg:0 },
    { name:'Panamá', pts:0, j:3, v:0, e:0, d:3, gp:0, gc:4, sg:-4 }
  ]}
];

const ranking = [
  { pos:1, team:'Argentina', points:1877.27, conf:'CONMEBOL' },
  { pos:2, team:'Espanha', points:1874.71, conf:'UEFA' },
  { pos:3, team:'França', points:1870.70, conf:'UEFA' },
  { pos:4, team:'Inglaterra', points:1828.02, conf:'UEFA' },
  { pos:5, team:'Portugal', points:1767.85, conf:'UEFA' },
  { pos:6, team:'Brasil', points:1765.86, conf:'CONMEBOL' },
  { pos:7, team:'Marrocos', points:1755.10, conf:'CAF' },
  { pos:8, team:'Holanda', points:1753.57, conf:'UEFA' },
  { pos:9, team:'Bélgica', points:1742.24, conf:'UEFA' },
  { pos:10, team:'Alemanha', points:1735.77, conf:'UEFA' },
  { pos:11, team:'Croácia', points:1714.87, conf:'UEFA' },
  { pos:12, team:'Itália', points:1704.73, conf:'UEFA' },
  { pos:13, team:'Colômbia', points:1698.35, conf:'CONMEBOL' },
  { pos:14, team:'México', points:1687.48, conf:'CONCACAF' },
  { pos:15, team:'Senegal', points:1665.20, conf:'CAF' },
  { pos:16, team:'Uruguai', points:1648.90, conf:'CONMEBOL' },
  { pos:17, team:'Estados Unidos', points:1638.45, conf:'CONCACAF' },
  { pos:18, team:'Japão', points:1627.80, conf:'AFC' },
  { pos:19, team:'Suíça', points:1615.60, conf:'UEFA' },
  { pos:20, team:'Irã', points:1608.30, conf:'AFC' },
  { pos:21, team:'Dinamarca', points:1595.40, conf:'UEFA' },
  { pos:22, team:'Áustria', points:1582.70, conf:'UEFA' },
  { pos:23, team:'Suécia', points:1576.50, conf:'UEFA' },
  { pos:24, team:'Ucrânia', points:1568.20, conf:'UEFA' },
  { pos:25, team:'Coreia do Sul', points:1562.10, conf:'AFC' },
  { pos:26, team:'Austrália', points:1555.80, conf:'AFC' },
  { pos:27, team:'Egito', points:1548.90, conf:'CAF' },
  { pos:28, team:'Turquia', points:1542.30, conf:'UEFA' },
  { pos:29, team:'Noruega', points:1537.60, conf:'UEFA' },
  { pos:30, team:'Escócia', points:1528.40, conf:'UEFA' },
  { pos:31, team:'Equador', points:1522.10, conf:'CONMEBOL' },
  { pos:32, team:'Costa do Marfim', points:1515.70, conf:'CAF' },
  { pos:33, team:'Argélia', points:1508.50, conf:'CAF' },
  { pos:34, team:'Gana', points:1500.20, conf:'CAF' },
  { pos:35, team:'Tunísia', points:1492.80, conf:'CAF' },
  { pos:36, team:'Paraguai', points:1486.40, conf:'CONMEBOL' },
  { pos:37, team:'Canadá', points:1478.90, conf:'CONCACAF' },
  { pos:38, team:'África do Sul', points:1472.30, conf:'CAF' },
  { pos:39, team:'Bósnia e Herzegovina', points:1465.70, conf:'UEFA' },
  { pos:40, team:'Arábia Saudita', points:1458.40, conf:'AFC' },
  { pos:41, team:'Catar', points:1452.10, conf:'AFC' },
  { pos:42, team:'República Tcheca', points:1446.80, conf:'UEFA' },
  { pos:43, team:'Uzbequistão', points:1438.50, conf:'AFC' },
  { pos:44, team:'Iraque', points:1432.20, conf:'AFC' },
  { pos:45, team:'Jordânia', points:1425.40, conf:'AFC' },
  { pos:46, team:'Panamá', points:1418.70, conf:'CONCACAF' },
  { pos:47, team:'Cabo Verde', points:1412.30, conf:'CAF' },
  { pos:48, team:'Nova Zelândia', points:1405.80, conf:'OFC' },
  { pos:49, team:'Haiti', points:1398.40, conf:'CONCACAF' },
  { pos:50, team:'Curaçao', points:1385.60, conf:'CONCACAF' },
  { pos:51, team:'RD Congo', points:1372.90, conf:'CAF' }
];

const bracketRounds = [
  {
    name: '32-avos de Final',
    matches: [
      ['África do Sul', 0, 'Canadá', 1, 'Canadá'],
      ['Brasil', 2, 'Japão', 1, 'Brasil'],
      ['Alemanha', 1, 'Paraguai', 1, 'Paraguai'],
      ['Holanda', 1, 'Marrocos', 1, 'Marrocos'],
      ['Costa do Marfim', null, 'Noruega', null],
      ['França', null, 'Suécia', null],
      ['México', null, 'Equador', null],
      ['Inglaterra', null, 'RD Congo', null],
      ['Bélgica', null, 'Senegal', null],
      ['Estados Unidos', null, 'Bósnia e Herzegovina', null],
      ['Espanha', null, 'Áustria', null],
      ['Portugal', null, 'Croácia', null],
      ['Suíça', null, 'Argélia', null],
      ['Austrália', null, 'Egito', null],
      ['Argentina', null, 'Cabo Verde', null],
      ['Colômbia', null, 'Gana', null]
    ]
  },
  {
    name: 'Oitavas de Final',
    matches: [
      ['Canadá', null], ['Brasil', null], ['Paraguai', null], ['Marrocos', null],
      [null, null], [null, null], [null, null], [null, null]
    ]
  },
  { name: 'Quartas de Final', matches: [[null,null],[null,null],[null,null],[null,null]] },
  { name: 'Semifinais', matches: [[null,null],[null,null]] },
  { name: 'Final', matches: [[null,null]] }
];

const matchSchedule = [
  { date:'28 jun · Los Angeles', t1:'África do Sul', s1:0, t2:'Canadá', s2:1, done:true },
  { date:'29 jun · Houston', t1:'Brasil', s1:2, t2:'Japão', s2:1, done:true },
  { date:'29 jun · Boston', t1:'Alemanha', s1:1, t2:'Paraguai', s2:1, done:true, pen:'3-4' },
  { date:'29 jun · Monterrey', t1:'Holanda', s1:1, t2:'Marrocos', s2:1, done:true, pen:'2-3' },
  { date:'30 jun · Dallas', t1:'Costa do Marfim', s1:null, t2:'Noruega', s2:null, done:false },
  { date:'30 jun · Cidade do México', t1:'México', s1:null, t2:'Equador', s2:null, done:false },
  { date:'30 jun · Kansas City', t1:'França', s1:null, t2:'Suécia', s2:null, done:false },
  { date:'1 jul · Santa Clara', t1:'Estados Unidos', s1:null, t2:'Bósnia e Herzegovina', s2:null, done:false },
  { date:'1 jul · Seattle', t1:'Bélgica', s1:null, t2:'Senegal', s2:null, done:false },
  { date:'1 jul · Atlanta', t1:'Inglaterra', s1:null, t2:'RD Congo', s2:null, done:false },
  { date:'2 jul · Los Angeles', t1:'Espanha', s1:null, t2:'Áustria', s2:null, done:false },
  { date:'2 jul · Toronto', t1:'Portugal', s1:null, t2:'Croácia', s2:null, done:false },
  { date:'2 jul · Vancouver', t1:'Suíça', s1:null, t2:'Argélia', s2:null, done:false },
  { date:'3 jul · Dallas', t1:'Austrália', s1:null, t2:'Egito', s2:null, done:false },
  { date:'3 jul · Miami', t1:'Argentina', s1:null, t2:'Cabo Verde', s2:null, done:false },
  { date:'3 jul · Boston', t1:'Colômbia', s1:null, t2:'Gana', s2:null, done:false }
];

const confColors = { 'UEFA':'badge-uefa','CONMEBOL':'badge-conmebol','CAF':'badge-caf','AFC':'badge-afc','CONCACAF':'badge-concacaf','OFC':'badge-ofc' };
const confNames = { 'UEFA':'Europa','CONMEBOL':'América do Sul','CAF':'África','AFC':'Ásia','CONCACAF':'América do Norte/Central','OFC':'Oceania' };
const confs = ['GERAL','UEFA','CONMEBOL','CAF','AFC','CONCACAF','OFC'];

const worldCups = [
  { year:1930, host:'Uruguai', champion:'Uruguai', flag:'🇺🇾' },
  { year:1934, host:'Itália', champion:'Itália', flag:'🇮🇹' },
  { year:1938, host:'França', champion:'Itália', flag:'🇮🇹' },
  { year:1950, host:'Brasil', champion:'Uruguai', flag:'🇺🇾' },
  { year:1954, host:'Suíça', champion:'Alemanha Ocidental', flag:'🇩🇪' },
  { year:1958, host:'Suécia', champion:'Brasil', flag:'🇧🇷' },
  { year:1962, host:'Chile', champion:'Brasil', flag:'🇧🇷' },
  { year:1966, host:'Inglaterra', champion:'Inglaterra', flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
  { year:1970, host:'México', champion:'Brasil', flag:'🇧🇷' },
  { year:1974, host:'Alemanha Ocidental', champion:'Alemanha Ocidental', flag:'🇩🇪' },
  { year:1978, host:'Argentina', champion:'Argentina', flag:'🇦🇷' },
  { year:1982, host:'Espanha', champion:'Itália', flag:'🇮🇹' },
  { year:1986, host:'México', champion:'Argentina', flag:'🇦🇷' },
  { year:1990, host:'Itália', champion:'Alemanha Ocidental', flag:'🇩🇪' },
  { year:1994, host:'Estados Unidos', champion:'Brasil', flag:'🇧🇷' },
  { year:1998, host:'França', champion:'França', flag:'🇫🇷' },
  { year:2002, host:'Coreia do Sul/Japão', champion:'Brasil', flag:'🇧🇷' },
  { year:2006, host:'Alemanha', champion:'Itália', flag:'🇮🇹' },
  { year:2010, host:'África do Sul', champion:'Espanha', flag:'🇪🇸' },
  { year:2014, host:'Brasil', champion:'Alemanha', flag:'🇩🇪' },
  { year:2018, host:'Rússia', champion:'França', flag:'🇫🇷' },
  { year:2022, host:'Catar', champion:'Argentina', flag:'🇦🇷' },
  { year:2026, host:'EUA/México/Canadá', champion:'—', flag:'🏆' }
];

const curiosities = [
  { icon:'🏆', title:'Brasil é o maior campeão', text:'Com 5 títulos mundiais (1958, 1962, 1970, 1994, 2002), o Brasil é a seleção mais vitoriosa da história da Copa.' },
  { icon:'🌍', title:'Único pentacampeão', text:'O Brasil é o único país que participou de todas as edições da Copa do Mundo desde 1930.' },
  { icon:'⚽', title:'Maior artilheiro', text:'Miroslav Klose (Alemanha) é o maior artilheiro da história das Copas, com 16 gols em 4 edições.' },
  { icon:'🇦🇷', title:'Atual campeão', text:'A Argentina conquistou seu terceiro título em 2022, vencendo a França nos pênaltis após uma final histórica por 3-3.' },
  { icon:'🇺🇾', title:'Primeira edição', text:'A primeira Copa do Mundo foi em 1930, no Uruguai, com 13 seleções participantes. O Uruguai foi campeão.' },
  { icon:'🇫🇷', title:'Maior goleada', text:'A maior goleada da história das Copas foi Hungria 9-0 Coreia do Sul (1954) e Iugoslávia 9-0 Zaire (1974).' }
];

const galleryItems = [
  { icon:'🏆', title:'Troféu da Copa', desc:'O troféu original, Jules Rimet, foi substituído em 1974.' },
  { icon:'🇧🇷', title:'Brasil 2002', desc:'Pentacampeão com vitória sobre a Alemanha por 2-0.' },
  { icon:'🇦🇷', title:'Argentina 2022', desc:'Messi levanta a taça no Catar após final histórica.' },
  { icon:'🇫🇷', title:'França 1998 e 2018', desc:'Bicampeã mundial em casa e na Rússia.' },
  { icon:'⚽', title:'Evolução da bola', desc:'Da Tiento ao Al Rihla, as bolas evoluíram muito.' },
  { icon:'🌎', title:'Expansão 2026', desc:'48 seleções pela primeira vez na história do torneio.' },
  { icon:'🇩🇪', title:'Alemanha 2014', desc:'Tetracampeã com vitória sobre a Argentina na final.' },
  { icon:'🏟️', title:'Estádios 2026', desc:'16 estádios em 3 países sediarão o Mundial.' }
];

const confBadgeClass = {
  'UEFA':'#1a3a5c;color:#58a6ff',
  'CONMEBOL':'#1a3d2e;color:#3fb950',
  'CAF':'#3d1a1a;color:#f85149',
  'AFC':'#2d1a3d;color:#bc8cff',
  'CONCACAF':'#2d2d1a;color:#f5a623',
  'OFC':'#1a2d2d;color:#56d4dd'
};

function renderGroups() {
  const c = document.getElementById('groupsContainer');
  if (!c) return;
  c.innerHTML = groups.map(g => `
    <div class="group-card reveal">
      <div class="group-header">
        <h3><span class="flag">${getFlag(g.teams[0].name)}</span> Grupo ${g.name}</h3>
        <span class="group-pot">4 seleções</span>
      </div>
      <table class="group-table">
        <thead><tr>
          <th>#</th><th>Seleção</th><th>PJ</th><th>V</th><th>E</th><th>D</th><th>GP</th><th>GC</th><th>SG</th><th>Pts</th>
        </tr></thead>
        <tbody>
          ${g.teams.map((t, i) => `
            <tr class="${i < 2 ? 'highlight-row' : ''}">
              <td class="num">${i+1}</td>
              <td><div class="team-cell"><span class="flag">${getFlag(t.name)}</span><span class="name">${t.name}</span></div></td>
              <td class="num">${t.j}</td><td class="num">${t.v}</td><td class="num">${t.e}</td><td class="num">${t.d}</td>
              <td class="num">${t.gp}</td><td class="num">${t.gc}</td><td class="num">${t.sg>0?'+':''}${t.sg}</td>
              <td class="pts">${t.pts}</td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>
  `).join('');
}

function renderBracket() {
  const c = document.getElementById('bracketContainer');
  if (!c) return;
  c.innerHTML = '<div class="bracket-rounds">' +
    bracketRounds.map(r => `
      <div class="bracket-round">
        <h4>${r.name} <span>(${r.matches.length} jogos)</span></h4>
        ${r.matches.map(m => {
          const [t1, s1, t2, s2, winner] = m;
          const played = s1 !== null && s2 !== null;
          const isDraw = played && s1 === s2;
          const show1 = t1 && t2;
          return `<div class="bracket-match">
            <div class="b-team ${winner === t1 ? 'winner' : ''}">
              <span class="name">${t1 ? getFlag(t1)+' '+t1 : 'A definir'}</span>
              <span class="score">${s1 !== null ? s1 : ''}</span>
            </div>
            ${show1 ? '<div class="vs">vs</div>' : ''}
            <div class="b-team ${winner === t2 ? 'winner' : ''}">
              <span class="name">${t2 ? getFlag(t2)+' '+t2 : 'A definir'}</span>
              <span class="score">${s2 !== null ? s2 : ''}</span>
            </div>
            ${isDraw && winner ? '<div class="bracket-pen">'+getFlag(winner)+' '+winner+' vence nos pênaltis</div>' : ''}
          </div>`;
        }).join('')}
      </div>
    `).join('') + '</div>';
}

function renderMatchList() {
  const c = document.getElementById('matchList');
  if (!c) return;
  c.innerHTML = '<div class="match-grid">' +
    matchSchedule.map(m => {
      const result = m.done && m.s1 !== null && m.s2 !== null
        ? (m.pen ? m.s1+'-'+m.s2+' ('+m.pen+')' : m.s1+'-'+m.s2)
        : 'vs';
      const status = m.done
        ? `<span class="m-status done">✅ Encerrado</span>`
        : `<span class="m-status">⏳ Previsto</span>`;
      const score = m.done ? `<span class="m-result">${result}</span>` : '';
      return `<div class="match-item reveal">
        <span class="m-date">${m.date}</span>
        <div class="m-teams">
          <span class="flag">${getFlag(m.t1)}</span> ${m.t1}
          <span style="color:var(--text-muted);margin:0 0.3rem;font-weight:700">${m.done ? (m.s1 !== null ? m.s1 : '?') : 'vs'}</span>
          <span class="flag">${getFlag(m.t2)}</span> ${m.t2}
        </div>
        ${status}
      </div>`;
    }).join('') + '</div>';
}

let currentSort = 'pos';
function renderRanking(filter = 'GERAL', search = '') {
  const c = document.getElementById('rankingContainer');
  if (!c) return;
  let data = [...ranking];
  if (filter !== 'GERAL') data = data.filter(r => r.conf === filter);
  if (search) {
    const q = search.toLowerCase();
    data = data.filter(r => r.team.toLowerCase().includes(q) || r.conf.toLowerCase().includes(q));
  }
  if (currentSort === 'points') data.sort((a, b) => b.points - a.points);
  else data.sort((a, b) => a.pos - b.pos);

  const isConf = filter !== 'GERAL';
  const html = [];
  if (isConf) {
    html.push(`<div class="continent-section">
      <h3><span class="continent-badge" style="background:${confBadgeClass[filter]}">${filter}</span> ${confNames[filter]||filter}</h3>
    </div>`);
  }
  html.push(`<table class="ranking-table">
    <thead><tr>
      ${isConf ? '<th># no Continente</th>' : ''}
      <th>#</th><th>Seleção</th><th>Confederação</th><th>Pontos</th>
    </tr></thead><tbody>
    ${data.map((r, i) => `
      <tr class="${r.pos <= 3 ? 'top3' : ''}" onclick="openModal('${r.team}')">
        ${isConf ? `<td class="pos-cell">${i+1}º</td>` : ''}
        <td class="pos-cell">${r.pos}º</td>
        <td><div class="team-cell"><span class="flag">${getFlag(r.team)}</span><span class="name">${r.team}</span></div></td>
        <td><span class="conf-badge" style="background:${confBadgeClass[r.conf]}">${r.conf}</span></td>
        <td class="pts-cell">${r.points.toFixed(1)}</td>
      </tr>`).join('')}
    </tbody></table>`);
  c.innerHTML = html.join('');
}

function setupRankingFilters() {
  const fc = document.getElementById('rankingFilters');
  if (!fc) return;
  fc.innerHTML = confs.map(c =>
    `<button class="${c === 'GERAL' ? 'active' : ''}" data-conf="${c}">${c === 'GERAL' ? '🌍 Geral' : c}</button>`
  ).join('');
  fc.addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (!btn) return;
    fc.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const search = document.getElementById('rankingSearch').value;
    renderRanking(btn.dataset.conf, search);
  });
  document.getElementById('rankingSearch').addEventListener('input', e => {
    const active = fc.querySelector('.active');
    renderRanking(active ? active.dataset.conf : 'GERAL', e.target.value);
  });
  document.querySelectorAll('.sort-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentSort = btn.dataset.sort;
      const active = fc.querySelector('.active');
      const search = document.getElementById('rankingSearch').value;
      renderRanking(active ? active.dataset.conf : 'GERAL', search);
    });
  });
}

function renderGallery() {
  const c = document.getElementById('galleryGrid');
  if (!c) return;
  c.innerHTML = galleryItems.map(g => `
    <div class="gallery-item reveal">
      <div class="gallery-bg">${g.icon}</div>
      <div class="gallery-info">
        <h4>${g.title}</h4>
        <p>${g.desc}</p>
      </div>
    </div>
  `).join('');
}

function renderTimeline() {
  const c = document.getElementById('timelineContainer');
  if (!c) return;
  c.innerHTML = worldCups.map((wc, i) => `
    <div class="timeline-item reveal">
      <div class="tl-content">
        <div class="tl-year">${wc.year}</div>
        <div class="tl-title">${wc.flag} ${wc.host}</div>
        <div class="tl-desc">Campeão: ${getFlag(wc.champion)} ${wc.champion}</div>
      </div>
      <div class="tl-dot"></div>
    </div>
  `).join('');
}

function renderStats() {
  const c = document.getElementById('statsContainer');
  if (!c) return;
  const all = groups.flatMap(g => g.teams);
  const top = all.sort((a, b) => b.pts - a.pts).slice(0, 12);
  const maxPts = Math.max(...top.map(t => t.pts));
  c.innerHTML = top.map(t => `
    <div class="stat-card reveal">
      <div class="stat-flag">${getFlag(t.name)}</div>
      <div class="stat-name">${t.name}</div>
      <div class="stat-bars">
        <div class="stat-bar"><span>Pts</span><div class="bar"><div style="width:${(t.pts/maxPts)*100}%;background:var(--gold)"></div></div><span>${t.pts}</span></div>
        <div class="stat-bar"><span>V</span><div class="bar"><div style="width:${(t.v/3)*100}%;background:#3fb950"></div></div><span>${t.v}</span></div>
        <div class="stat-bar"><span>SG</span><div class="bar"><div style="width:${Math.min(100, (t.sg+10)*5)}%;background:#58a6ff"></div></div><span>${t.sg>0?'+':''}${t.sg}</span></div>
      </div>
    </div>
  `).join('');
}

function renderCuriosities() {
  const c = document.getElementById('curiositiesContainer');
  if (!c) return;
  c.innerHTML = curiosities.map(cur => `
    <div class="curiosity-card reveal">
      <div class="curiosity-icon">${cur.icon}</div>
      <h4>${cur.title}</h4>
      <p>${cur.text}</p>
    </div>
  `).join('');
}

function openModal(team) {
  const modal = document.getElementById('teamModal');
  const body = document.getElementById('modalBody');
  if (!modal || !body) return;
  const r = ranking.find(r => r.team === team);
  const g = groups.find(gr => gr.teams.some(t => t.name === team));
  const tInfo = g ? g.teams.find(t => t.name === team) : null;
  body.innerHTML = `
    <div style="text-align:center;margin-bottom:1.5rem">
      <div style="font-size:4rem;margin-bottom:0.5rem">${getFlag(team)}</div>
      <h2 style="font-size:1.3rem">${team}</h2>
      ${r ? `<p style="color:var(--gold);font-weight:700">#${r.pos} no Ranking FIFA · ${r.points.toFixed(1)} pts</p>` : ''}
      ${g ? `<p style="color:var(--text-secondary);font-size:0.85rem">Grupo ${g.name}</p>` : ''}
    </div>
    ${tInfo ? `
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.5rem">
        <div style="background:var(--bg);padding:0.8rem;border-radius:8px;text-align:center"><small style="color:var(--text-secondary)">Jogos</small><div style="font-weight:700;font-size:1.2rem">${tInfo.j}</div></div>
        <div style="background:var(--bg);padding:0.8rem;border-radius:8px;text-align:center"><small style="color:var(--text-secondary)">Pontos</small><div style="font-weight:700;font-size:1.2rem;color:var(--gold)">${tInfo.pts}</div></div>
        <div style="background:var(--bg);padding:0.8rem;border-radius:8px;text-align:center"><small style="color:var(--text-secondary)">Vitórias</small><div style="font-weight:700;font-size:1.2rem;color:#3fb950">${tInfo.v}</div></div>
        <div style="background:var(--bg);padding:0.8rem;border-radius:8px;text-align:center"><small style="color:var(--text-secondary)">Saldo</small><div style="font-weight:700;font-size:1.2rem;color:#58a6ff">${tInfo.sg>0?'+':''}${tInfo.sg}</div></div>
      </div>` : ''}
  `;
  modal.classList.add('open');
}

function initCountdown() {
  const target = new Date('2026-07-19T18:00:00');
  function tick() {
    const now = new Date();
    const diff = target - now;
    if (diff <= 0) { document.getElementById('countdown').innerHTML = '<div style="color:var(--gold);font-size:1.5rem;font-weight:700">🔥 A Copa está rolando!</div>'; return; }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    document.getElementById('cdDays').textContent = String(d).padStart(2,'0');
    document.getElementById('cdHours').textContent = String(h).padStart(2,'0');
    document.getElementById('cdMins').textContent = String(m).padStart(2,'0');
    document.getElementById('cdSecs').textContent = String(s).padStart(2,'0');
  }
  tick();
  setInterval(tick, 1000);
}

function initTheme() {
  const btn = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    btn.innerHTML = '<i class="fas fa-sun"></i>';
  }
  btn.addEventListener('click', () => {
    const html = document.documentElement;
    const isLight = html.getAttribute('data-theme') === 'light';
    html.setAttribute('data-theme', isLight ? '' : 'light');
    btn.innerHTML = isLight ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    localStorage.setItem('theme', isLight ? '' : 'light');
  });
}

function initLoader() {
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('loader').classList.add('hidden');
    }, 800);
  });
}

function initProgressBar() {
  const bar = document.getElementById('progressBar');
  window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (window.scrollY / h) * 100 + '%';
  });
}

function initBackToTop() {
  const btn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 500);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function initNavbar() {
  const header = document.getElementById('header');
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('navMenu');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('open');
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      menu.classList.remove('open');
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
  if ('IntersectionObserver' in window) {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
          const link = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
          if (link) link.classList.add('active');
        }
      });
    }, { rootMargin: '-50% 0px -50% 0px' });
    sections.forEach(s => observer.observe(s));
  }
}

function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function initModal() {
  const modal = document.getElementById('teamModal');
  document.getElementById('modalClose').addEventListener('click', () => modal.classList.remove('open'));
  modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('open'); });
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const orig = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    btn.disabled = true;
    setTimeout(() => {
      btn.innerHTML = '<i class="fas fa-check"></i> Mensagem enviada!';
      btn.style.background = '#3fb950';
      setTimeout(() => {
        btn.innerHTML = orig;
        btn.disabled = false;
        btn.style.background = '';
        form.reset();
      }, 2000);
    }, 1500);
  });
}

document.getElementById('year').textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initTheme();
  initProgressBar();
  initBackToTop();
  initNavbar();
  initModal();
  initCountdown();
  initContactForm();
  renderGroups();
  renderBracket();
  renderMatchList();
  renderRanking();
  setupRankingFilters();
  renderGallery();
  renderTimeline();
  renderStats();
  renderCuriosities();
  setTimeout(initScrollReveal, 100);
});
