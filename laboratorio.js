// LABORATORIO DE ALQUIMIA MUSICAL 

class MusicAlchemyLab {
  constructor() {
    // Variables básicas del juego
    this.maxAttempts = 20;
    this.attempts = 0;
    this.selectedGenres = [];
    this.discoveredGenres = [];
    this.showedLevel2Message = false;
    this.currentLevel = 1; // Controla el nivel actual del juego
    this.isLevel2MessageVisible = false; // Controla si el mensaje de nivel 2 está visible
    
    this.genres = [
      // GÉNEROS BASE
      {
        id: "european-classical",
        name: "Música Clásica Europea",
        emoji: "🎭",
        discovered: true,
        isBase: true,
        description: "Tradición académica occidental",
        community: "Cortes europeas y conservatorios",
      },
      {
        id: "african-traditional",
        name: "Música Africana",
        emoji: "🥁",
        discovered: true,
        isBase: true,
        description: "Ritmos ancestrales comunitarios",
        community: "Comunidades africanas tradicionales",
      },
      {
        id: "spiritual",
        name: "Música Espiritual",
        emoji: "⛪",
        discovered: true,
        isBase: true,
        description: "Música religiosa y ceremonial",
        community: "Comunidades espirituales",
      },
      {
        id: "folk-ancestral",
        name: "Música Originaria",
        emoji: "🌾",
        discovered: true,
        isBase: true,
        description: "Folk ancestral de tradiciones locales",
        community: "Pueblos originarios",
      },

      // NIVEL 1 - DOS GÉNEROS
      {
        id: "gospel",
        name: "Gospel",
        emoji: "🙏",
        discovered: false,
        isBase: false,
        level: 1,
        description: "Música espiritual afroamericana",
        community: "Iglesias afroamericanas",
      },
      {
        id: "cumbia",
        name: "Cumbia",
        emoji: "🪘",
        discovered: false,
        isBase: false,
        level: 1,
        description: "Ritmo afro-latinoamericano",
        community: "Costa caribeña colombiana",
      },
      {
        id: "folk",
        name: "Folk",
        emoji: "🎻",
        discovered: false,
        isBase: false,
        level: 1,
        description: "Música popular tradicional",
        community: "Comunidades rurales",
      },
      {
        id: "salsa",
        name: "Salsa",
        emoji: "🎺",
        discovered: false,
        isBase: false,
        level: 1,
        description: "Fusión afrocaribeña urbana",
        community: "Barrios latinos de Nueva York",
      },
      {
        id: "jazz",
        name: "Jazz",
        emoji: "🎷",
        discovered: false,
        isBase: false,
        level: 1,
        description: "Improvisación afroamericana",
        community: "Nueva Orleans",
      },
      {
        id: "country",
        name: "Country",
        emoji: "🤠",
        discovered: false,
        isBase: false,
        level: 1,
        description: "Música rural americana",
        community: "Sur rural de Estados Unidos",
      },
      {
        id: "blues",
        name: "Blues",
        emoji: "🎸",
        discovered: false,
        isBase: false,
        level: 1,
        description: "Expresión del alma afroamericana",
        community: "Delta del Mississippi",
      },
      {
        id: "rock-and-roll",
        name: "Rock & Roll",
        emoji: "🎸⚡",
        discovered: false,
        isBase: false,
        level: 1,
        description: "Revolución musical juvenil",
        community: "Estados Unidos años 50",
      },
      {
        id: "reggae",
        name: "Reggae",
        emoji: "🇯🇲",
        discovered: false,
        isBase: false,
        level: 1,
        description: "Ritmo afrocaribeño jamaiquino",
        community: "Jamaica",
      },
      {
        id: "funk",
        name: "Funk",
        emoji: "🕺",
        discovered: false,
        isBase: false,
        level: 1,
        description: "Groove afroamericano",
        community: "Comunidades afroamericanas",
      },

      {
        id: "pop",
        name: "Pop",
        emoji: "🎵",
        discovered: false,
        isBase: false,
        level: 1,
        description: "Música popular comercial",
        community: "Industria musical mainstream",
      },

      // NIVEL 2 - TRES GÉNEROS
      {
        id: "soul",
        name: "Soul",
        emoji: "💫",
        discovered: false,
        isBase: false,
        level: 2,
        description: "Alma de la música afroamericana",
        community: "Detroit y Memphis",
      },
      {
        id: "disco",
        name: "Disco",
        emoji: "🪩",
        discovered: false,
        isBase: false,
        level: 2,
        description: "Música de baile nocturna",
        community: "Discotecas de los 70",
      },
      {
        id: "electronica",
        name: "Música Electrónica",
        emoji: "🎛️",
        discovered: false,
        isBase: false,
        level: 2,
        description: "Música creada con instrumentos electrónicos",
        community: "Estudios y clubes europeos",
      },

      {
        id: "hip-hop",
        name: "Hip Hop",
        emoji: "🎤",
        discovered: false,
        isBase: false,
        level: 2,
        description: "Cultura urbana del Bronx",
        community: "Bronx, Nueva York",
      },
      {
        id: "reggaeton",
        name: "Reggaeton",
        emoji: "🔥",
        discovered: false,
        isBase: false,
        level: 2,
        description: "Música urbana latina",
        community: "Puerto Rico y Latinoamérica",
      },
      {
        id: "ska",
        name: "Ska",
        emoji: "🎺🎷",
        discovered: false,
        isBase: false,
        level: 2,
        description: "Precursor del reggae",
        community: "Jamaica años 60",
      },
    ];

    // COMBINACIONES VALIDAS
    this.validCombinations = [
      // NIVEL 1 - SOLO combinaciones de 2 géneros (directas desde bases)
      { parents: ["african-traditional", "spiritual"], result: "gospel", level: 1 },
      { parents: ["african-traditional", "folk-ancestral"], result: "cumbia", level: 1 },
      { parents: ["folk-ancestral", "spiritual"], result: "folk", level: 1 },
      { parents: ["african-traditional", "european-classical"], result: "jazz", level: 1 },
      { parents: ["folk-ancestral", "european-classical"], result: "country", level: 1 },
      { parents: ["gospel", "african-traditional"], result: "blues", level: 1 },
      { parents: ["blues", "european-classical"], result: "rock-and-roll", level: 1 },
      { parents: ["folk", "african-traditional"], result: "reggae", level: 1 },
      { parents: ["jazz", "spiritual"], result: "funk", level: 1 },
      { parents: ["jazz", "folk"], result: "pop", level: 1 },
      { parents: ["cumbia", "jazz"], result: "salsa", level: 1 },
      
      // NIVEL 2 - SOLO combinaciones de 3 géneros
      { parents: ["gospel", "blues", "jazz"], result: "soul", level: 2 },
      { parents: ["funk", "soul", "pop"], result: "disco", level: 2 },
      { parents: ["disco", "pop", "rock-and-roll"], result: "electronica", level: 2 },
      { parents: ["reggae", "funk", "soul"], result: "hip-hop", level: 2 },
      { parents: ["reggae", "pop", "salsa"], result: "reggaeton", level: 2 },
      { parents: ["jazz", "reggae", "folk"], result: "ska", level: 2 },
    ];

    // Inicializar el juego
    this.startGame();
  }

  startGame() {
    // Reiniciar todo al empezar
    this.maxAttempts = 20; // Resetear a 20 intentos base
    this.attempts = 0;
    this.selectedGenres = [];
    this.discoveredGenres = [];
    this.showedLevel2Message = false;
    this.currentLevel = 1;
    this.isLevel2MessageVisible = false;
    
    // Solo los géneros base están disponibles
    this.genres.forEach(genre => { 
      genre.discovered = genre.isBase; 
    });
    
    this.updateDisplay();
  }

  updateDisplay() {
    // Actualizar contadores en pantalla
    document.getElementById('attempts').textContent = this.maxAttempts - this.attempts;
    document.getElementById('discoveries').textContent = this.discoveredGenres.length;
    this.showGenres();
  }

  showGenres() {
    const container = document.getElementById('genres-grid');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Mostrar cada género
    this.genres.forEach(genre => {
      const card = document.createElement('div');
      card.className = `genre-card ${genre.discovered ? 'discovered' : 'locked'}`;
      card.dataset.genreId = genre.id;

      if (genre.discovered) {
        // Género desbloqueado
        card.innerHTML = `
          <span class="genre-emoji">${genre.emoji}</span>
          <h5 class="genre-name">${genre.name}</h5>
          <p class="genre-description">${genre.description}</p>
          <div class="genre-community"><span>👥 ${genre.community}</span></div>
          ${genre.level ? `<span class="genre-tag">Nivel ${genre.level}</span>` : ''}
        `;
        card.addEventListener('click', () => this.selectGenre(genre));
      } else {
        // Género bloqueado
        card.innerHTML = `
          <span class="locked-icon">🔒</span>
          <h5 class="genre-name">Género Bloqueado</h5>
          <p class="locked-text">Experimenta para desbloquearlo</p>
        `;
      }
      container.appendChild(card);
    });
  }

  selectGenre(genre) {
    if (!genre.discovered) return;
    
    // Determinar límite según el nivel
    const maxSelection = this.currentLevel === 1 ? 2 : 3;
    
    // Si ya está seleccionado, lo quito
    if (this.selectedGenres.includes(genre.id)) {
      this.selectedGenres = this.selectedGenres.filter(id => id !== genre.id);
    } else {
      // Si no está seleccionado y hay espacio, lo agrego
      if (this.selectedGenres.length < maxSelection) {
        this.selectedGenres.push(genre.id);
      }
    }
    this.updateSelection();
  }

  updateSelection() {
    // Marcar géneros seleccionados visualmente
    document.querySelectorAll('.genre-card').forEach(card => {
      const genreId = card.dataset.genreId;
      if (this.selectedGenres.includes(genreId)) {
        card.classList.add('selected');
      } else {
        card.classList.remove('selected');
      }
    });
    this.showSelection();
  }

  showSelection() {
    const container = document.getElementById('selected-genres');
    if (!container) return;
    
    if (this.selectedGenres.length === 0) {
      container.innerHTML = '<p class="text-center text-muted">Selecciona géneros para fusionar</p>';
      return;
    }

    const selectedGenresData = this.selectedGenres.map(id => 
      this.genres.find(g => g.id === id)
    ).filter(Boolean);

    container.innerHTML = `
      <div class="selected-section">
        <div class="selection-card">
          <h4 class="selection-title">Géneros Seleccionados</h4>
          <div class="selected-genres-display">
            ${selectedGenresData.map(genre => `
              <div class="selected-genre-item">
                <span class="selected-genre-emoji">${genre.emoji}</span>
                <div class="selected-genre-name">${genre.name}</div>
              </div>
            `).join('')}
          </div>
          <div class="text-center mt-3">
            <button class="fusion-btn btn btn-primary btn-lg" onclick="lab.attemptFusion()">
              🧪 Fusionar Géneros
            </button>
            <button class="btn btn-outline-secondary ms-2" onclick="lab.clearSelection()">
              Limpiar
            </button>
          </div>
        </div>
      </div>
    `;
  }

  attemptFusion() {
    // Determinar cuántos géneros se necesitan según el nivel
    const requiredGenres = this.currentLevel === 1 ? 2 : 3;
    
    // Verificar que tiene la cantidad correcta
    if (this.selectedGenres.length !== requiredGenres) {
      const levelText = this.currentLevel === 1 ? "2" : "3";
      this.showMessage(`En nivel ${this.currentLevel} necesitas exactamente ${levelText} géneros para fusionar`);
      return;
    }
    
    // Verificar que quedan intentos
    if (this.attempts >= this.maxAttempts) {
      this.showMessage("¡No te quedan más intentos!");
      return;
    }

    this.attempts++;
    const combination = this.findCombination(this.selectedGenres);
    
    if (combination) {
      const resultGenre = this.genres.find(g => g.id === combination.result);
      
      if (!resultGenre.discovered) {
        // ¡Nuevo descubrimiento!
        resultGenre.discovered = true;
        this.discoveredGenres.push(resultGenre.id);
        this.showSuccess(resultGenre, combination.level);
      } else {
        this.showMessage(`Ya habías descubierto ${resultGenre.name}`);
      }
    } else {
      // Combinación no válida
      this.showMessage("❌ No se encuentra esa combinación en el laboratorio");
    }

    this.clearSelection();
    this.updateDisplay();
  }

  findCombination(selectedIds) {
    // Buscar si la combinación es válida
    return this.validCombinations.find(combo => {
      const sortedSelected = [...selectedIds].sort();
      const sortedParents = [...combo.parents].sort();
      return sortedSelected.length === sortedParents.length && 
             sortedSelected.every((id, index) => id === sortedParents[index]);
    });
  }

  showSuccess(genre, level) {
    const levelText = level === 2 ? "¡NIVEL 2! " : "";
    const message = `${levelText}¡Descubriste ${genre.emoji} ${genre.name}!`;
    this.showMessage(message);
    
    // Verificar si se completó el nivel 1
    this.checkLevel1Complete();
    
    // Verificar si se completó todo el juego
    this.checkGameComplete();
  }

  checkLevel1Complete() {
    if (this.currentLevel !== 1) return; // Solo verificar en nivel 1
    
    // Contar géneros de nivel 1 descubiertos
    const level1Genres = this.genres.filter(g => g.level === 1);
    const level1Discovered = level1Genres.filter(g => g.discovered);
    
    // Si se descubrieron todos los géneros de nivel 1 y no se mostró el mensaje
    if (level1Discovered.length === level1Genres.length && !this.showedLevel2Message) {
      this.showedLevel2Message = true;
      this.currentLevel = 2; // Subir al nivel 2
      
      // Dar 5 intentos extra para el nivel 2
      this.maxAttempts += 5;
      
      setTimeout(() => {
        this.showLevel2Message();
        this.updateDisplay(); // Actualizar la pantalla para mostrar los nuevos intentos
      }, 2000);
    }
  }

  showMessage(message) {
    const modal = document.createElement('div');
    modal.className = 'game-message';
    modal.innerHTML = `
      <div class="message-card">
        <p id="message-text">${message}</p>
      </div>
    `;
    document.body.appendChild(modal);
    setTimeout(() => modal.remove(), 3000);
  }

  showLevel2Message() {
    if (this.isLevel2MessageVisible) return; // Evitar mostrar múltiples veces
    
    this.isLevel2MessageVisible = true;
    const modal = document.createElement('div');
    modal.className = 'level-up-message';
    modal.innerHTML = `
      <div class="level-up-card">
        <h2>👏 ¡FELICITACIONES!</h2>
        <h3>Completaste el Nivel 1</h3>
        <div class="level-info">
          <p>Descubriste todos los géneros básicos</p>
          <p>🧪Ahora fusiona de a <strong>3 géneros</strong></p>
          <p>⚡ +5 intentos extra otorgados</p>
          <p> ¡Bienvenidx al Nivel 2!</p>
        </div>
        <button class="btn btn-primary btn-lg" onclick="lab.closeLevel2Message()">
          ¡Continuar al Nivel 2!
        </button>
      </div>
    `;
    
    document.body.appendChild(modal);
  }

  closeLevel2Message() {
    const modal = document.querySelector('.level-up-message');
    if (modal) {
      modal.remove();
      this.isLevel2MessageVisible = false;
    }
  }

  checkGameComplete() {
    // Verificar si se completaron TODOS los géneros
    const allDiscoverableGenres = this.genres.filter(g => !g.isBase);
    const allDiscovered = allDiscoverableGenres.filter(g => g.discovered);
    
    if (allDiscovered.length === allDiscoverableGenres.length) {
      setTimeout(() => {
        this.showVictoryMessage();
      }, 2000);
    }
  }

  showVictoryMessage() {
    const modal = document.createElement('div');
    modal.className = 'victory-message';
    modal.innerHTML = `
      <div class="victory-card">
        <h1>🎊¡GANASTE!🎉</h1>
        <h2>Felicitaciones, 🪄te convertiste en maestrx alquimista musical🫵🏼</h2>
        <div class="victory-info">
          <p>👏 Descubriste TODOS los géneros musicales</p>
          <p>🧪 Completaste el Laboratorio Musical</p>
          <p>🤝Aprendiste jugando</p>
        </div>
        <div class="victory-actions">
          <button class="btn btn-success btn-lg me-3" onclick="lab.closeVictoryMessage()">
             Cerrar
          </button>
          <button class="btn btn-outline-light btn-lg" onclick="lab.resetGame(); lab.closeVictoryMessage()">
            🔄 Jugar de nuevo
          </button>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
  }

  closeVictoryMessage() {
    const modal = document.querySelector('.victory-message');
    if (modal) {
      modal.remove();
    }
  }

  clearSelection() {
    this.selectedGenres = [];
    this.updateSelection();
  }

  resetGame() {
    // Reiniciar todo el juego
    this.startGame();
    this.showMessage("🔄 Laboratorio reiniciado");
  }
}

// INICIALIZAR EL JUEGO
let lab;
document.addEventListener('DOMContentLoaded', function() {
  lab = new MusicAlchemyLab();
});
