// ===== LABORATORIO MUSICAL - JUEGO DE FUSIÓN =====

// Base de datos de géneros musicales
const genres = [
    { id: 'jazz', name: '🎷 Jazz', emoji: '🎷' },
    { id: 'rock', name: '🎸 Rock', emoji: '🎸' },
    { id: 'blues', name: '🎵 Blues', emoji: '🎵' },
    { id: 'reggae', name: '🪘 Reggae', emoji: '🪘' },
    { id: 'electronic', name: '🎹 Electrónica', emoji: '🎹' },
    { id: 'funk', name: '🎺 Funk', emoji: '🎺' },
    { id: 'country', name: '🤠 Country', emoji: '🤠' },
    { id: 'folk', name: '🪕 Folk', emoji: '🪕' },
    { id: 'latin', name: '🎺 Latino', emoji: '🎺' },
    { id: 'hip-hop', name: '🎤 Hip Hop', emoji: '🎤' },
    { id: 'classical', name: '🎼 Clásica', emoji: '🎼' },
    { id: 'punk', name: '🏴‍☠️ Punk', emoji: '🏴‍☠️' }
];

// Base de datos de fusiones posibles
const fusions = {
    'jazz-rock': {
        name: 'Jazz Fusion',
        description: 'Una fusión revolucionaria que combina la improvisación del jazz con la energía del rock. Pioneros como Miles Davis y Weather Report crearon este género en los años 70.',
        points: 100,
        emoji: '⚡',
        isHistorical: true
    },
    'reggae-electronic': {
        name: 'Dub Techno',
        description: 'El eco espacial del reggae se encuentra con los beats electrónicos. Un género que nació en los estudios de Jamaica y conquistó las pistas de baile europeas.',
        points: 120,
        emoji: '🌊',
        isHistorical: true
    },
    'folk-rock': {
        name: 'Folk Rock',
        description: 'Bob Dylan enchufó su guitarra eléctrica y cambió la música para siempre. La narrativa del folk con la potencia del rock eléctrico.',
        points: 110,
        emoji: '🔌',
        isHistorical: true
    },
    'blues-electronic': {
        name: 'Electronic Blues',
        description: 'Los lamentos del blues se digitalizan. Sintetizadores que lloran como armónicas, beats que laten como corazones rotos.',
        points: 90,
        emoji: '💙',
        isHistorical: false
    },
    'jazz-electronic': {
        name: 'Nu Jazz',
        description: 'El jazz abraza la era digital. DJs samplean a Miles Davis, algoritmos improvisan solos. El futuro del jazz está aquí.',
        points: 130,
        emoji: '🤖',
        isHistorical: true
    },
    'hip-hop-jazz': {
        name: 'Jazz Rap',
        description: 'Tribe Called Quest y Gang Starr mezclaron samples de jazz con rimas conscientes. El hip hop intelectual nació en los 90.',
        points: 140,
        emoji: '🎭',
        isHistorical: true
    },
    'punk-reggae': {
        name: 'Punk Reggae',
        description: 'La rebeldía punk se encuentra con el mensaje rastafari. The Clash lo hizo famoso, pero las raíces van más profundo.',
        points: 95,
        emoji: '🔥',
        isHistorical: true
    },
    'country-hip-hop': {
        name: 'Country Rap',
        description: 'Camiones, tractores y beats. El sur profundo se encuentra con la cultura urbana. Lil Nas X abrió las compuertas.',
        points: 85,
        emoji: '🚜',
        isHistorical: true
    },
    'classical-electronic': {
        name: 'Electro-Classical',
        description: 'Beethoven meets Kraftwerk. Sinfonías programadas, conciertos sin músicos. La música clásica reimaginada para el siglo XXI.',
        points: 150,
        emoji: '🎭',
        isHistorical: true
    },
    'funk-hip-hop': {
        name: 'G-Funk',
        description: 'Dr. Dre tomó el funk de George Clinton y lo transformó en el sonido de la costa oeste. Snoop Dogg navegó estas aguas.',
        points: 125,
        emoji: '🌴',
        isHistorical: true
    },
    'latin-jazz': {
        name: 'Latin Jazz',
        description: 'Ritmos afrocubanos abrazan la improvisación del jazz. Tito Puente y Machito crearon un lenguaje musical universal.',
        points: 115,
        emoji: '🔥',
        isHistorical: true
    },
    'rock-electronic': {
        name: 'Industrial Rock',
        description: 'Guitarras distorsionadas se fusionan con máquinas. Nine Inch Nails y Ministry crearon soundtracks para el apocalipsis tecnológico.',
        points: 105,
        emoji: '⚙️',
        isHistorical: true
    }
};

// Estado del juego
let gameState = {
    score: 0,
    discoveries: 0,
    combinations: 0,
    selectedGenres: [],
    discoveredFusions: new Set()
};

// Inicializar el juego
document.addEventListener('DOMContentLoaded', function() {
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
    library.innerHTML = '';
    
    genres.forEach(genre => {
        const genreCard = document.createElement('div');
        genreCard.className = 'genre-card';
        genreCard.draggable = true;
        genreCard.dataset.genreId = genre.id;
        genreCard.innerHTML = `${genre.emoji} ${genre.name.split(' ')[1]}`;
        
        // Event listeners para drag & drop
        genreCard.addEventListener('dragstart', handleDragStart);
        genreCard.addEventListener('dragend', handleDragEnd);
        
        // Event listener para click (móviles)
        genreCard.addEventListener('click', handleGenreClick);
        
        library.appendChild(genreCard);
    });
}

function setupEventListeners() {
    const cauldron = document.getElementById('fusion-cauldron');
    const fusionBtn = document.getElementById('fusion-btn');
    
    // Drag & Drop para el caldero
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
    const genreId = e.target.dataset.genreId;
    addGenreToCauldron(genreId);
}

function addGenreToCauldron(genreId) {
    if (gameState.selectedGenres.length >= 2) {
        showMessage('¡Solo puedes combinar 2 géneros a la vez!', 'warning');
        return;
    }
    
    if (gameState.selectedGenres.includes(genreId)) {
        showMessage('¡Este género ya está en el caldero!', 'warning');
        return;
    }
    
    gameState.selectedGenres.push(genreId);
    updateCauldronDisplay();
    updateFusionButton();
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
        const genre = genres.find(g => g.id === genreId);
        const genreElement = document.createElement('div');
        genreElement.className = 'selected-genre';
        genreElement.innerHTML = `
            ${genre.emoji} ${genre.name.split(' ')[1]}
            <button class="remove-genre" onclick="removeGenreFromCauldron('${genreId}')">×</button>
        `;
        selectedGenresContainer.appendChild(genreElement);
    });
}

function updateFusionButton() {
    const fusionBtn = document.getElementById('fusion-btn');
    fusionBtn.disabled = gameState.selectedGenres.length !== 2;
}

function createFusion() {
    if (gameState.selectedGenres.length !== 2) return;
    
    const [genre1, genre2] = gameState.selectedGenres;
    const fusionKey1 = `${genre1}-${genre2}`;
    const fusionKey2 = `${genre2}-${genre1}`;
    
    let fusion = fusions[fusionKey1] || fusions[fusionKey2];
    
    if (!fusion) {
        // Fusión experimental (no histórica)
        fusion = createExperimentalFusion(genre1, genre2);
    }
    
    displayFusionResult(fusion, fusionKey1);
    updateScore(fusion.points);
    gameState.combinations++;
    
    if (!gameState.discoveredFusions.has(fusionKey1) && !gameState.discoveredFusions.has(fusionKey2)) {
        gameState.discoveries++;
        gameState.discoveredFusions.add(fusionKey1);
        updateDiscoveriesDisplay();
    }
    
    // Limpiar caldero
    gameState.selectedGenres = [];
    updateCauldronDisplay();
    updateFusionButton();
    updateStats();
}

function createExperimentalFusion(genre1, genre2) {
    const g1 = genres.find(g => g.id === genre1);
    const g2 = genres.find(g => g.id === genre2);
    
    const experimentalNames = [
        `${g1.name.split(' ')[1]}-${g2.name.split(' ')[1]}`,
        `Neo ${g1.name.split(' ')[1]}`,
        `${g2.name.split(' ')[1]} Fusion`,
        `Alternative ${g1.name.split(' ')[1]}`
    ];
    
    const experimentalDescriptions = [
        `Una fusión experimental que combina elementos de ${g1.name.split(' ')[1].toLowerCase()} y ${g2.name.split(' ')[1].toLowerCase()}. ¡Un territorio musical inexplorado!`,
        `Los límites se difuminan cuando ${g1.name.split(' ')[1].toLowerCase()} se encuentra con ${g2.name.split(' ')[1].toLowerCase()}. Una combinación única y arriesgada.`,
        `¿Qué pasaría si mezclas ${g1.name.split(' ')[1].toLowerCase()} con ${g2.name.split(' ')[1].toLowerCase()}? Esta fusión experimental explora nuevas posibilidades sónicas.`
    ];
    
    return {
        name: experimentalNames[Math.floor(Math.random() * experimentalNames.length)],
        description: experimentalDescriptions[Math.floor(Math.random() * experimentalDescriptions.length)],
        points: 50,
        emoji: '🧪',
        isHistorical: false
    };
}

function displayFusionResult(fusion, fusionKey) {
    const resultPanel = document.getElementById('result-panel');
    const historicalBadge = fusion.isHistorical ? '<span style="background: #4CAF50; color: white; padding: 2px 8px; border-radius: 10px; font-size: 0.7rem;">HISTÓRICO</span>' : '<span style="background: #FF9800; color: white; padding: 2px 8px; border-radius: 10px; font-size: 0.7rem;">EXPERIMENTAL</span>';
    
    resultPanel.innerHTML = `
        <div class="fusion-result">
            <div class="result-emoji">${fusion.emoji}</div>
            <div class="fusion-name">${fusion.name}</div>
            <div style="margin-bottom: 10px;">${historicalBadge}</div>
            <div class="fusion-description">${fusion.description}</div>
            <div class="fusion-points">+${fusion.points} puntos</div>
        </div>
    `;
}

function updateScore(points) {
    gameState.score += points;
}

function updateStats() {
    document.getElementById('score').textContent = gameState.score;
    document.getElementById('discoveries').textContent = gameState.discoveries;
    document.getElementById('combinations').textContent = gameState.combinations;
}

function updateDiscoveriesDisplay() {
    const grid = document.getElementById('discoveries-grid');
    
    if (gameState.discoveredFusions.size === 0) {
        grid.innerHTML = '<div class="discovery-placeholder"><p>¡Empieza a combinar géneros para hacer descubrimientos!</p></div>';
        return;
    }
    
    grid.innerHTML = '';
    
    gameState.discoveredFusions.forEach(fusionKey => {
        const fusion = fusions[fusionKey] || { name: 'Fusión Experimental', emoji: '🧪' };
        const card = document.createElement('div');
        card.className = 'discovery-card';
        card.innerHTML = `
            <div style="font-size: 1.5rem; margin-bottom: 8px;">${fusion.emoji}</div>
            <div style="font-weight: bold;">${fusion.name}</div>
        `;
        grid.appendChild(card);
    });
}

function showMessage(message, type = 'info') {
    // Simple alert por ahora - podríamos mejorarlo con notificaciones más elegantes
    alert(message);
}

// Hacer funciones globales para los event handlers inline
window.removeGenreFromCauldron = removeGenreFromCauldron;