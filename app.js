/* CAPDEX Application Logic */

// Default Specimen Database
const DEFAULT_SPECIMENS = [
    {
        id: "blue-morpho",
        name: "Blue Morpho Butterfly",
        scientificName: "Morpho menelaus",
        category: "Insect",
        rarity: "Epic",
        rating: 8.4,
        image: "https://images.unsplash.com/photo-1590005354167-6da97870c913?auto=format&fit=crop&w=600&q=80",
        habitat: "Tropical rainforest canopy and understory",
        diet: "Fermenting fruit juices, tree sap, decomposing matter",
        whereToFind: "Lowland forests of Central and South America. Look around muddy riverbanks during warm, sunny mornings.",
        latitude: 41.22,
        longitude: -124.01,
        scannedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString() // 2 hours ago
    },
    {
        id: "aurelian-orchid",
        name: "Aurelian Orchid",
        scientificName: "Lumina flora",
        category: "Flower",
        rarity: "Epic",
        rating: 9.8,
        image: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=600&q=80",
        habitat: "Deep misty valleys and high cloud forests",
        diet: "Nutrients from air currents, condensation, and decaying tree bark",
        whereToFind: "High-altitude cloud forests. Grows epiphytically on mossy branches of ancient trees.",
        latitude: -18.29,
        longitude: 147.70,
        scannedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString() // 1 day ago
    },
    {
        id: "silver-jade",
        name: "Silver Jade succulent",
        scientificName: "Crassula arborescens",
        category: "Plant",
        rarity: "Common",
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80",
        habitat: "Sunny rocky hillsides and arid scrublands",
        diet: "Mineral-rich dry soils, minimal rain water, and intense sunlight",
        whereToFind: "Dry, south-facing rock formations or gravelly hills. Common in residential botanical gardens.",
        latitude: 25.05,
        longitude: 13.02,
        scannedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString() // 3 days ago
    },
    {
        id: "blue-jay",
        name: "Blue Jay",
        scientificName: "Cyanocitta cristata",
        category: "Bird",
        rarity: "Rare",
        rating: 8.4,
        image: "https://images.unsplash.com/photo-1480044965905-02098d419e96?auto=format&fit=crop&w=600&q=80",
        habitat: "Deciduous, coniferous, and mixed woodlands, suburban parks",
        diet: "Acorns, seeds, wild fruits, beetles, grasshoppers, caterpillars",
        whereToFind: "Woodland edges and oak trees. Can be easily spotted near backyard bird feeders, especially during winter.",
        latitude: 46.58,
        longitude: 7.66,
        scannedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString() // 4 days ago
    },
    {
        id: "emerald-beetle",
        name: "Emerald Beetle",
        scientificName: "Protaetia speciosa",
        category: "Insect",
        rarity: "Epic",
        rating: 9.5,
        image: "https://images.unsplash.com/photo-1615985160867-0c1b7596ff1a?auto=format&fit=crop&w=600&q=80",
        habitat: "Ancient broadleaf forests and rotten oak logs",
        diet: "Fermenting tree sap flow, ripe sweet fruits, and nectar",
        whereToFind: "Near old, sap-bleeding oak or beech trees. Best found during warm summer evenings on tree trunks.",
        latitude: 41.20,
        longitude: -124.03,
        scannedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString() // 5 days ago
    },
    {
        id: "ember-paws",
        name: "Ember Paws (Red Panda)",
        scientificName: "Ailurus fulgens",
        category: "Animal",
        rarity: "Epic",
        rating: 9.9,
        image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=600&q=80",
        habitat: "High-altitude temperate coniferous and bamboo forests",
        diet: "Bamboo shoots and leaves, acorns, mushrooms, berries",
        whereToFind: "Steep slopes in mountain forests with dense bamboo understory. Often rests high in tree branches during the day.",
        latitude: 46.56,
        longitude: 7.64,
        scannedAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString() // 8 days ago
    },
    {
        id: "forest-fern",
        name: "Forest Fern",
        scientificName: "Matteuccia struthiopteris",
        category: "Plant",
        rarity: "Common",
        rating: 5.5,
        image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=600&q=80",
        habitat: "Damp river valleys, swamps, and rich forest understories",
        diet: "Shade moisture, fertile damp leaf mold soils",
        whereToFind: "Look in dense forest glades, particularly near stream banks or wetlands under deep forest cover.",
        latitude: 41.24,
        longitude: -124.05,
        scannedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString()
    }
];

// Preset specimens that are "undiscovered" but can be scanned/simulated
const UNDISCOVERED_PRESETS = [
    {
        name: "Scarlet Macaw",
        scientificName: "Ara macao",
        category: "Bird",
        rarity: "Epic",
        rating: 9.7,
        image: "https://images.unsplash.com/photo-1552728089-57bdde30ebd3?auto=format&fit=crop&w=600&q=80",
        habitat: "Humid evergreen forests",
        diet: "Seeds, fruits, nuts, nectar, and clay from riverbanks",
        whereToFind: "Canopy of tall trees in tropical rainforests. Frequently visits clay licks."
    },
    {
        name: "Stag Beetle",
        scientificName: "Lucanus cervus",
        category: "Insect",
        rarity: "Rare",
        rating: 7.8,
        image: "https://images.unsplash.com/photo-1626548307930-deac221f87d9?auto=format&fit=crop&w=600&q=80",
        habitat: "Broadleaf woodland, oak forests, parks, and gardens",
        diet: "Decaying wood, tree sap, sweet fruit juice",
        whereToFind: "Under rotting logs or on tree trunks bleeding sap, in summer evening twilight."
    },
    {
        name: "Fly Agaric Mushroom",
        scientificName: "Amanita muscaria",
        category: "Plant", // Or Fungus, categorized under Plant for simplicity
        rarity: "Rare",
        rating: 8.9,
        image: "https://images.unsplash.com/photo-1508280756771-34adc55f58aa?auto=format&fit=crop&w=600&q=80",
        habitat: "Birch, pine, and spruce woodlands",
        diet: "Symbiotic relationship with host tree roots (mycorrhizal)",
        whereToFind: "Under birch or pine trees during autumn months, growing in mossy soil."
    },
    {
        name: "Fennec Fox",
        scientificName: "Vulpes zerda",
        category: "Animal",
        rarity: "Epic",
        rating: 9.6,
        image: "https://images.unsplash.com/photo-1574068468668-a05a11f871da?auto=format&fit=crop&w=600&q=80",
        habitat: "Arid deserts and sandy dunes",
        diet: "Insects, small rodents, lizards, birds, and eggs",
        whereToFind: "Sandy desert dunes, resting inside deep underground burrows during hot daytime hours."
    },
    {
        name: "Giant Oak Tree",
        scientificName: "Quercus robur",
        category: "Tree",
        rarity: "Common",
        rating: 6.2,
        image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
        habitat: "Temperate deciduous forests, pastures, and parklands",
        diet: "Solar energy, ground water, carbon dioxide",
        whereToFind: "Open meadows, ancient forests, and country lanes."
    },
    {
        name: "Wild Strawberry",
        scientificName: "Fragaria vesca",
        category: "Fruit",
        rarity: "Common",
        rating: 5.1,
        image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=600&q=80",
        habitat: "Forest edges, clearing borders, and grassy banks",
        diet: "Sunlight, moist soil, pollinator visitation",
        whereToFind: "Along sunny hiking path borders and woodland clearings in late spring."
    }
];

// App State
let state = {
    specimens: [],
    activeTab: "dashboard", // dashboard, collection, scan, map, detail
    activeSpecimenId: null,
    filters: {
        search: "",
        category: "All",
        rarity: "All",
        sort: "newest"
    },
    cameraActive: false,
    cameraStream: null,
    mapState: {
        zoom: 1,
        panX: 0,
        panY: 0,
        selectedMarkerSpecimen: null,
        filters: {
            search: "",
            category: "All"
        }
    }
};

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
    loadDatabase();
    bindNavigation();
    bindFilters();
    bindScanActions();
    bindMapInteraction();
    
    // Initial Render
    renderActiveTab();
});

// Database Management
function loadDatabase() {
    const saved = localStorage.getItem("capdex_specimens");
    if (saved) {
        try {
            state.specimens = JSON.parse(saved);
        } catch (e) {
            console.error("Failed to parse saved specimens, resetting", e);
            state.specimens = [...DEFAULT_SPECIMENS];
        }
    } else {
        state.specimens = [...DEFAULT_SPECIMENS];
        saveDatabase();
    }
}

function saveDatabase() {
    localStorage.setItem("capdex_specimens", JSON.stringify(state.specimens));
}

function addSpecimen(specimen) {
    state.specimens.unshift(specimen); // Add to beginning
    saveDatabase();
    // Re-render
    renderActiveTab();
}

function removeSpecimen(id) {
    state.specimens = state.specimens.filter(s => s.id !== id);
    saveDatabase();
    navigateTo("collection");
}

// Navigation Router
function navigateTo(tabId, specimenId = null) {
    window.navigateTo = navigateTo; // Ensure globally exposed

    // Close camera stream if moving away from scan
    if (state.activeTab === "scan" && tabId !== "scan") {
        stopCamera();
    }
    
    state.activeTab = tabId;
    if (specimenId) {
        state.activeSpecimenId = specimenId;
    }
    
    renderActiveTab();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function bindNavigation() {
    // Sidebar nav links
    document.querySelectorAll("aside nav a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const tab = link.getAttribute("data-tab");
            if (tab) navigateTo(tab);
        });
    });

    // Mobile nav links
    document.querySelectorAll("nav.mobile-nav a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const tab = link.getAttribute("data-tab");
            if (tab) navigateTo(tab);
        });
    });

    // FAB Scan buttons
    document.querySelectorAll(".btn-new-scan").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            navigateTo("scan");
        });
    });

    // Dashboard navigation helpers
    const seeAllBtn = document.getElementById("btn-see-all-collection");
    if (seeAllBtn) {
        seeAllBtn.addEventListener("click", () => {
            state.filters.category = "All";
            navigateTo("collection");
        });
    }
    
    document.getElementById("btn-open-map-glimpse").addEventListener("click", () => {
        navigateTo("map");
    });
}

// Tab Renderer Coordinator
function renderActiveTab() {
    // Update active visual state in nav links
    updateNavUI();

    // Toggle Tab view displays
    document.querySelectorAll(".view-tab").forEach(tabView => {
        if (tabView.id === `tab-${state.activeTab}`) {
            tabView.classList.add("active");
        } else {
            tabView.classList.remove("active");
        }
    });

    // Invoke specific tab sub-renders
    switch (state.activeTab) {
        case "dashboard":
            renderDashboard();
            break;
        case "collection":
            renderCollection();
            break;
        case "scan":
            renderScan();
            break;
        case "map":
            renderMap();
            break;
        case "detail":
            renderDetail();
            break;
    }
}

function updateNavUI() {
    const activeClass = "bg-secondary-container text-on-secondary-container font-bold translate-x-1";
    const inactiveClass = "text-on-surface-variant hover:bg-surface-variant/50";
    
    // Desktop Nav
    document.querySelectorAll("aside nav a").forEach(link => {
        const tab = link.getAttribute("data-tab");
        const icon = link.querySelector("span.material-symbols-outlined");
        
        if (tab === state.activeTab || (state.activeTab === "detail" && tab === "collection")) {
            link.className = `flex items-center gap-3 px-4 py-3 rounded-xl transition-transform ${activeClass}`;
            if (icon) icon.classList.add("material-symbols-fill");
        } else {
            link.className = `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${inactiveClass}`;
            if (icon) icon.classList.remove("material-symbols-fill");
        }
    });

    // Mobile Nav
    document.querySelectorAll("nav.mobile-nav a").forEach(link => {
        const tab = link.getAttribute("data-tab");
        
        if (tab === state.activeTab || (state.activeTab === "detail" && tab === "collection")) {
            link.className = "flex flex-col items-center justify-center text-primary font-bold transition-transform scale-105";
            const badge = link.querySelector(".nav-badge");
            if (badge) {
                badge.className = "nav-badge bg-secondary-container text-on-secondary-container rounded-full w-12 h-12 flex items-center justify-center shadow-inner scale-90";
            }
            const icon = link.querySelector("span.material-symbols-outlined");
            if (icon) icon.classList.add("material-symbols-fill");
        } else {
            link.className = "flex flex-col items-center justify-center text-on-surface-variant hover:scale-110 transition-transform";
            const badge = link.querySelector(".nav-badge");
            if (badge) {
                badge.className = "nav-badge rounded-full w-12 h-12 flex items-center justify-center";
            }
            const icon = link.querySelector("span.material-symbols-outlined");
            if (icon) icon.classList.remove("material-symbols-fill");
        }
    });
}

// ==========================================
// 1. DASHBOARD TAB RENDER
// ==========================================
function renderDashboard() {
    // Dynamic Stats calculations
    const totalCount = state.specimens.length;
    
    // Calculate total rarity score
    // Epic = 100, Rare = 50, Common = 20
    let rarityScore = 0;
    state.specimens.forEach(s => {
        if (s.rarity === "Epic") rarityScore += 100;
        else if (s.rarity === "Rare") rarityScore += 50;
        else rarityScore += 20;
    });

    // World Ranking: Dynamic calculation based on rarity score
    // Rarity score 500+ is top 100, etc.
    let ranking = "#999+";
    if (rarityScore > 600) ranking = "#12";
    else if (rarityScore > 450) ranking = "#42";
    else if (rarityScore > 300) ranking = "#156";
    else if (rarityScore > 150) ranking = "#489";
    else if (rarityScore > 0) ranking = "#891";

    document.getElementById("stat-total-scanned").textContent = totalCount.toLocaleString();
    document.getElementById("stat-rarity-score").textContent = rarityScore.toLocaleString();
    document.getElementById("stat-world-ranking").textContent = ranking;

    // Latest Specimen Hero Card
    const latest = state.specimens[0];
    const heroCardContainer = document.getElementById("dashboard-hero-container");
    
    if (latest) {
        let rarityBadgeClass = "rarity-common";
        if (latest.rarity === "Rare") rarityBadgeClass = "rarity-rare";
        else if (latest.rarity === "Epic") rarityBadgeClass = "rarity-epic rarity-epic-glow";

        heroCardContainer.innerHTML = `
            <div class="clay-card p-8 relative overflow-hidden group">
                <div class="absolute top-0 right-0 p-6 z-20">
                    <span class="px-4 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-widest ${rarityBadgeClass}">${latest.rarity} Discovery</span>
                </div>
                <div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
                    <div class="w-48 h-48 md:w-60 md:h-60 relative flex items-center justify-center shrink-0">
                        <div class="absolute inset-0 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
                        <img class="w-full h-full object-contain relative z-10 drop-shadow-2xl group-hover:scale-105 transition-transform duration-500 rounded-2xl" src="${latest.image}" alt="${latest.name}" />
                    </div>
                    <div class="flex-1 text-center md:text-left">
                        <h3 class="font-display-lg text-display-lg text-on-surface mb-1">${latest.name}</h3>
                        <p class="text-secondary font-semibold italic mb-4">${latest.scientificName}</p>
                        <div class="flex flex-wrap gap-4 justify-center md:justify-start">
                            <div class="glass-panel px-4 py-2 rounded-2xl flex flex-col items-center">
                                <span class="text-label-sm font-label-sm text-outline uppercase">Biome</span>
                                <span class="font-title-md text-title-md text-on-surface truncate max-w-[120px]">${latest.habitat.split(',')[0]}</span>
                            </div>
                            <div class="glass-panel px-4 py-2 rounded-2xl flex flex-col items-center">
                                <span class="text-label-sm font-label-sm text-outline uppercase">Rating</span>
                                <span class="font-title-md text-title-md text-on-surface flex items-center gap-1">
                                    <span class="material-symbols-outlined text-[16px] text-secondary material-symbols-fill">star</span>
                                    ${latest.rating}
                                </span>
                            </div>
                            <div class="glass-panel px-4 py-2 rounded-2xl flex flex-col items-center">
                                <span class="text-label-sm font-label-sm text-outline uppercase">Scanned</span>
                                <span class="font-title-md text-title-md text-on-surface">${formatRelativeTime(latest.scannedAt)}</span>
                            </div>
                        </div>
                        <button id="btn-hero-view-details" class="mt-8 px-8 py-3 bg-secondary text-on-secondary rounded-full font-bold shadow-md active:scale-95 transition-transform flex items-center justify-center gap-2 mx-auto md:mx-0">
                            View Details <span class="material-symbols-outlined">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.getElementById("btn-hero-view-details").addEventListener("click", () => {
            navigateTo("detail", latest.id);
        });
    } else {
        // Fallback if no specimens
        heroCardContainer.innerHTML = `
            <div class="clay-card p-8 text-center flex flex-col items-center justify-center">
                <span class="material-symbols-outlined text-6xl text-outline mb-4">search_insights</span>
                <h3 class="font-headline-lg text-headline-lg text-primary mb-2">No Specimens Scanned Yet</h3>
                <p class="text-on-surface-variant max-w-md mb-6">Your CAPDEX is empty. Scan natural objects around you (animals, trees, birds, insects) to build your biological logbook!</p>
                <button class="px-8 py-3 bg-secondary text-on-secondary rounded-full font-bold shadow-md active:scale-95 transition-transform flex items-center gap-2 btn-new-scan">
                    <span class="material-symbols-outlined">photo_camera</span> Start First Scan
                </button>
            </div>
        `;
        
        heroCardContainer.querySelector(".btn-new-scan").addEventListener("click", () => navigateTo("scan"));
    }

    // Category Counters Render
    const categories = ["Plant", "Animal", "Bird", "Insect"];
    categories.forEach(cat => {
        const count = state.specimens.filter(s => s.category === cat).length;
        const countEl = document.getElementById(`count-cat-${cat.toLowerCase()}`);
        if (countEl) countEl.textContent = `${count} Found`;
        
        // Add click listener
        const wrapper = document.getElementById(`cat-wrapper-${cat.toLowerCase()}`);
        if (wrapper) {
            // Remove old listeners by replacing element or cloning
            const newWrapper = wrapper.cloneNode(true);
            wrapper.parentNode.replaceChild(newWrapper, wrapper);
            newWrapper.addEventListener("click", () => {
                state.filters.category = cat;
                // update collection category select input
                document.getElementById("filter-category").value = cat;
                navigateTo("collection");
            });
        }
    });

    // Map Glimpse Sub-text
    const nearSpecimensCount = state.specimens.length > 3 ? 4 : state.specimens.length;
    document.getElementById("map-glimpse-text").textContent = `${nearSpecimensCount} Rare specimens spotted in your current biome.`;
}

// ==========================================
// 2. COLLECTION GALLERY TAB RENDER
// ==========================================
function renderCollection() {
    const grid = document.getElementById("collection-grid");
    
    // Apply filters and sorting
    let filtered = state.specimens.filter(item => {
        // Search query check
        const matchesSearch = item.name.toLowerCase().includes(state.filters.search.toLowerCase()) || 
                             item.scientificName.toLowerCase().includes(state.filters.search.toLowerCase());
        
        // Category check
        const matchesCategory = state.filters.category === "All" || item.category === state.filters.category;
        
        // Rarity check
        const matchesRarity = state.filters.rarity === "All" || item.rarity === state.filters.rarity;
        
        return matchesSearch && matchesCategory && matchesRarity;
    });

    // Apply Sorting
    filtered.sort((a, b) => {
        if (state.filters.sort === "newest") {
            return new Date(b.scannedAt) - new Date(a.scannedAt);
        } else if (state.filters.sort === "rating") {
            return b.rating - a.rating;
        } else if (state.filters.sort === "rarity") {
            const priority = { "Epic": 3, "Rare": 2, "Common": 1 };
            return priority[b.rarity] - priority[a.rarity];
        }
        return 0;
    });

    // Update result counter
    document.getElementById("collection-season-count").textContent = `${filtered.length} specimens discovered.`;

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full py-16 text-center flex flex-col items-center justify-center">
                <span class="material-symbols-outlined text-5xl text-outline mb-4">search_off</span>
                <p class="font-title-md text-title-md text-on-surface-variant mb-2">No specimens match your filters</p>
                <p class="text-sm text-outline">Try adjustments to your search string or select filters.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(item => {
        let rarityBadgeClass = "rarity-common";
        if (item.rarity === "Rare") rarityBadgeClass = "rarity-rare";
        else if (item.rarity === "Epic") rarityBadgeClass = "rarity-epic rarity-epic-glow";

        return `
            <div class="clay-card clay-card-interactive relative group flex flex-col p-6 h-[410px] cursor-pointer" data-id="${item.id}">
                <div class="absolute top-4 right-4 ${rarityBadgeClass} px-3 py-1 rounded-full text-white text-[10px] font-bold tracking-widest uppercase shadow-lg z-20">${item.rarity}</div>
                <div class="flex-1 flex items-center justify-center relative min-h-0">
                    <div class="absolute inset-0 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <img class="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500 z-10 rounded-2xl" src="${item.image}" alt="${item.name}" />
                </div>
                <div class="glass-panel rounded-2xl p-4 mt-4 relative z-20">
                    <div class="flex justify-between items-start gap-2 mb-1">
                        <h3 class="font-title-md text-title-md text-primary truncate" title="${item.name}">${item.name}</h3>
                        <div class="flex items-center gap-1 bg-secondary-container px-2 py-0.5 rounded text-on-secondary-container shrink-0">
                            <span class="material-symbols-outlined text-[13px] text-secondary material-symbols-fill">star</span>
                            <span class="font-label-sm text-label-sm">${item.rating}</span>
                        </div>
                    </div>
                    <p class="font-body-md text-body-md text-on-surface-variant truncate">${item.scientificName}</p>
                </div>
            </div>
        `;
    }).join("");

    // Add click listeners to cards
    grid.querySelectorAll("[data-id]").forEach(card => {
        card.addEventListener("click", () => {
            const id = card.getAttribute("data-id");
            navigateTo("detail", id);
        });
    });
}

function bindFilters() {
    const searchInput = document.getElementById("search-input");
    const categorySelect = document.getElementById("filter-category");
    const raritySelect = document.getElementById("filter-rarity");
    const sortSelect = document.getElementById("filter-sort");

    searchInput.addEventListener("input", (e) => {
        state.filters.search = e.target.value;
        renderCollection();
    });

    categorySelect.addEventListener("change", (e) => {
        state.filters.category = e.target.value;
        renderCollection();
    });

    raritySelect.addEventListener("change", (e) => {
        state.filters.rarity = e.target.value;
        renderCollection();
    });

    sortSelect.addEventListener("change", (e) => {
        state.filters.sort = e.target.value;
        renderCollection();
    });
}

// ==========================================
// 3. SCAN IDENTIFY TAB RENDER
// ==========================================
function renderScan() {
    // Fill preset simulation list
    const presetGrid = document.getElementById("scan-preset-grid");
    presetGrid.innerHTML = UNDISCOVERED_PRESETS.map((p, idx) => {
        let badgeClass = "bg-slate-500";
        if (p.rarity === "Rare") badgeClass = "bg-sky-600";
        else if (p.rarity === "Epic") badgeClass = "bg-violet-600";

        return `
            <div class="clay-card clay-card-interactive p-4 flex flex-col items-center gap-2 cursor-pointer text-center" data-preset-idx="${idx}">
                <div class="w-20 h-20 bg-surface-container rounded-full overflow-hidden p-1 relative shadow-inner">
                    <img class="w-full h-full object-cover rounded-full" src="${p.image}" alt="${p.name}" />
                    <span class="absolute top-0 right-0 ${badgeClass} text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full uppercase">${p.rarity}</span>
                </div>
                <div>
                    <h4 class="font-title-md text-[14px] text-on-surface leading-tight truncate max-w-[120px]">${p.name}</h4>
                    <p class="text-[10px] text-secondary font-semibold italic mt-0.5">${p.category}</p>
                </div>
            </div>
        `;
    }).join("");

    // Add click handlers to presets
    presetGrid.querySelectorAll("[data-preset-idx]").forEach(card => {
        card.addEventListener("click", () => {
            const idx = card.getAttribute("data-preset-idx");
            triggerScanSimulation(UNDISCOVERED_PRESETS[idx]);
        });
    });

    // Custom upload scanning triggers
    document.getElementById("scan-image-upload").addEventListener("change", handleCustomImageUpload);
}

// Camera control helper
// Camera control helper
async function startCamera() {
    const video = document.getElementById("scanner-video");
    const placeholder = document.getElementById("camera-placeholder");

    state.cameraActive = true;

    try {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            throw new Error("getUserMedia is not supported or security context is missing");
        }
        const stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "environment" },
            audio: false
        });
        state.cameraStream = stream;
        video.srcObject = stream;
        video.play();
        
        video.classList.remove("hidden");
        placeholder.classList.add("hidden");
        document.getElementById("btn-toggle-camera").textContent = "Stop Camera";
        showNotification("Webcam stream started successfully!");
    } catch (err) {
        console.warn("Camera access denied or not supported. Using simulation fallback.", err);
        video.classList.add("hidden");
        placeholder.classList.remove("hidden");
        document.getElementById("btn-toggle-camera").textContent = "Start Camera";
        showNotification("Camera offline. Simulated capture mode active.");
    }
}

function stopCamera() {
    state.cameraActive = false;
    const video = document.getElementById("scanner-video");
    if (state.cameraStream) {
        state.cameraStream.getTracks().forEach(track => track.stop());
        state.cameraStream = null;
    }
    if (video) video.srcObject = null;
    
    const placeholder = document.getElementById("camera-placeholder");
    if (placeholder) placeholder.classList.remove("hidden");
    if (video) video.classList.add("hidden");
    
    const btn = document.getElementById("btn-toggle-camera");
    if (btn) btn.textContent = "Start Camera";
}

function bindScanActions() {
    // Camera toggle
    document.getElementById("btn-toggle-camera").addEventListener("click", () => {
        if (state.cameraActive) {
            stopCamera();
        } else {
            startCamera();
        }
    });

    // Scan triggering action
    document.getElementById("btn-scan-trigger").addEventListener("click", () => {
        // If camera is running, capture the image frame and scan it as a new animal/plant
        if (state.cameraActive && state.cameraStream) {
            captureFromCamera();
        } else {
            // Fallback simulation: select a random beautiful nature asset and proceed with scan workflow
            showNotification("Camera offline. Simulating capture frame...");
            const simulatedPhotos = [
                "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80", // Deer
                "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=600&q=80", // Red Panda
                "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80", // Woodlands
                "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80", // Oak
                "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=600&q=80", // Orchid
                "https://images.unsplash.com/photo-1590005354167-6da97870c913?auto=format&fit=crop&w=600&q=80"  // Blue Morpho
            ];
            const randomPhoto = simulatedPhotos[Math.floor(Math.random() * simulatedPhotos.length)];
            setTimeout(() => {
                showCustomClassifyModal(randomPhoto);
            }, 600);
        }
    });
}

function captureFromCamera() {
    const video = document.getElementById("scanner-video");
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;
    
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL("image/webp");

    stopCamera();

    // Trigger user classifier dialog with captured image
    showCustomClassifyModal(dataUrl);
}

// Convert EXIF degrees/minutes/seconds to decimal degrees
function convertEXIFToDecimal(gpsMinSec, ref) {
    if (!gpsMinSec || gpsMinSec.length < 3) return null;
    
    const getVal = (v) => {
        if (typeof v === "object" && v.numerator !== undefined && v.denominator !== undefined) {
            return v.numerator / v.denominator;
        }
        return parseFloat(v);
    };

    const deg = getVal(gpsMinSec[0]);
    const min = getVal(gpsMinSec[1]);
    const sec = getVal(gpsMinSec[2]);

    let decimal = deg + (min / 60.0) + (sec / 3600.0);
    if (ref === "S" || ref === "W") {
        decimal = -decimal;
    }
    return decimal;
}

function handleCustomImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    // Use EXIF-js to extract metadata
    EXIF.getData(file, function() {
        const latRef = EXIF.getTag(this, "GPSLatitudeRef");
        const latVal = EXIF.getTag(this, "GPSLatitude");
        const lngRef = EXIF.getTag(this, "GPSLongitudeRef");
        const lngVal = EXIF.getTag(this, "GPSLongitude");

        let latitude = null;
        let longitude = null;

        if (latVal && lngVal) {
            latitude = convertEXIFToDecimal(latVal, latRef);
            longitude = convertEXIFToDecimal(lngVal, lngRef);
            console.log("Extracted GPS from EXIF:", latitude, longitude);
        }

        const reader = new FileReader();
        reader.onload = (event) => {
            showCustomClassifyModal(event.target.result, latitude, longitude);
        };
        reader.readAsDataURL(file);
    });
}

// Shows modal allowing user to specify the details of the custom object they scanned
function showCustomClassifyModal(imgSrc, latitude = null, longitude = null) {
    const modal = document.getElementById("classify-modal");
    document.getElementById("classify-preview-img").src = imgSrc;
    
    // Clear inputs
    document.getElementById("classify-input-name").value = "";
    document.getElementById("classify-select-category").value = "Plant";

    modal.classList.remove("hidden");
    modal.classList.add("flex");

    // Clear old button listeners
    const btnSubmit = document.getElementById("classify-btn-submit");
    const btnCancel = document.getElementById("classify-btn-cancel");
    
    const newSubmit = btnSubmit.cloneNode(true);
    const newCancel = btnCancel.cloneNode(true);
    
    btnSubmit.parentNode.replaceChild(newSubmit, btnSubmit);
    btnCancel.parentNode.replaceChild(newCancel, btnCancel);

    newCancel.addEventListener("click", () => {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
    });

    newSubmit.addEventListener("click", () => {
        const name = document.getElementById("classify-input-name").value.trim();
        const category = document.getElementById("classify-select-category").value;

        if (!name) {
            showNotification("Please enter a name for the specimen.");
            return;
        }

        modal.classList.add("hidden");
        modal.classList.remove("flex");

        // Start scanning sequence
        triggerScanAnalysisSequence({
            name: name,
            category: category,
            image: imgSrc,
            latitude: latitude,
            longitude: longitude
        });
    });
}

async function triggerScanSimulation(preset) {
    await triggerScanAnalysisSequence(preset);
}

// Scanning UI sequence
async function triggerScanAnalysisSequence(specimenData) {
    const scanContainer = document.getElementById("scanner-view-box");
    const analysisOverlay = document.getElementById("scanner-analysis-overlay");
    const logConsole = document.getElementById("analysis-log-console");
    const progressBar = document.getElementById("analysis-progress");

    // Show Scanning Screen overlays
    analysisOverlay.classList.remove("hidden");
    analysisOverlay.classList.add("flex");
    logConsole.innerHTML = "";
    progressBar.style.width = "0%";

    const logs = [
        "Initializing camera sensors...",
        "Capturing high-resolution image buffer...",
        "Running neural boundary isolation...",
        "Isolating specimen color spectrum...",
        "Matching texture profiles with bio-database...",
        "Connecting to CAPDEX cloud registry...",
        "Retrieving taxonomic classifications from Wikipedia...",
        "Generating field-guide metadata...",
        "Registering specimen signature..."
    ];

    let currentLogIdx = 0;
    
    // Background Wikipedia fetching
    let wikiData = null;
    try {
        const query = specimenData.name;
        const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`);
        if (res.ok) {
            wikiData = await res.json();
            console.log("Wikipedia metadata retrieved:", wikiData);
        }
    } catch (err) {
        console.warn("Wikipedia API offline or blocked.", err);
    }
    
    // Animate scanning process
    const interval = setInterval(() => {
        if (currentLogIdx < logs.length) {
            const p = document.createElement("p");
            p.className = "text-xs font-mono text-primary font-semibold mb-1";
            p.textContent = `> ${logs[currentLogIdx]}`;
            logConsole.appendChild(p);
            logConsole.scrollTop = logConsole.scrollHeight;

            progressBar.style.width = `${((currentLogIdx + 1) / logs.length) * 100}%`;
            currentLogIdx++;
        } else {
            clearInterval(interval);
            
            // Finished! Create complete specimen object and add it to database
            const scientificNamesFallback = {
                "Plant": "Flora silvestris",
                "Animal": "Fauna silvestris",
                "Bird": "Ornis silvestris",
                "Insect": "Insecta silvestris",
                "Tree": "Arbor silvestris",
                "Fruit": "Fructus silvestris",
                "Flower": "Flos silvestris"
            };

            // Attempt to extract scientific name from Wikipedia extract
            let scientific = specimenData.scientificName || "";
            if (!scientific && wikiData) {
                const matches = wikiData.extract ? wikiData.extract.match(/\((([A-Z][a-z]+) ([a-z]+))\)/) : null;
                if (matches) {
                    scientific = matches[1];
                } else if (wikiData.description && wikiData.description.toLowerCase().includes("species")) {
                    scientific = wikiData.title;
                }
            }
            if (!scientific) {
                scientific = scientificNamesFallback[specimenData.category] || "Specimen naturalis";
            }

            const rarityOptions = ["Common", "Rare", "Epic"];
            const rand = Math.random();
            const rarity = specimenData.rarity || 
                          (rand < 0.2 ? "Epic" : (rand < 0.55 ? "Rare" : "Common"));

            const rating = specimenData.rating || parseFloat((4 + Math.random() * 6).toFixed(1)); // 4.0 to 10.0

            // Base details
            let habitat = specimenData.habitat || "";
            let diet = specimenData.diet || "";
            let whereToFind = specimenData.whereToFind || "";

            if (wikiData) {
                if (!habitat) {
                    habitat = wikiData.description || "Natural biosphere, wooded environments, and plains.";
                }
                if (!diet) {
                    diet = wikiData.extract ? wikiData.extract.split(".")[0] + "." : "Organic energy, mineral-rich soils.";
                }
                if (!whereToFind) {
                    whereToFind = "Look in native areas corresponding to " + (wikiData.description || "its natural domain") + ". Check regional reserve parks.";
                }
            } else {
                habitat = habitat || "Moist woodlands, valleys, and forest edges";
                diet = diet || "Organic solar energy, trace minerals, and natural rainfall";
                whereToFind = whereToFind || "Damp soils shaded by heavy canopy. Look along valley stream paths in early morning.";
            }

            // Assign coordinates based on user EXIF metadata, or fall back to biome categories
            let lat = specimenData.latitude;
            let lng = specimenData.longitude;

            if (lat === undefined || lat === null || lng === undefined || lng === null) {
                const offsetLat = (Math.random() - 0.5) * 0.08;
                const offsetLng = (Math.random() - 0.5) * 0.08;

                if (specimenData.category === "Plant" || specimenData.category === "Tree" || specimenData.category === "Flower") {
                    lat = 41.21 + offsetLat;
                    lng = -124.00 + offsetLng; // Woodlands
                } else if (specimenData.category === "Bird") {
                    lat = 46.58 + offsetLat;
                    lng = 7.65 + offsetLng; // Peaks
                } else if (specimenData.category === "Insect") {
                    lat = 41.21 + offsetLat;
                    lng = -124.00 + offsetLng; // Woodlands / Insects
                } else if (specimenData.category === "Animal") {
                    if (Math.random() > 0.5) {
                        lat = 46.58 + offsetLat;
                        lng = 7.65 + offsetLng; // Peaks
                    } else {
                        lat = 25.00 + offsetLat;
                        lng = 13.00 + offsetLng; // Dunes
                    }
                } else if (specimenData.category === "Fruit") {
                    lat = 25.00 + offsetLat;
                    lng = 13.00 + offsetLng; // Dunes
                } else {
                    lat = -18.29 + offsetLat;
                    lng = 147.70 + offsetLng; // Shallows / Other
                }
            }

            const newSpecimen = {
                id: "scanned-" + Date.now(),
                name: specimenData.name,
                scientificName: scientific,
                category: specimenData.category,
                rarity: rarity,
                rating: rating,
                image: specimenData.image || (wikiData && wikiData.thumbnail ? wikiData.thumbnail.source : "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=600&q=80"),
                habitat: habitat,
                diet: diet,
                whereToFind: whereToFind,
                latitude: lat,
                longitude: lng,
                scannedAt: new Date().toISOString()
            };

            addSpecimen(newSpecimen);
            
            // Clean scan state and go to detail
            analysisOverlay.classList.add("hidden");
            analysisOverlay.classList.remove("flex");
            showNotification(`New ${newSpecimen.rarity} specimen discovered: ${newSpecimen.name}!`);
            navigateTo("detail", newSpecimen.id);
        }
    }, 200);
}

// ==========================================
// 4. MAP TAB RENDER
// ==========================================
const hotspots = [
    { id: "woodlands", name: "Whispering Woodlands", category: "Insect", lat: 41.21, lng: -124.00, radius: 150000, color: "#0f5238", fillColor: "#74c69d" },
    { id: "peaks", name: "Alpine Peaks", category: "Animal", lat: 46.58, lng: 7.65, radius: 150000, color: "#334155", fillColor: "#94a3b8" },
    { id: "shallows", name: "Aurelian Shallows", category: "Flower", lat: -18.29, lng: 147.70, radius: 250000, color: "#0077b6", fillColor: "#90e0ef" },
    { id: "dunes", name: "Scorched Dunes", category: "Plant", lat: 25.00, lng: 13.00, radius: 250000, color: "#b25a38", fillColor: "#fbd38d" }
];

function initializeLeafletMap() {
    if (window.capdexMap) return;

    // Create the map with refined defaults
    window.capdexMap = L.map('real-leaflet-map', {
        zoomControl: false,
        attributionControl: true
    }).setView([20, 0], 3);

    // ── Tile Layer Definitions ──
    // 1. Street: OpenStreetMap standard tile – the most detailed street map
    const streetLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    // 2. Satellite: Esri World Imagery – real aerial/satellite photography
    const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 18,
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });

    // Satellite labels overlay (road/city names on top of imagery)
    const satelliteLabelsLayer = L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 18,
        pane: 'overlayPane'
    });

    // 3. Topographic: OpenTopoMap – detailed topographic contours & terrain
    const topoLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        maxZoom: 17,
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a>'
    });

    // Set default active layer
    streetLayer.addTo(window.capdexMap);
    window.activeMapStyle = 'street';
    window.mapTileLayers = { street: streetLayer, satellite: satelliteLayer, satelliteLabels: satelliteLabelsLayer, topo: topoLayer };

    window.mapMarkers = [];
    window.mapCircles = [];

    // ── Map Style Switcher ──
    function switchMapStyle(style) {
        if (window.activeMapStyle === style) return;

        // Remove all tile layers
        Object.values(window.mapTileLayers).forEach(layer => {
            if (window.capdexMap.hasLayer(layer)) window.capdexMap.removeLayer(layer);
        });

        // Add the selected layer
        switch (style) {
            case 'street':
                streetLayer.addTo(window.capdexMap);
                break;
            case 'satellite':
                satelliteLayer.addTo(window.capdexMap);
                satelliteLabelsLayer.addTo(window.capdexMap);
                break;
            case 'topo':
                topoLayer.addTo(window.capdexMap);
                break;
        }

        window.activeMapStyle = style;

        // Update button UI
        document.querySelectorAll(".map-style-btn").forEach(btn => {
            if (btn.getAttribute("data-style") === style) {
                btn.className = "map-style-btn px-3.5 py-2 rounded-xl text-[10px] font-bold bg-secondary text-white shadow-sm transition-all";
            } else {
                btn.className = "map-style-btn px-3.5 py-2 rounded-xl text-[10px] font-bold text-primary hover:bg-slate-100 transition-all";
            }
        });
    }

    document.querySelectorAll(".map-style-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            switchMapStyle(btn.getAttribute("data-style"));
        });
    });

    // ── Live Coordinate Display on cursor movement ──
    const coordsDisplay = document.getElementById("map-coords-display");
    if (coordsDisplay) {
        window.capdexMap.on('mousemove', (e) => {
            coordsDisplay.textContent = `Lat: ${e.latlng.lat.toFixed(4)}  Lng: ${e.latlng.lng.toFixed(4)}`;
        });
        window.capdexMap.on('mouseout', () => {
            coordsDisplay.textContent = `Lat: —  Lng: —`;
        });
    }

    // ── Zoom Controls ──
    document.getElementById("btn-map-zoom-in").addEventListener("click", () => {
        window.capdexMap.zoomIn();
    });
    document.getElementById("btn-map-zoom-out").addEventListener("click", () => {
        window.capdexMap.zoomOut();
    });

    // ── Locate Me: Real-time GPS tracking with live marker + accuracy circle ──
    window.locateMeWatchId = null;
    window.locateMeMarker = null;
    window.locateMeAccuracyCircle = null;

    document.getElementById("btn-map-locate-me").addEventListener("click", () => {
        const locBtn = document.getElementById("btn-map-locate-me");

        // If already tracking, stop it
        if (window.locateMeWatchId !== null) {
            navigator.geolocation.clearWatch(window.locateMeWatchId);
            window.locateMeWatchId = null;

            // Remove marker and circle
            if (window.locateMeMarker && window.capdexMap.hasLayer(window.locateMeMarker)) {
                window.capdexMap.removeLayer(window.locateMeMarker);
            }
            if (window.locateMeAccuracyCircle && window.capdexMap.hasLayer(window.locateMeAccuracyCircle)) {
                window.capdexMap.removeLayer(window.locateMeAccuracyCircle);
            }
            window.locateMeMarker = null;
            window.locateMeAccuracyCircle = null;

            // Reset button style
            locBtn.classList.remove("bg-red-500", "border-red-400/30");
            locBtn.classList.add("bg-secondary", "border-secondary/30");
            locBtn.querySelector("span:last-of-type").nextSibling.textContent = " Locate Me";
            showNotification("Location tracking stopped.");
            return;
        }

        if (!navigator.geolocation) {
            showNotification("Geolocation is not supported by your browser.");
            return;
        }

        showNotification("Acquiring GPS signal…");

        // Switch button to tracking state
        locBtn.classList.remove("bg-secondary", "border-secondary/30");
        locBtn.classList.add("bg-red-500", "border-red-400/30");
        locBtn.querySelector("span:last-of-type").nextSibling.textContent = " Tracking…";

        window.locateMeWatchId = navigator.geolocation.watchPosition(
            (pos) => {
                const lat = pos.coords.latitude;
                const lng = pos.coords.longitude;
                const accuracy = pos.coords.accuracy; // in meters

                // Save to state
                state.userLat = lat;
                state.userLng = lng;

                // Update or create accuracy circle
                if (window.locateMeAccuracyCircle) {
                    window.locateMeAccuracyCircle.setLatLng([lat, lng]);
                    window.locateMeAccuracyCircle.setRadius(accuracy);
                } else {
                    window.locateMeAccuracyCircle = L.circle([lat, lng], {
                        radius: accuracy,
                        color: '#0e6c4a',
                        fillColor: '#0e6c4a',
                        fillOpacity: 0.08,
                        weight: 1.5,
                        dashArray: '4, 4'
                    }).addTo(window.capdexMap);
                }

                // Update or create location marker (pulsing blue dot)
                if (window.locateMeMarker) {
                    window.locateMeMarker.setLatLng([lat, lng]);
                } else {
                    const liveIcon = L.divIcon({
                        className: 'locate-me-pin',
                        html: `
                            <div class="relative flex items-center justify-center w-12 h-12">
                                <div class="absolute inset-0 bg-emerald-500/20 rounded-full animate-ping"></div>
                                <div class="absolute inset-1 bg-emerald-500/10 rounded-full animate-pulse"></div>
                                <div class="relative w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-xl border-[3px] border-emerald-600">
                                    <div class="w-3 h-3 bg-emerald-600 rounded-full shadow-inner"></div>
                                </div>
                            </div>
                        `,
                        iconSize: [48, 48],
                        iconAnchor: [24, 24]
                    });
                    window.locateMeMarker = L.marker([lat, lng], { icon: liveIcon, zIndexOffset: 2000 }).addTo(window.capdexMap);
                    window.locateMeMarker.bindTooltip(
                        `<strong>You are here</strong><br><span style="font-size:9px;opacity:0.8;">±${Math.round(accuracy)}m accuracy</span>`,
                        { direction: 'top', offset: [0, -24], className: 'leaflet-tooltip-custom', permanent: false }
                    );

                    // Fly to location on first fix
                    window.capdexMap.flyTo([lat, lng], 16, { animate: true, duration: 1.5 });
                    showNotification(`Located! Accuracy: ±${Math.round(accuracy)}m`);
                }

                // Update tooltip with latest accuracy
                if (window.locateMeMarker.getTooltip()) {
                    window.locateMeMarker.setTooltipContent(
                        `<strong>You are here</strong><br><span style="font-size:9px;opacity:0.8;">±${Math.round(accuracy)}m accuracy</span>`
                    );
                }

                // Update coordinates display
                const coordsDisplay = document.getElementById("map-coords-display");
                if (coordsDisplay) {
                    coordsDisplay.textContent = `📍 Lat: ${lat.toFixed(5)}  Lng: ${lng.toFixed(5)}  ±${Math.round(accuracy)}m`;
                }
            },
            (err) => {
                // Stop tracking on error
                if (window.locateMeWatchId !== null) {
                    navigator.geolocation.clearWatch(window.locateMeWatchId);
                    window.locateMeWatchId = null;
                }
                locBtn.classList.remove("bg-red-500", "border-red-400/30");
                locBtn.classList.add("bg-secondary", "border-secondary/30");
                locBtn.querySelector("span:last-of-type").nextSibling.textContent = " Locate Me";

                if (err.code === 1) {
                    showNotification("Location permission denied. Please allow GPS access.");
                } else if (err.code === 2) {
                    showNotification("GPS signal unavailable. Try again outdoors.");
                } else {
                    showNotification("Location request timed out. Try again.");
                }
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
        );
    });

    // ── Close specimen popup on map click ──
    window.capdexMap.on('click', () => {
        document.getElementById("map-specimen-popup").classList.add("hidden");
        state.mapState.selectedMarkerSpecimen = null;
        highlightBiomeShape(null);
    });

    // ── Bind Search Input listener ──
    const searchInput = document.getElementById("map-search-input");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            if (!state.mapState.filters) state.mapState.filters = { search: "", category: "All" };
            state.mapState.filters.search = e.target.value;
            renderMap();
        });
    }

    // ── Bind Category Button listeners ──
    document.querySelectorAll(".map-filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const cat = btn.getAttribute("data-category");
            if (!state.mapState.filters) state.mapState.filters = { search: "", category: "All" };
            state.mapState.filters.category = cat;

            // Toggle active styles
            document.querySelectorAll(".map-filter-btn").forEach(b => {
                b.className = "map-filter-btn px-3 py-2 rounded-full text-[11px] font-bold bg-white text-primary border border-slate-100 hover:bg-slate-50 transition-all shadow-sm";
            });
            btn.className = "map-filter-btn px-4 py-2 rounded-full text-[11px] font-bold bg-secondary text-white shadow-sm transition-all";

            renderMap();
        });
    });

    // ── Bind Biome side panel list click listeners ──
    document.querySelectorAll(".biome-list-item").forEach(item => {
        item.addEventListener("click", () => {
            const biomeId = item.getAttribute("data-biome");
            const spot = hotspots.find(h => h.id === biomeId);
            if (spot) {
                panToCoordinate(spot.lat, spot.lng);
                highlightBiomeShape(biomeId);
                openHotspotPopup(spot);
            }
        });
    });

    // ── Try to get initial user location ──
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                state.userLat = pos.coords.latitude;
                state.userLng = pos.coords.longitude;
            },
            () => { /* silent fail */ },
            { enableHighAccuracy: false, timeout: 5000, maximumAge: 60000 }
        );
    }
}

function renderMap() {
    initializeLeafletMap();

    // Invalidate size to load map correctly in visible tab viewport
    setTimeout(() => {
        if (window.capdexMap) {
            window.capdexMap.invalidateSize();
        }
    }, 100);

    // Clear active specimen markers
    if (window.mapMarkers) {
        window.mapMarkers.forEach(m => window.capdexMap.removeLayer(m));
    }
    window.mapMarkers = [];

    // Clear active hotspot circles
    if (window.mapCircles) {
        window.mapCircles.forEach(c => window.capdexMap.removeLayer(c));
    }
    window.mapCircles = [];

    // Draw user location pin (use real geolocation if available)
    const userLat = state.userLat || null;
    const userLng = state.userLng || null;
    
    if (userLat !== null && userLng !== null) {
        const userIcon = L.divIcon({
            className: 'user-location-pin-container',
            html: `
                <div class="relative flex items-center justify-center w-10 h-10">
                    <div class="absolute inset-0 bg-emerald-600/20 rounded-full animate-ping"></div>
                    <div class="absolute inset-1 bg-emerald-600/10 rounded-full"></div>
                    <div class="relative w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-emerald-600">
                        <div class="w-2.5 h-2.5 bg-emerald-600 rounded-full"></div>
                    </div>
                </div>
            `,
            iconSize: [40, 40],
            iconAnchor: [20, 20]
        });
        const userMarker = L.marker([userLat, userLng], { icon: userIcon, zIndexOffset: 1000 }).addTo(window.capdexMap);
        userMarker.bindTooltip("Your Location", { direction: 'top', offset: [0, -20], className: 'leaflet-tooltip-custom' });
        window.userLocationMarker = userMarker;
        window.mapMarkers.push(userMarker);
    }

    // Draw Hotspot Biome Circles
    hotspots.forEach(spot => {
        const circle = L.circle([spot.lat, spot.lng], {
            color: spot.color,
            fillColor: spot.fillColor,
            fillOpacity: 0.12,
            radius: spot.radius,
            dashArray: '6, 4',
            weight: 2
        }).addTo(window.capdexMap);

        circle.on('click', (e) => {
            L.DomEvent.stopPropagation(e);
            panToCoordinate(spot.lat, spot.lng);
            highlightBiomeShape(spot.id);
            openHotspotPopup(spot);
        });

        window.mapCircles.push(circle);
    });

    // Filtering active collection markers
    const searchVal = ((state.mapState.filters && state.mapState.filters.search) || "").toLowerCase().trim();
    const categoryVal = (state.mapState.filters && state.mapState.filters.category) || "All";

    const filteredSpecimens = state.specimens.filter(spec => {
        const matchesSearch = spec.name.toLowerCase().includes(searchVal) || 
                              spec.scientificName.toLowerCase().includes(searchVal);
        const matchesCategory = categoryVal === "All" || spec.category.toLowerCase() === categoryVal.toLowerCase();
        return matchesSearch && matchesCategory;
    });

    // Render filtered markers on map
    filteredSpecimens.forEach(spec => {
        // Fallback if missing latitude/longitude (use user's real location if available)
        const lat = spec.latitude !== undefined ? spec.latitude : (state.userLat || 0);
        const lng = spec.longitude !== undefined ? spec.longitude : (state.userLng || 0);

        const markerColor = spec.rarity === "Epic" ? "#8b5cf6" : (spec.rarity === "Rare" ? "#0ea5e9" : "#64748b");
        const pinIcon = L.divIcon({
            className: 'custom-map-pin-container',
            html: `
                <div class="relative flex flex-col items-center select-none">
                    <!-- Glowing Outer Ring & Image container -->
                    <div class="relative w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-lg border-2 animate-fade-in" style="border-color: ${markerColor};">
                        <img class="w-9 h-9 rounded-full object-cover" src="${spec.image}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80';" />
                    </div>
                    <!-- Bottom Pin Needle -->
                    <div class="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] -mt-[1px]" style="border-t-color: ${markerColor};"></div>
                    <!-- Small center dot -->
                    <div class="w-1.5 h-1.5 rounded-full bg-white -mt-[6px]"></div>
                </div>
            `,
            iconSize: [44, 52],
            iconAnchor: [22, 52]
        });

        const marker = L.marker([lat, lng], { icon: pinIcon }).addTo(window.capdexMap);
        marker.on('click', (e) => {
            L.DomEvent.stopPropagation(e);
            openMapPopup(spec);
        });

        window.mapMarkers.push(marker);
    });

    // Populate Right Panel Discoveries list
    const listContainer = document.getElementById("map-discoveries-list");
    if (listContainer) {
        listContainer.innerHTML = "";
        if (filteredSpecimens.length === 0) {
            listContainer.innerHTML = `<div class="text-xs text-outline italic text-center py-4">No discovered specimens match these filters.</div>`;
        } else {
            filteredSpecimens.forEach(spec => {
                const lat = spec.latitude !== undefined ? spec.latitude : (state.userLat || 0);
                const lng = spec.longitude !== undefined ? spec.longitude : (state.userLng || 0);
                
                const item = document.createElement("div");
                item.className = "flex items-center justify-between p-2 rounded-xl bg-surface-variant/30 hover:bg-surface-variant/60 cursor-pointer border border-transparent hover:border-primary/10 transition-all";
                item.innerHTML = `
                    <div class="flex items-center gap-2.5 min-w-0">
                        <img class="w-8 h-8 rounded-lg object-cover bg-surface-container shrink-0 animate-fade-in" src="${spec.image}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80';" />
                        <div class="min-w-0">
                            <h4 class="font-bold text-xs text-on-surface truncate">${spec.name}</h4>
                            <p class="text-[9px] text-outline">Coord: [${lat.toFixed(2)}, ${lng.toFixed(2)}] • ${spec.rarity}</p>
                        </div>
                    </div>
                    <span class="material-symbols-outlined text-outline text-[16px]">location_searching</span>
                `;
                item.addEventListener("click", () => {
                    panToCoordinate(lat, lng);
                    openMapPopup(spec);
                });
                listContainer.appendChild(item);
            });
        }
    }
}

function openMapPopup(specimen) {
    state.mapState.selectedMarkerSpecimen = specimen;
    const card = document.getElementById("map-specimen-popup");

    let rarityClass = "rarity-common";
    if (specimen.rarity === "Rare") rarityClass = "rarity-rare";
    else if (specimen.rarity === "Epic") rarityClass = "rarity-epic";

    card.innerHTML = `
        <div class="glass-nav rounded-3xl p-4 shadow-2xl relative border border-primary/10 bg-white/95">
            <button id="map-popup-close" class="absolute top-2 right-2 text-outline hover:text-on-surface">
                <span class="material-symbols-outlined">close</span>
            </button>
            <div class="flex items-center gap-4">
                <img class="w-20 h-20 object-cover rounded-2xl bg-surface-container shrink-0 animate-fade-in" src="${specimen.image}" alt="${specimen.name}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80';" />
                <div class="flex-1 min-w-0">
                    <span class="px-2.5 py-0.5 rounded-full text-white text-[9px] font-bold uppercase tracking-wider ${rarityClass}">${specimen.rarity}</span>
                    <h4 class="font-title-md text-[16px] text-primary truncate mt-1">${specimen.name}</h4>
                    <p class="text-[12px] text-on-surface-variant truncate italic">${specimen.scientificName}</p>
                    
                    <div class="flex items-center gap-3 mt-1.5">
                        <span class="font-label-sm text-label-sm text-outline flex items-center gap-0.5">
                            <span class="material-symbols-outlined text-[14px] text-secondary material-symbols-fill">star</span>
                            ${specimen.rating}/10
                        </span>
                        <span class="text-[10px] text-outline truncate max-w-[100px]">${specimen.habitat.split(',')[0]}</span>
                    </div>
                </div>
            </div>
            <div class="flex gap-2 mt-4">
                <button id="map-popup-btn-detail" class="flex-1 py-2 text-center text-xs font-bold bg-secondary text-on-secondary rounded-xl hover:opacity-90 transition-opacity">
                    View Full Details
                </button>
            </div>
        </div>
    `;

    card.classList.remove("hidden");
    
    document.getElementById("map-popup-close").addEventListener("click", () => {
        card.classList.add("hidden");
        state.mapState.selectedMarkerSpecimen = null;
    });

    document.getElementById("map-popup-btn-detail").addEventListener("click", () => {
        navigateTo("detail", specimen.id);
    });
}

function openHotspotPopup(spot) {
    const card = document.getElementById("map-specimen-popup");
    
    // Find specimens in collection belonging to this category
    const foundSpecimens = state.specimens.filter(s => s.category.toLowerCase() === spot.category.toLowerCase());
    
    card.innerHTML = `
        <div class="glass-nav rounded-3xl p-5 shadow-2xl relative border border-primary/10 bg-white/95">
            <button id="map-popup-close" class="absolute top-3 right-3 text-outline hover:text-on-surface">
                <span class="material-symbols-outlined">close</span>
            </button>
            <div class="flex items-center gap-3 mb-3">
                <div class="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
                    <span class="material-symbols-outlined">${getCategoryIcon(spot.category)}</span>
                </div>
                <div class="min-w-0">
                    <h4 class="font-bold text-primary text-xs uppercase tracking-wider truncate">${spot.name}</h4>
                    <p class="text-[9px] text-outline uppercase tracking-wider">${spot.category} Biome Zone</p>
                </div>
            </div>
            <p class="text-xs text-on-surface-variant leading-relaxed mb-4">
                This area features specific climate profiles and dense native cover, making it a key habitation zone for <strong>${spot.category.toLowerCase()}s</strong>.
            </p>
            <div class="text-[10px] font-bold text-primary mb-2 uppercase tracking-wide">Specimens Logged Here:</div>
            <div class="flex gap-2 overflow-x-auto no-scrollbar py-1">
                ${foundSpecimens.length === 0 ? `
                    <span class="text-xs text-outline italic py-1">No specimens logged here yet.</span>
                ` : foundSpecimens.map(s => `
                    <div class="flex items-center gap-1.5 bg-white/60 hover:bg-white px-2.5 py-1 rounded-xl border border-slate-100 cursor-pointer shrink-0 transition-colors" onclick="navigateTo('detail', '${s.id}')">
                        <img class="w-5 h-5 object-cover rounded animate-fade-in" style="width: 20px; height: 20px;" src="${s.image}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80';" />
                        <span class="text-[10px] font-medium text-on-surface truncate max-w-[80px]">${s.name}</span>
                    </div>
                `).join("")}
            </div>
        </div>
    `;
    card.classList.remove("hidden");
    
    document.getElementById("map-popup-close").addEventListener("click", () => {
        card.classList.add("hidden");
    });
}

function getCategoryIcon(category) {
    switch(category.toLowerCase()) {
        case 'plant': case 'tree': return 'local_florist';
        case 'animal': return 'pets';
        case 'bird': return 'flight';
        case 'insect': return 'bug_report';
        case 'flower': return 'nest_giganest';
        case 'fruit': return 'nutrition';
        default: return 'nature';
    }
}

function panToCoordinate(lat, lng) {
    if (window.capdexMap) {
        window.capdexMap.setView([lat, lng], 8, { animate: true, duration: 1.0 });
    }
}

function highlightBiomeShape(biomeId) {
    document.querySelectorAll(".biome-list-item").forEach(item => {
        if (item.getAttribute("data-biome") === biomeId) {
            item.classList.add("bg-primary-container/10", "border-primary/20", "scale-[1.02]");
            item.classList.remove("bg-white/40");
        } else {
            item.classList.remove("bg-primary-container/10", "border-primary/20", "scale-[1.02]");
            item.classList.add("bg-white/40");
        }
    });
}

// ==========================================
// 5. SPECIMEN DETAIL TAB RENDER
// ==========================================
function renderDetail() {
    const specimen = state.specimens.find(s => s.id === state.activeSpecimenId);
    if (!specimen) {
        navigateTo("dashboard");
        return;
    }

    // Header image
    document.getElementById("detail-image").src = specimen.image;
    document.getElementById("detail-image").alt = specimen.name;

    // Rarity Badge styling
    const rarityBadge = document.getElementById("detail-rarity-badge");
    rarityBadge.textContent = specimen.rarity;
    
    // Remove old rarity classes
    rarityBadge.className = "absolute top-4 right-4 text-white px-4 py-1.5 rounded-full flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-widest";
    if (specimen.rarity === "Rare") {
        rarityBadge.classList.add("rarity-rare");
    } else if (specimen.rarity === "Epic") {
        rarityBadge.classList.add("rarity-epic", "rarity-epic-glow");
    } else {
        rarityBadge.classList.add("rarity-common");
    }

    // Name & Taxonomy
    document.getElementById("detail-name").textContent = specimen.name;
    document.getElementById("detail-scientific").textContent = specimen.scientificName;
    document.getElementById("detail-category-badge").textContent = specimen.category;

    // Rating star generation
    const starContainer = document.getElementById("detail-star-rating");
    const numStarsFilled = Math.round(specimen.rating / 2); // Map 10pt scale to 5 stars
    
    let starHtml = "";
    for (let i = 1; i <= 5; i++) {
        const fillClass = i <= numStarsFilled ? "filled" : "";
        starHtml += `<span class="material-symbols-outlined ${fillClass}">star</span>`;
    }
    starHtml += `<span class="ml-2 font-bold text-on-surface">${specimen.rating} / 10</span>`;
    starContainer.innerHTML = starHtml;

    // Progress bar out of 10
    const ratingFill = document.getElementById("detail-rating-progress");
    ratingFill.style.width = `${specimen.rating * 10}%`;

    // Specimen fields
    document.getElementById("detail-habitat").textContent = specimen.habitat;
    document.getElementById("detail-diet").textContent = specimen.diet;
    document.getElementById("detail-where").textContent = specimen.whereToFind;

    // Specimen date
    document.getElementById("detail-scanned-date").textContent = new Date(specimen.scannedAt).toLocaleDateString(undefined, {
        year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
    });

    // Similar species generation
    const similarContainer = document.getElementById("detail-similar-species");
    // Get other specimens in same category (exclude current)
    let similar = state.specimens.filter(s => s.category === specimen.category && s.id !== specimen.id);
    
    // Fallback search to other items if too few matching items in collection
    if (similar.length === 0) {
        similar = state.specimens.filter(s => s.id !== specimen.id).slice(0, 3);
    }

    similarContainer.innerHTML = similar.map(s => {
        let badgeClass = "bg-slate-500";
        if (s.rarity === "Rare") badgeClass = "bg-sky-600";
        else if (s.rarity === "Epic") badgeClass = "bg-violet-600";

        return `
            <div class="clay-card min-w-[160px] p-4 flex flex-col items-center gap-3 cursor-pointer select-none" data-similar-id="${s.id}">
                <div class="w-24 h-24 rounded-full bg-surface-container overflow-hidden p-2 relative shadow-inner">
                    <img class="w-full h-full object-contain" src="${s.image}" alt="${s.name}" />
                    <span class="absolute top-0 right-0 ${badgeClass} text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full uppercase">${s.rarity}</span>
                </div>
                <div class="text-center w-full">
                    <p class="font-title-md text-[14px] text-on-surface leading-tight truncate px-1">${s.name}</p>
                    <p class="text-[10px] text-on-surface-variant mt-1 italic truncate">${s.scientificName}</p>
                </div>
            </div>
        `;
    }).join("");

    // Click handler for similar specimens
    similarContainer.querySelectorAll("[data-similar-id]").forEach(card => {
        card.addEventListener("click", () => {
            const id = card.getAttribute("data-similar-id");
            navigateTo("detail", id);
        });
    });

    // Delete Button listener
    const btnDelete = document.getElementById("detail-btn-delete");
    const newDelete = btnDelete.cloneNode(true);
    btnDelete.parentNode.replaceChild(newDelete, btnDelete);
    newDelete.addEventListener("click", () => {
        if (confirm(`Are you sure you want to remove ${specimen.name} from your collection?`)) {
            removeSpecimen(specimen.id);
            showNotification(`Removed ${specimen.name} from collection.`);
        }
    });

    // Add back button listener
    const btnBack = document.getElementById("detail-btn-back");
    const newBack = btnBack.cloneNode(true);
    btnBack.parentNode.replaceChild(newBack, btnBack);
    newBack.addEventListener("click", () => {
        navigateTo("collection");
    });
}

// ==========================================
// GENERAL HELPER UTILITIES
// ==========================================

// Format time diff: "2h ago", "1d ago", "Just now"
function formatRelativeTime(dateString) {
    const date = new Date(dateString);
    const seconds = Math.floor((new Date() - date) / 1000);
    
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + "y ago";
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + "mo ago";
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + "d ago";
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + "h ago";
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + "m ago";
    return "just now";
}

// System banner notifications
function showNotification(message) {
    const banner = document.getElementById("system-notification-banner");
    document.getElementById("notification-text").textContent = message;
    
    banner.classList.remove("translate-y-[-100px]", "opacity-0");
    banner.classList.add("translate-y-0", "opacity-100");

    setTimeout(() => {
        banner.classList.add("translate-y-[-100px]", "opacity-0");
        banner.classList.remove("translate-y-0", "opacity-100");
    }, 4000);
}
