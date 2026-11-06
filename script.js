CSS

/* =====================================
   ATUALIZAÇÃO COPA DO MUNDO 2026
   DECORAÇÃO DA ESPANHA
===================================== */

:root {
  --spain-red: #aa151b;
  --spain-yellow: #f1bf00;
}

/* Destaque da Espanha no início */
.hero {
  background:
    linear-gradient(
      135deg,
      #001a3a 0%,
      #002b5e 35%,
      #7b1118 75%,
      #aa151b 100%
    );
}

.hero-badge {
  background: linear-gradient(
    90deg,
    rgba(170, 21, 27, 0.25),
    rgba(241, 191, 0, 0.2)
  );
  border: 1px solid rgba(241, 191, 0, 0.5);
  color: #ffd84d;
}

/* Detalhes dourados */
.section-header h2 span {
  color: var(--spain-yellow);
}

.section-badge {
  border-color: rgba(241, 191, 0, 0.3);
  color: var(--spain-yellow);
}

/* Cartões dos grupos */
.group-header {
  background: linear-gradient(
    135deg,
    #7b1118,
    #aa151b,
    #d52b31
  );
}

.group-table .pts {
  color: var(--spain-yellow);
}

/* Destaque dos classificados */
.group-table .highlight-row td {
  background: rgba(241, 191, 0, 0.08);
}

/* Mata-mata */
.bracket-match .winner {
  color: var(--spain-yellow);
}

.bracket-pen {
  color: var(--spain-yellow);
}

/* Ranking */
.ranking-filters button.active {
  background: var(--spain-yellow);
  border-color: var(--spain-yellow);
  color: #241900;
}

.ranking-table .pts-cell {
  color: var(--spain-yellow);
}

/* Linha do tempo */
.timeline-item .tl-year {
  color: var(--spain-yellow);
}

.timeline-item .tl-dot {
  background: var(--spain-yellow);
}

/* Curiosidades */
.curiosity-card:hover {
  border-color: var(--spain-yellow);
}

/* Contato e GitHub */
.contact-wrapper {
  display: flex;
  justify-content: center;
}

.contact-info {
  width: 100%;
  max-width: 650px;
}

.contact-info a {
  color: var(--text);
  text-decoration: none;
  transition: color var(--transition);
}

.contact-info a:hover {
  color: var(--spain-yellow);
}

/* Rodapé */
.footer-social a:hover {
  border-color: var(--spain-yellow);
  color: var(--spain-yellow);
}

/* Botão voltar ao topo */
.back-to-top {
  background: var(--spain-yellow);
}

/* Responsividade */
@media (max-width: 768px) {
  .hero-content {
    padding: 6rem 1rem 4rem;
  }

  .hero-badge {
    font-size: 0.7rem;
  }

  .ranking-filters {
    justify-content: center;
  }

  .contact-info {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-countdown {
    gap: 0.5rem;
  }

  .hero-countdown > div {
    min-width: 65px;
    padding: 0.7rem;
  }
}