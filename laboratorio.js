// ===== LABORATORIO MUSICAL - HARMONY TREE STYLE =====

// Base de datos COMPLETA de géneros
const allGenres = {
    // RAÍCES MUSICALES FUNDAMENTALES (desbloqueados desde el inicio)
    'spiritual': { 
        name: '🕊️ Música Espiritual', 
        emoji: '🕊️', 
        unlocked: true, 
        category: 'root',
        description: 'Tradiciones religiosas y ceremoniales',
        community: 'Comunidades espirituales y religiosas'
    },
    'indigenous': { 
        name: '🏺 Música Originaria', 
        emoji: '🏺', 
        unlocked: true, 
        category: 'root',
        description: 'Música ceremonial ancestral',
        community: 'Pueblos originarios de América'
    },
    'classical': { 
        name: '🎭 Música Clásica Europa', 
        emoji: '🎭', 
        unlocked: true, 
        category: 'root',
        description: 'Tradición académica occidental',
        community: 'Cortes y academias europeas'
    },
    'african': { 
        name: '🥁 Música Africana', 
        emoji: '🥁', 
        unlocked: true, 
        category: 'root',
        description: 'Ritmos ancestrales comunitarios',
        community: 'Tribus y comunidades africanas'
    },
    
    // PRIMERAS EVOLUCIONES (siglos XVI-XVIII)
    'blues': { 
        name: '💙 Blues', 
        emoji: '💙', 
        unlocked: false, 
        category: 'early',
        description: 'Expresión de la experiencia afroamericana',
        community: 'Comunidades afroamericanas del sur'
    },
    'gospel': { 
        name: '⛪ Gospel', 
        emoji: '⛪', 
        unlocked: false, 
        category: 'early',
        description: 'Música espiritual de las iglesias negras',
        community: 'Iglesias afroamericanas'
    },
    'folk': { 
        name: '🌾 Folk', 
        emoji: '🌾', 
        unlocked: false, 
        category: 'early',
        description: 'Tradiciones populares rurales',
        community: 'Comunidades campesinas'
    },
    'opera': { 
        name: '🎪 Ópera', 
        emoji: '🎪', 
        unlocked: false, 
        category: 'early',
        description: 'Teatro musical de la alta cultura',
        community: 'Cortes europeas'
    },
    
    // EVOLUCIONES CLÁSICAS (siglos XIX-XX temprano)
    'jazz': { 
        name: '🎺 Jazz', 
        emoji: '🎺', 
        unlocked: false, 
        category: 'classical',
        description: 'Improvisación colectiva urbana',
        community: 'Músicos afroamericanos de Nueva Orleans'
    },
    'country': { 
        name: '🤠 Country', 
        emoji: '🤠', 
        unlocked: false, 
        category: 'classical',
        description: 'Narrativas de la vida rural americana',
        community: 'Comunidades rurales del sur'
    },
    'tango': { 
        name: '💃 Tango', 
        emoji: '💃', 
        unlocked: false, 
        category: 'classical',
        description: 'Pasión rioplatense urbana',
        community: 'Inmigrantes en Buenos Aires y Montevideo'
    },
    'flamenco': { 
        name: '🌹 Flamenco', 
        emoji: '🌹', 
        unlocked: false, 
        category: 'classical',
        description: 'Arte gitano andaluz',
        community: 'Comunidades gitanas de Andalucía'
    },
    
    // GÉNEROS MODERNOS (siglo XX medio)
    'rock': { 
        name: '🎸 Rock', 
        emoji: '🎸', 
        unlocked: false, 
        category: 'modern',
        description: 'Revolución musical juvenil',
        community: 'Jóvenes de los años 50'
    },
    'soul': { 
        name: '✨ Soul', 
        emoji: '✨', 
        unlocked: false, 
        category: 'modern',
        description: 'Fusión de gospel y rhythm & blues',
        community: 'Comunidades urbanas afroamericanas'
    },
    'reggae': { 
        name: '🌴 Reggae', 
        emoji: '🌴', 
        unlocked: false, 
        category: 'modern',
        description: 'Resistencia rastafari jamaicana',
        community: 'Comunidades rastafari de Jamaica'
    },
    'bossa': { 
        name: '🏖️ Bossa Nova', 
        emoji: '🏖️', 
        unlocked: false, 
        category: 'modern',
        description: 'Sofisticación carioca',
        community: 'Músicos de Río de Janeiro'
    },
    
    // GÉNEROS CONTEMPORÁNEOS (siglo XX tardío-XXI)
    'hip-hop': { 
        name: '🎤 Hip Hop', 
        emoji: '🎤', 
        unlocked: false, 
        category: 'contemporary',
        description: 'Cultura urbana del Bronx',
        community: 'Jóvenes afroamericanos y latinos'
    },
    'electronic': { 
        name: '🎹 Electrónica', 
        emoji: '🎹', 
        unlocked: false, 
        category: 'contemporary',
        description: 'Música de máquinas y sintetizadores',
        community: 'Productores y DJs'
    },
    'punk': { 
        name: '🏴‍☠️ Punk', 
        emoji: '🏴‍☠️', 
        unlocked: false, 
        category: 'contemporary',
        description: 'Rebelión contra el establishment',
        community: 'Jóvenes de clase trabajadora'
    },
    'world': { 
        name: '🌍 World Music', 
        emoji: '🌍', 
        unlocked: false, 
        category: 'contemporary',
        description: 'Fusión global de tradiciones',
        community: 'Artistas multiculturales'
    },
    
    // FUSIONES EXPERIMENTALES (siglo XXI)
    'experimental': { 
        name: '🧪 Experimental', 
        emoji: '🧪', 
        unlocked: false, 
        category: 'fusion',
        description: 'Exploración de nuevos sonidos',
        community: 'Artistas vanguardistas'
    },
    'ambient': { 
        name: '🌌 Ambient', 
        emoji: '🌌', 
        unlocked: false, 
        category: 'fusion',
        description: 'Música atmosférica y meditativa',
        community: 'Compositores electrónicos'
    },
    'trap': { 
        name: '💎 Trap', 
        emoji: '💎', 
        unlocked: false, 
        category: 'fusion',
        description: 'Hip hop del sur con beats pesados',
        community: 'Productores del sur de EE.UU.'
    }
};

// FUSIONES PERMITIDAS (evolución musical histórica)
const allowedFusions = {
    // === PRIMERA GENERACIÓN: De raíces a primeras evoluciones ===
    'spiritual-african': {
        result: 'gospel',
        name: 'Gospel Tradicional',
        description: 'En las iglesias afroamericanas del sur, la espiritualidad cristiana se funde con los ritmos ancestrales africanos, creando el gospel.',
        discoveryMessage: '¡Descubriste el Gospel! Una fusión divina entre lo espiritual y lo ancestral.'
    },
    'african-indigenous': {
        result: 'blues',
        name: 'Blues Rural',
        description: 'En los campos de algodón del Delta del Mississippi, las tradiciones africanas se encuentran con las melodías nativas americanas, naciendo el blues.',
        discoveryMessage: '¡Descubriste el Blues! El dolor y la esperanza se unen en melodía.'
    },
    'classical-indigenous': {
        result: 'folk',
        name: 'Folk Tradicional',
        description: 'Las melodías académicas europeas abrazan las narrativas ancestrales americanas, formando el folk tradicional.',
        discoveryMessage: '¡Descubriste el Folk! Las historias del pueblo cobran vida en música.'
    },
    'classical-spiritual': {
        result: 'opera',
        name: 'Ópera Sacra',
        description: 'La grandiosidad de la música clásica europea se eleva con la profundidad espiritual, creando la tradición operística.',
        discoveryMessage: '¡Descubriste la Ópera! El drama y la belleza en su máxima expresión.'
    },

    // === SEGUNDA GENERACIÓN: Evoluciones clásicas ===
    'blues-gospel': {
        result: 'jazz',
        name: 'Jazz Original',
        description: 'En Nueva Orleans, 1920: el blues melancólico se encuentra con la energía del gospel. Nace el jazz, música de libertad.',
        discoveryMessage: '¡Descubriste el Jazz! La improvisación como expresión de libertad.'
    },
    'folk-classical': {
        result: 'country',
        name: 'Country Clásico',
        description: 'Las historias del folk rural se estructuran con armonías clásicas. Hank Williams definió el country en Nashville.',
        discoveryMessage: '¡Descubriste el Country! Las raíces americanas encuentran su voz.'
    },
    'classical-african': {
        result: 'tango',
        name: 'Tango Porteño',
        description: 'En Buenos Aires, 1890: la elegancia europea se apasiona con los ritmos africanos del Río de la Plata.',
        discoveryMessage: '¡Descubriste el Tango! Pasión y elegancia en cada compás.'
    },
    'spiritual-classical': {
        result: 'flamenco',
        name: 'Flamenco Puro',
        description: 'En Andalucía, el fervor espiritual gitano se funde con la tradición musical española. Arte puro de dolor y alegría.',
        discoveryMessage: '¡Descubriste el Flamenco! El alma gitana en cada guitarra.'
    },

    // === TERCERA GENERACIÓN: Revolución moderna ===
    'blues-country': {
        result: 'rock',
        name: 'Rock and Roll',
        description: 'Memphis, 1954: Elvis toma el blues negro y el country blanco. Nace el rock, música que cambió el mundo.',
        discoveryMessage: '¡Descubriste el Rock! La revolución musical que cambió todo.'
    },
    'gospel-blues': {
        result: 'soul',
        name: 'Soul Clásico',
        description: 'Detroit, 1960s: Ray Charles lleva el gospel a lo secular. El soul nace como música del corazón urbano.',
        discoveryMessage: '¡Descubriste el Soul! La música que llega directo al corazón.'
    },
    'jazz-african': {
        result: 'reggae',
        name: 'Reggae Roots',
        description: 'Jamaica, 1968: Bob Marley fusiona jazz americano con ritmos rastafari. El reggae como mensaje de unidad.',
        discoveryMessage: '¡Descubriste el Reggae! One love, one heart, one music.'
    },
    'jazz-tango': {
        result: 'bossa',
        name: 'Bossa Nova',
        description: 'Río de Janeiro, 1958: la sofisticación del jazz se relaja con la sensualidad del tango. João Gilberto crea la bossa nova.',
        discoveryMessage: '¡Descubriste la Bossa Nova! Suavidad brasileña para el alma.'
    },

    // === CUARTA GENERACIÓN: Era digital ===
    'soul-african': {
        result: 'hip-hop',
        name: 'Hip Hop Origins',
        description: 'Bronx, 1973: DJ Kool Herc toma breaks de soul y les da ritmo africano. Nace la cultura hip hop.',
        discoveryMessage: '¡Descubriste el Hip Hop! La voz de las calles encuentra su beat.'
    },
    'classical-rock': {
        result: 'electronic',
        name: 'Música Electrónica',
        description: 'Berlín, 1970s: Kraftwerk combina precisión clásica con potencia del rock usando sintetizadores. Revolución electrónica.',
        discoveryMessage: '¡Descubriste la Electrónica! El futuro suena a sintetizadores.'
    },
    'rock-reggae': {
        result: 'punk',
        name: 'Punk Rock',
        description: 'Londres, 1976: The Clash toma la rebeldía del rock y la conciencia del reggae. Punk como revolución social.',
        discoveryMessage: '¡Descubriste el Punk! La rebeldía encuentra su guitarra.'
    },

    // === QUINTA GENERACIÓN: Fusiones contemporáneas ===
    'hip-hop-electronic': {
        result: 'trap',
        name: 'Trap Music',
        description: 'Atlanta, 2000s: el hip hop abraza la producción electrónica. T.I. y Jeezy definen el trap como sonido del sur.',
        discoveryMessage: '¡Descubriste el Trap! El sur tiene algo que decir.'
    },
    'jazz-electronic': {
        result: 'ambient',
        name: 'Ambient Jazz',
        description: 'Brian Eno toma la improvisación del jazz y la espacializa electrónicamente. Música para pensar y soñar.',
        discoveryMessage: '¡Descubriste el Ambient! Sonidos que abrazan el alma.'
    },
    
    // === FUSIÓN ESPECIAL: World Music ===
    'folk-tango': {
        result: 'world',
        name: 'World Music',
        description: 'La globalización musical: tradiciones folk de todo el mundo se encuentran con géneros como el tango, creando la World Music.',
        discoveryMessage: '¡Descubriste la World Music! Todas las culturas en armonía.'
    },
    'world-electronic': {
        result: 'experimental',
        name: 'Experimental Global',
        description: 'Siglo XXI: artistas como Björk fusionan tradiciones mundiales con tecnología. Música sin fronteras ni límites.',
        discoveryMessage: '¡Descubriste lo Experimental! Más allá de todo límite conocido.'
    }
};

// Estado del juego
let gameState = {
    discoveries: 0,
    combinations: 0,
    selectedGenres: [],
    discoveredFusions: new Set(),
    startTime: Date.now()
};

// Inicializar el juego
document.addEventListener('DOMContentLoaded', function() {
    loadGameState();
    initializeGame();
    setupEventListeners();
});

function initializeGame() {
    renderGenresLibrary();
    updateStats();
    updateDiscoveriesDisplay();
}

function renderGenresLibrary() {
    const library = document.getElementById('genres-library');
    library.innerHTML = '<h6 style="color: hsl(43, 74%, 66%); margin-bottom: 15px;">🌱 Raíces Musicales Disponibles</h6>';
    
    const unlockedGenres = Object.entries(allGenres).filter(([id, genre]) => genre.unlocked);
    
    if (unlockedGenres.length === 0) {
        library.innerHTML += '<p style="color: hsl(0, 0%, 70%);">No hay raíces musicales desbloqueadas</p>';
        return;
    }
    
    unlockedGenres.forEach(([id, genre]) => {
        const genreCard = document.createElement('div');
        genreCard.className = 'genre-card';
        genreCard.draggable = true;
        genreCard.dataset.genreId = id;
        genreCard.innerHTML = `
            <div style="font-size: 1.5rem; margin-bottom: 5px;">${genre.emoji}</div>
            <div style="font-weight: bold;">${genre.name.split(' ').slice(1).join(' ')}</div>
            <div style="font-size: 0.7rem; opacity: 0.8; margin-top: 5px;">${genre.community}</div>
        `;
        
        // Event listeners
        genreCard.addEventListener('dragstart', handleDragStart);
        genreCard.addEventListener('dragend', handleDragEnd);
        genreCard.addEventListener('click', handleGenreClick);
        
        library.appendChild(genreCard);
    });

    // Separador para géneros descubiertos
    if (unlockedGenres.length > 4) {
        const separator = document.createElement('div');
        separator.style.cssText = 'border-top: 2px dashed hsl(43, 74%, 66%, 0.5); margin: 20px 0; padding-top: 15px;';
        library.appendChild(separator);
        
        const discoveredTitle = document.createElement('h6');
        discoveredTitle.style.cssText = 'color: hsl(173, 58%, 39%); margin-bottom: 15px;';
        discoveredTitle.innerHTML = '🎵 Géneros Descubiertos';
        library.appendChild(discoveredTitle);
    }
}

function setupEventListeners() {
    const cauldron = document.getElementById('fusion-cauldron');
    const fusionBtn = document.getElementById('fusion-btn');
    
    // Drag & Drop
    cauldron.addEventListener('dragover', handleDragOver);
    cauldron.addEventListener('drop', handleDrop);
    cauldron.addEventListener('dragleave', handleDragLeave);
    
    // Botón de fusión
    fusionBtn.addEventListener('click', createFusion);
}

function handleDragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.dataset.genreId);
    e.target.classList.add('dragging');
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
}

function handleDragOver(e) {
    e.preventDefault();
    e.currentTarget.classList.add('drag-over');
}

function handleDragLeave(e) {
    e.currentTarget.classList.remove('drag-over');
}

function handleDrop(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
    
    const genreId = e.dataTransfer.getData('text/plain');
    addGenreToCauldron(genreId);
}

function handleGenreClick(e) {
    const genreId = e.target.closest('.genre-card').dataset.genreId;
    addGenreToCauldron(genreId);
}

function addGenreToCauldron(genreId) {
    if (gameState.selectedGenres.length >= 2) {
        showNotification('Solo puedes combinar 2 tradiciones musicales a la vez', 'info');
        return;
    }
    
    if (gameState.selectedGenres.includes(genreId)) {
        showNotification('Esta tradición ya está en el laboratorio', 'info');
        return;
    }
    
    gameState.selectedGenres.push(genreId);
    updateCauldronDisplay();
    updateFusionButton();
    
    // Auto-fusionar cuando tengamos 2 géneros
    if (gameState.selectedGenres.length === 2) {
        setTimeout(createFusion, 1000);
    }
}

function removeGenreFromCauldron(genreId) {
    gameState.selectedGenres = gameState.selectedGenres.filter(id => id !== genreId);
    updateCauldronDisplay();
    updateFusionButton();
}

function updateCauldronDisplay() {
    const selectedGenresContainer = document.getElementById('selected-genres');
    selectedGenresContainer.innerHTML = '';
    
    gameState.selectedGenres.forEach(genreId => {
        const genre = allGenres[genreId];
        const genreElement = document.createElement('div');
        genreElement.className = 'selected-genre';
        genreElement.innerHTML = `
            <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 1.2rem;">${genre.emoji}</span>
                <span>${genre.name.split(' ').slice(1).join(' ')}</span>
            </div>
            <button class="remove-genre" onclick="removeGenreFromCauldron('${genreId}')">×</button>
        `;
        selectedGenresContainer.appendChild(genreElement);
    });
}

function updateFusionButton() {
    const fusionBtn = document.getElementById('fusion-btn');
    fusionBtn.disabled = gameState.selectedGenres.length !== 2;
    fusionBtn.textContent = gameState.selectedGenres.length === 2 ? 'Fusionar Tradiciones' : 'Selecciona 2 Tradiciones';
}

function createFusion() {
    if (gameState.selectedGenres.length !== 2) return;
    
    const [genre1, genre2] = gameState.selectedGenres;
    const fusionKey1 = `${genre1}-${genre2}`;
    const fusionKey2 = `${genre2}-${genre1}`;
    
    // Verificar si la fusión está permitida
    let fusion = allowedFusions[fusionKey1] || allowedFusions[fusionKey2];
    
    if (!fusion) {
        // Fusión no permitida
        displayFailedFusion(genre1, genre2);
        gameState.combinations++;
        gameState.selectedGenres = [];
        updateCauldronDisplay();
        updateFusionButton();
        updateStats();
        saveGameState();
        return;
    }
    
    // Fusión exitosa
    const isNewDiscovery = !gameState.discoveredFusions.has(fusionKey1) && !gameState.discoveredFusions.has(fusionKey2);
    
    if (isNewDiscovery) {
        gameState.discoveries++;
        gameState.discoveredFusions.add(fusionKey1);
        showNotification(fusion.discoveryMessage, 'discovery');
        
        // Desbloquear nuevo género si no está desbloqueado
        if (fusion.result && allGenres[fusion.result] && !allGenres[fusion.result].unlocked) {
            allGenres[fusion.result].unlocked = true;
            renderGenresLibrary();
        }
    }
    
    displayFusionResult(fusion, isNewDiscovery);
    gameState.combinations++;
    
    // Limpiar caldero
    gameState.selectedGenres = [];
    updateCauldronDisplay();
    updateFusionButton();
    updateStats();
    updateDiscoveriesDisplay();
    saveGameState();
}

function displayFusionResult(fusion, isNewDiscovery) {
    const resultPanel = document.getElementById('result-panel');
    const resultGenre = allGenres[fusion.result];
    
    resultPanel.innerHTML = `
        <div class="fusion-result">
            <div style="font-size: 3rem; margin-bottom: 15px;">${resultGenre.emoji}</div>
            <div class="fusion-name">${fusion.name}</div>
            <div class="fusion-description" style="margin: 15px 0;">${fusion.description}</div>
            <div style="margin-top: 15px; padding: 10px; background: hsl(43, 74%, 66%, 0.1); border-radius: 8px;">
                <strong>Comunidad:</strong> ${resultGenre.community}
            </div>
            ${isNewDiscovery ? '<div style="margin-top: 10px; color: hsl(173, 58%, 39%); font-weight: bold;">✨ ¡Nuevo Descubrimiento!</div>' : ''}
        </div>
    `;
}

function displayFailedFusion(genre1, genre2) {
    const resultPanel = document.getElementById('result-panel');
    const g1 = allGenres[genre1];
    const g2 = allGenres[genre2];
    
    const failMessages = [
        'Esta fusión musical no está documentada en la historia.',
        'Estos géneros evolucionaron en épocas o lugares diferentes.',
        'La alquimia musical necesita más investigación histórica.',
        'Tal vez necesites descubrir fusiones intermedias primero.',
        'Esta combinación espera ser descubierta por musicólogos.'
    ];
    
    resultPanel.innerHTML = `
        <div class="fusion-result failed">
            <div class="result-emoji">❓</div>
            <div class="fusion-name">Combinación No Documentada</div>
            <div class="fusion-description" style="margin: 15px 0;">
                ${g1.emoji} + ${g2.emoji} = ${failMessages[Math.floor(Math.random() * failMessages.length)]}
            </div>
            <div style="margin-top: 15px; font-size: 0.9rem; opacity: 0.8;">
                Intenta con otras combinaciones históricas
            </div>
        </div>
    `;
}

function updateStats() {
    document.getElementById('discoveries').textContent = gameState.discoveries;
    document.getElementById('combinations').textContent = gameState.combinations;
    
    // Calcular tiempo transcurrido
    const timeElapsed = Math.floor((Date.now() - gameState.startTime) / 1000 / 60);
    document.getElementById('score').textContent = `${timeElapsed} min`;
}

function updateDiscoveriesDisplay() {
    const grid = document.getElementById('discoveries-grid');
    
    if (gameState.discoveredFusions.size === 0) {
        grid.innerHTML = '<div class="discovery-placeholder"><p>¡Comienza a fusionar raíces musicales para descubrir la evolución de los géneros!</p></div>';
        return;
    }
    
    grid.innerHTML = '';
    
    gameState.discoveredFusions.forEach(fusionKey => {
        const fusion = allowedFusions[fusionKey];
        if (fusion) {
            const resultGenre = allGenres[fusion.result];
            const card = document.createElement('div');
            card.className = 'discovery-card';
            card.innerHTML = `
                <div style="font-size: 1.5rem; margin-bottom: 8px;">${resultGenre.emoji}</div>
                <div style="font-weight: bold; font-size: 0.9rem;">${fusion.name}</div>
                <div style="font-size: 0.7rem; margin-top: 5px; opacity: 0.8;">${resultGenre.community}</div>
            `;
            grid.appendChild(card);
        }
    });
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'discovery' ? 'hsl(173, 58%, 39%)' : type === 'success' ? 'hsl(43, 74%, 66%)' : 'hsl(240, 6%, 10%)'};
        color: hsl(0, 0%, 98%);
        padding: 15px 20px;
        border-radius: 8px;
        z-index: 9999;
        font-weight: bold;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        border: 1px solid hsl(240, 4%, 16%);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(10px);
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

function saveGameState() {
    localStorage.setItem('mugic-harmony-lab', JSON.stringify({
        discoveries: gameState.discoveries,
        combinations: gameState.combinations,
        discoveredFusions: Array.from(gameState.discoveredFusions),
        unlockedGenres: Object.entries(allGenres).filter(([id, genre]) => genre.unlocked).map(([id]) => id),
        startTime: gameState.startTime
    }));
}

function loadGameState() {
    const saved = localStorage.getItem('mugic-harmony-lab');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            gameState.discoveries = data.discoveries || 0;
            gameState.combinations = data.combinations || 0;
            gameState.discoveredFusions = new Set(data.discoveredFusions || []);
            gameState.startTime = data.startTime || Date.now();
            
            // Restaurar géneros desbloqueados
            if (data.unlockedGenres) {
                Object.keys(allGenres).forEach(id => {
                    allGenres[id].unlocked = data.unlockedGenres.includes(id);
                });
            }
        } catch (e) {
            console.error('Error loading game state:', e);
        }
    }
}

// Funciones globales
window.removeGenreFromCauldron = removeGenreFromCauldron;
