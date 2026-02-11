  // URLs de las APIs
        const API_URLS = {
            login: 'https://67e0533f7635238f9aad3a5d.mockapi.io/user/pelis/Bsz/Perfil',
            general: 'https://67e0533f7635238f9aad3a5d.mockapi.io/user/pelis/Bsz/Pelis',
            categories: {
                terror: "https://67e0533f7635238f9aad3a5d.mockapi.io/user/pelis/Bsz/Pelis/1",
                romance: "https://67e0533f7635238f9aad3a5d.mockapi.io/user/pelis/Bsz/Pelis/3",
                comedia: "https://67e0533f7635238f9aad3a5d.mockapi.io/user/pelis/Bsz/Pelis/4",
                animacion: "https://67e0533f7635238f9aad3a5d.mockapi.io/user/pelis/Bsz/Pelis/5",
                accion: "https://67e0533f7635238f9aad3a5d.mockapi.io/user/pelis/Bsz/Pelis/6",
                guerra: "https://67e0533f7635238f9aad3a5d.mockapi.io/user/pelis/Bsz/Pelis/7",
                2025: "https://67e0533f7635238f9aad3a5d.mockapi.io/user/pelis/Bsz/Pelis/8",
                2024: "https://67e0533f7635238f9aad3a5d.mockapi.io/user/pelis/Bsz/Pelis/9"
            }
        };

        // Elementos DOM
        const loginBtn = document.getElementById('loginBtn');
        const profileBtn = document.getElementById('profileBtn');
        const menuBtn = document.getElementById('menuBtn');
        const searchBtn = document.getElementById('searchBtn');
        const userAvatar = document.getElementById('userAvatar');
        const loginModal = document.getElementById('loginModal');
        const registerModal = document.getElementById('registerModal');
        const searchModal = document.getElementById('searchModal');
        const settingsModal = document.getElementById('settingsModal');
        const closeLoginModal = document.getElementById('closeLoginModal');
        const closeRegisterModal = document.getElementById('closeRegisterModal');
        const closeSearchModal = document.getElementById('closeSearchModal');
        const closeSettingsModal = document.getElementById('closeSettingsModal');
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        const showRegister = document.getElementById('showRegister');
        const showLogin = document.getElementById('showLogin');
        const movieModal = document.getElementById('movieModal');
        const closeMovieModal = document.getElementById('closeMovieModal');
        const profileModal = document.getElementById('profileModal');
        const closeProfileModal = document.getElementById('closeProfileModal');
        const profileLink = document.getElementById('profileLink');
        const settingsLink = document.getElementById('settingsLink');
        
        // Elementos de configuración
        const themeOptions = document.querySelectorAll('.theme-option');
        const clearMoviesCacheBtn = document.getElementById('clearMoviesCache');
        const clearUserDataBtn = document.getElementById('clearUserData');
        const clearAllCacheBtn = document.getElementById('clearAllCache');
        const storageUsedElement = document.getElementById('storageUsed');
        
        // Elementos de contenido
        const trendingContent = document.getElementById('trending-content');
        const terrorContent = document.getElementById('terror-content');
        const romanceContent = document.getElementById('romance-content');
        const comediaContent = document.getElementById('comedia-content');
        const animacionContent = document.getElementById('animacion-content');
        const accionContent = document.getElementById('accion-content');
        const guerraContent = document.getElementById('guerra-content');
        const categoryContent = document.getElementById('category-content');
        const searchResults = document.getElementById('searchResults');
        const keyboardGrid = document.getElementById('keyboardGrid');
        const keyboardSection = document.getElementById('keyboardSection');
        const searchInput = document.getElementById('searchInput');
        
        const movieModalHeader = document.getElementById('movieModalHeader');
        const movieModalTitle = document.getElementById('movieModalTitle');
        const movieModalMeta = document.getElementById('movieModalMeta');
        const movieModalDescription = document.getElementById('movieModalDescription');
        const modalPlayBtn = document.getElementById('modalPlayBtn');
        const modalAddToListBtn = document.getElementById('modalAddToListBtn');
        const userMenu = document.getElementById('userMenu');
        const favoritesLink = document.getElementById('favoritesLink');
        const logoutLink = document.getElementById('logoutLink');
        const notification = document.getElementById('notification');
        const heroSection = document.getElementById('heroSection');
        const heroTitle = document.getElementById('heroTitle');
        const heroDescription = document.getElementById('heroDescription');
        const heroPlayBtn = document.getElementById('heroPlayBtn');
        const heroInfoBtn = document.getElementById('heroInfoBtn');
        const categoryTitle = document.getElementById('categoryTitle');
        const trendingSection = document.getElementById('trendingSection');
        const categorySection = document.getElementById('categorySection');
        const categorySectionTitle = document.getElementById('categorySectionTitle');
        const categoryViewAllBtn = document.getElementById('categoryViewAllBtn');
        
        // Elementos del perfil
        const profileAvatar = document.getElementById('profileAvatar');
        const profileName = document.getElementById('profileName');
        const profileUsername = document.getElementById('profileUsername');
        const profileDescription = document.getElementById('profileDescription');
        const profileAccountDate = document.getElementById('profileAccountDate');
        const profileInfoUsername = document.getElementById('profileInfoUsername');
        const profileInfoPassword = document.getElementById('profileInfoPassword');
        const profileMoviesGrid = document.getElementById('profileMoviesGrid');

        // Estado de la aplicación
        let movies = [];
        let currentUser = null;
        let currentCategory = 'all';
        let allMovies = [];
        let heroInterval;
        let userMovies = []; // Películas guardadas por el usuario

        // =============================================
        // PROTECCIÓN CONTRA INSPECCIÓN DE PÁGINA
        // =============================================
        
       
        
        // =============================================
        // FIN DE PROTECCIÓN
        // =============================================

        // Inicialización
        document.addEventListener('DOMContentLoaded', () => {
            loadAllMovies();
            setupEventListeners();
            checkLoginStatus();
            startHeroRotation();
            setupKeyboard();
            loadThemePreference();
            updateStorageInfo();
        });

        // Configurar event listeners
        function setupEventListeners() {
            // Login modal
            loginBtn.addEventListener('click', () => {
                if (currentUser) {
                    toggleUserMenu();
                } else {
                    loginModal.style.display = 'flex';
                }
            });

            closeLoginModal.addEventListener('click', () => {
                loginModal.style.display = 'none';
            });

            closeRegisterModal.addEventListener('click', () => {
                registerModal.style.display = 'none';
            });

            closeSearchModal.addEventListener('click', () => {
                searchModal.style.display = 'none';
            });

            closeSettingsModal.addEventListener('click', () => {
                settingsModal.style.display = 'none';
            });

            closeProfileModal.addEventListener('click', () => {
                profileModal.style.display = 'none';
            });

            // Cerrar modal al hacer clic fuera
            window.addEventListener('click', (e) => {
                if (e.target === loginModal) {
                    loginModal.style.display = 'none';
                }
                if (e.target === registerModal) {
                    registerModal.style.display = 'none';
                }
                if (e.target === movieModal) {
                    movieModal.style.display = 'none';
                }
                if (e.target === searchModal) {
                    searchModal.style.display = 'none';
                }
                if (e.target === profileModal) {
                    profileModal.style.display = 'none';
                }
                if (e.target === settingsModal) {
                    settingsModal.style.display = 'none';
                }
                if (!e.target.closest('.user-actions')) {
                    userMenu.classList.remove('active');
                }
            });

            // Search button
            searchBtn.addEventListener('click', () => {
                searchModal.style.display = 'block';
                searchInput.focus();
                
                // Ocultar teclado en móvil
                if (window.innerWidth <= 768) {
                    keyboardSection.style.display = 'none';
                } else {
                    keyboardSection.style.display = 'flex';
                }
            });

            // Search input
            searchInput.addEventListener('input', (e) => {
                performSearch(e.target.value);
            });

            // Login form
            loginForm.addEventListener('submit', handleLogin);

            // Register form
            registerForm.addEventListener('submit', handleRegister);

            // Switch between login and register
            showRegister.addEventListener('click', (e) => {
                e.preventDefault();
                loginModal.style.display = 'none';
                registerModal.style.display = 'flex';
            });

            showLogin.addEventListener('click', (e) => {
                e.preventDefault();
                registerModal.style.display = 'none';
                loginModal.style.display = 'flex';
            });

            // Movie modal
            closeMovieModal.addEventListener('click', () => {
                movieModal.style.display = 'none';
            });

            // User menu
            profileBtn.addEventListener('click', toggleUserMenu);
            menuBtn.addEventListener('click', toggleUserMenu);
            userAvatar.addEventListener('click', toggleUserMenu);

            // User menu links
            profileLink.addEventListener('click', (e) => {
                e.preventDefault();
                showProfileModal();
                userMenu.classList.remove('active');
            });

            favoritesLink.addEventListener('click', (e) => {
                e.preventDefault();
                showNotification('Favoritos cargados correctamente');
                userMenu.classList.remove('active');
            });

            settingsLink.addEventListener('click', (e) => {
                e.preventDefault();
                showSettingsModal();
                userMenu.classList.remove('active');
            });

            logoutLink.addEventListener('click', (e) => {
                e.preventDefault();
                handleLogout();
                userMenu.classList.remove('active');
            });

            // Navegación por categorías
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
                    e.target.classList.add('active');
                    
                    const category = e.target.getAttribute('data-category');
                    filterByCategory(category);
                });
            });

            // Botones "Ver Todas"
            document.querySelectorAll('.view-all-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const category = e.target.getAttribute('data-category');
                    if (category && category !== 'trending') {
                        document.querySelector(`.nav-links a[data-category="${category}"]`).click();
                    } else if (currentCategory !== 'all') {
                        filterByCategory(currentCategory);
                    }
                });
            });

            // Botón "Mi Lista" en modal de película
            modalAddToListBtn.addEventListener('click', addToUserList);

            // Configuración de temas
            themeOptions.forEach(option => {
                option.addEventListener('click', () => {
                    const theme = option.getAttribute('data-theme');
                    changeTheme(theme);
                });
            });

            // Botones de limpieza de cache
            clearMoviesCacheBtn.addEventListener('click', clearMoviesCache);
            clearUserDataBtn.addEventListener('click', clearUserData);
            clearAllCacheBtn.addEventListener('click', clearAllCache);
        }

        // Mostrar modal de configuración
        function showSettingsModal() {
            updateStorageInfo();
            settingsModal.style.display = 'flex';
        }

        // Cambiar tema
        function changeTheme(theme) {
            // Actualizar clase del body
            if (theme === 'light') {
                document.body.classList.add('light-theme');
            } else {
                document.body.classList.remove('light-theme');
            }
            
            // Actualizar opciones activas
            themeOptions.forEach(option => {
                if (option.getAttribute('data-theme') === theme) {
                    option.classList.add('active');
                } else {
                    option.classList.remove('active');
                }
            });
            
            // Guardar preferencia
            localStorage.setItem('bsz-theme', theme);
            
            showNotification(`Tema ${theme === 'light' ? 'claro' : 'oscuro'} activado`);
        }

        // Cargar preferencia de tema
        function loadThemePreference() {
            const savedTheme = localStorage.getItem('bsz-theme') || 'dark';
            changeTheme(savedTheme);
        }

        // Limpiar cache de películas
        function clearMoviesCache() {
            // Eliminar datos de películas del localStorage
            const keysToRemove = [];
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && (key.includes('movies') || key.includes('allMovies'))) {
                    keysToRemove.push(key);
                }
            }
            
            keysToRemove.forEach(key => {
                localStorage.removeItem(key);
            });
            
            // Recargar películas
            loadAllMovies();
            
            showNotification('Cache de películas limpiado correctamente');
            updateStorageInfo();
        }

        // Limpiar datos de usuario
        function clearUserData() {
            if (confirm('¿Estás seguro de que quieres eliminar todos tus datos de usuario? Esta acción no se puede deshacer.')) {
                // Eliminar datos de usuario del localStorage
                const keysToRemove = [];
                for (let i = 0; i < localStorage.length; i++) {
                    const key = localStorage.key(i);
                    if (key && (key.includes('user') || key.includes('currentUser'))) {
                        keysToRemove.push(key);
                    }
                }
                
                keysToRemove.forEach(key => {
                    localStorage.removeItem(key);
                });
                
                // Cerrar sesión
                handleLogout();
                
                showNotification('Datos de usuario eliminados correctamente');
                updateStorageInfo();
            }
        }

        // Limpiar todo el cache
        function clearAllCache() {
            if (confirm('¿Estás seguro de que quieres eliminar TODO el cache? Esta acción no se puede deshacer.')) {
                localStorage.clear();
                handleLogout();
                showNotification('Todo el cache ha sido limpiado');
                updateStorageInfo();
                
                // Recargar la página después de un breve delay
                setTimeout(() => {
                    window.location.reload();
                }, 1500);
            }
        }

        // Actualizar información de almacenamiento
        function updateStorageInfo() {
            let totalSize = 0;
            
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key) {
                    const value = localStorage.getItem(key);
                    totalSize += key.length + value.length;
                }
            }
            
            // Convertir a KB
            const sizeInKB = (totalSize / 1024).toFixed(2);
            storageUsedElement.textContent = `${sizeInKB} KB`;
        }

        // Configurar teclado virtual (solo visible en desktop)
        function setupKeyboard() {
            // Solo configurar teclado si estamos en desktop
            if (window.innerWidth > 768) {
                const keys = [
                    'A', 'B', 'C', 'D', 'E', 'F',
                    'G', 'H', 'I', 'J', 'K', 'L',
                    'M', 'N', 'O', 'P', 'Q', 'R',
                    'S', 'T', 'U', 'V', 'W', 'X',
                    'Y', 'Z', '0', '1', '2', '3',
                    '4', '5', '6', '7', '8', '9',
                    '#', '-', '.', ',', '!', '?'
                ];

                keyboardGrid.innerHTML = '';
                
                keys.forEach(key => {
                    const keyButton = document.createElement('button');
                    keyButton.className = 'key-button';
                    keyButton.textContent = key;
                    keyButton.addEventListener('click', () => {
                        searchInput.value += key;
                        searchInput.focus();
                        performSearch(searchInput.value);
                    });
                    keyboardGrid.appendChild(keyButton);
                });
            }
        }

        // Realizar búsqueda en todas las categorías
        function performSearch(query) {
            if (query.trim() === '') {
                searchResults.innerHTML = '<div class="error-message">Escribe algo para buscar</div>';
                return;
            }
            
            const filteredMovies = allMovies.filter(movie => 
                movie.title.toLowerCase().includes(query.toLowerCase())
            );
            
            if (filteredMovies.length === 0) {
                searchResults.innerHTML = '<div class="error-message">No se encontraron películas</div>';
                return;
            }
            
            displayMoviesGrid(filteredMovies, searchResults);
        }

        // Alternar menú de usuario
        function toggleUserMenu() {
            userMenu.classList.toggle('active');
        }

        // Mostrar modal de perfil
        function showProfileModal() {
            if (!currentUser) return;
            
            // Actualizar información del perfil
            profileAvatar.src = currentUser.img || "https://via.placeholder.com/150?text=Usuario";
            profileName.textContent = currentUser.name || "Usuario";
            profileUsername.textContent = `@${currentUser.name || "usuario"}`;
            profileDescription.textContent = currentUser.descripcionuser || "Edita tu descripción";
            
            // Fecha de creación de cuenta
            if (currentUser.CuentaCreada && currentUser.CuentaCreada.length > 0) {
                profileAccountDate.textContent = currentUser.CuentaCreada[0].Fecha || "Fecha no disponible";
            } else {
                profileAccountDate.textContent = "Fecha no disponible";
            }
            
            // Información de usuario y contraseña
            profileInfoUsername.textContent = currentUser.name || "usuario";
            profileInfoPassword.textContent = "••••••••";
            
            // Mostrar películas guardadas
            displayUserMovies();
            
            // Mostrar modal
            profileModal.style.display = 'flex';
        }

        // Mostrar películas del usuario
        function displayUserMovies() {
            profileMoviesGrid.innerHTML = '';
            
            if (userMovies.length === 0) {
                profileMoviesGrid.innerHTML = '<div class="error-message">No tienes películas guardadas</div>';
                return;
            }
            
            userMovies.forEach(movie => {
                const movieCard = document.createElement('div');
                movieCard.className = 'profile-movie-card';
                movieCard.innerHTML = `
                    <img src="${movie.image}" alt="${movie.title}" class="profile-movie-img" onerror="this.src='https://via.placeholder.com/150x200?text=Sin+imagen'">
                    <div class="profile-movie-info">
                        <div class="profile-movie-title">${movie.title}</div>
                        <div class="profile-movie-actions">
                            <button class="watch-btn" data-id="${movie.id}"><i class="fas fa-play"></i> Ver</button>
                            <button class="info-btn remove-btn" data-id="${movie.id}"><i class="fas fa-times"></i> Quitar</button>
                        </div>
                    </div>
                `;
                
                // Configurar eventos
                const watchBtn = movieCard.querySelector('.watch-btn');
                const removeBtn = movieCard.querySelector('.remove-btn');
                
                watchBtn.addEventListener('click', () => {
                    if (movie.openMovie && movie.openMovie !== '#') {
                        window.open(movie.openMovie, '_blank');
                    } else {
                        showNotification(`Reproduciendo: ${movie.title}`);
                    }
                });
                
                removeBtn.addEventListener('click', () => {
                    removeFromUserList(movie.id);
                });
                
                profileMoviesGrid.appendChild(movieCard);
            });
        }

        // Agregar película a la lista del usuario
        function addToUserList() {
            if (!currentUser) {
                showNotification('Debes iniciar sesión para agregar películas a tu lista', 'error');
                return;
            }
            
            // Obtener la película actual del modal
            const currentMovieTitle = movieModalTitle.textContent;
            const currentMovie = allMovies.find(movie => movie.title === currentMovieTitle);
            
            if (!currentMovie) return;
            
            // Verificar si ya está en la lista
            if (userMovies.some(movie => movie.id === currentMovie.id)) {
                showNotification('Esta película ya está en tu lista', 'error');
                return;
            }
            
            // Agregar a la lista
            userMovies.push(currentMovie);
            
            // Guardar en localStorage
            localStorage.setItem(`userMovies_${currentUser.name}`, JSON.stringify(userMovies));
            
            showNotification(`"${currentMovie.title}" agregada a tu lista`);
        }

        // Quitar película de la lista del usuario
        function removeFromUserList(movieId) {
            userMovies = userMovies.filter(movie => movie.id !== movieId);
            
            // Guardar en localStorage
            localStorage.setItem(`userMovies_${currentUser.name}`, JSON.stringify(userMovies));
            
            // Actualizar vista
            displayUserMovies();
            
            showNotification('Película eliminada de tu lista');
        }

        // Cargar todas las películas desde la API general (solo para vista previa)
        async function loadAllMovies() {
            try {
                // Mostrar spinners en todas las secciones
                document.querySelectorAll('.content-row').forEach(row => {
                    row.innerHTML = '<div class="spinner"></div>';
                });

                const response = await fetch(API_URLS.general);
                const data = await response.json();
                
                allMovies = [];
                
                // Procesar datos de todas las categorías
                data.forEach(categoryData => {
                    if (categoryData.Pelis && Array.isArray(categoryData.Pelis)) {
                        categoryData.Pelis.forEach(peliGroup => {
                            Object.keys(peliGroup).forEach(category => {
                                const moviesArray = peliGroup[category];
                                if (Array.isArray(moviesArray)) {
                                    moviesArray.forEach(movie => {
                                        if (movie.h2 && movie.img) {
                                            allMovies.push({
                                                id: movie.id || Math.random().toString(36).substr(2, 9),
                                                title: movie.h2,
                                                image: movie.img,
                                                openMovie: movie.openMovie,
                                                category: category,
                                                description: movie.description || 'Descripción no disponible'
                                            });
                                        }
                                    });
                                }
                            });
                        });
                    }
                });

                // Si no hay suficientes películas, agregar datos de ejemplo
                if (allMovies.length < 10) {
                    allMovies = allMovies.concat([
                        {
                            id: "ex1",
                            title: "Jackass 4.5",
                            image: "https://ww8.cuevana3.to/poster/jackass-4-5-thumb.jpg",
                            openMovie: "https://cinestart.streams3.com/player.php?id=dkIwSWpDZm1oRFk4WE5Dbm9rQWRkTllOeHFXS3FvdlhCOFBadDRYdXJqajI1clFSTGZxNlBkVkV4cFMyTkZvKw&token=ChmCd0pdZmFCUEFLgdxNHWVCks9AVsFvD9Unj3vSROXcQago6X0Wvp4PyPVvX9OZ",
                            category: "comedia",
                            description: "Una colección de tomas falsas y contenido adicional de Jackass Forever."
                        },
                        {
                            id: "ex2",
                            title: "Avatar: El Camino del Agua",
                            image: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg",
                            openMovie: "#",
                            category: "accion",
                            description: "Jake Sully y Ney'tiri forman una familia en Pandora mientras enfrentan nuevas amenazas."
                        },
                        {
                            id: "ex3",
                            title: "Top Gun: Maverick",
                            image: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_FMjpg_UX1000_.jpg",
                            openMovie: "#",
                            category: "accion",
                            description: "Pete Mitchell regresa para entrenar a un grupo de graduados de Top Gun."
                        },
                        {
                            id: "ex4",
                            title: "Black Panther: Wakanda Forever",
                            image: "https://m.media-amazon.com/images/M/MV5BNTM4NjIxNmEtYWE5NS00NDczLTkyNWQtYThhNmQyZGQzMjM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
                            openMovie: "#",
                            category: "accion",
                            description: "El pueblo de Wakanda lucha para proteger su nación tras la muerte del Rey T'Challa."
                        },
                        {
                            id: "ex5",
                            title: "The Batman",
                            image: "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_FMjpg_UX1000_.jpg",
                            openMovie: "#",
                            category: "accion",
                            description: "Batman investiga la corrupción en Gotham City mientras se enfrenta al Enigma."
                        }
                    ]);
                }

                // Mostrar solo 10 películas por sección en la página principal
                displayMoviesRow(getRandomMovies(10), trendingContent);
                displayMoviesByCategory('terror', terrorContent);
                displayMoviesByCategory('romance', romanceContent);
                displayMoviesByCategory('comedia', comediaContent);
                displayMoviesByCategory('animacion', animacionContent);
                displayMoviesByCategory('accion', accionContent);
                displayMoviesByCategory('guerra', guerraContent);
                
                // Configurar primera película del héroe
                updateHeroMovie();
                
            } catch (error) {
                console.error('Error cargando películas:', error);
                document.querySelectorAll('.content-row').forEach(row => {
                    row.innerHTML = '<div class="error-message">Error al cargar las películas</div>';
                });
            }
        }

        // Mostrar películas por categoría específica (solo 10 en página principal)
        function displayMoviesByCategory(category, container) {
            const categoryMovies = allMovies.filter(movie => 
                movie.category === category
            );
            
            if (categoryMovies.length > 0) {
                // Mezclar aleatoriamente las películas y mostrar solo 10
                const shuffledMovies = [...categoryMovies].sort(() => 0.5 - Math.random());
                displayMoviesRow(shuffledMovies.slice(0, 10), container);
            } else {
                container.innerHTML = '<div class="error-message">No hay películas en esta categoría</div>';
            }
        }

        // Obtener películas aleatorias
        function getRandomMovies(count) {
            const shuffled = [...allMovies].sort(() => 0.5 - Math.random());
            return shuffled.slice(0, count);
        }

        // Mostrar películas en una sección con scroll horizontal
        function displayMoviesRow(moviesList, container) {
            container.innerHTML = '';
            
            if (moviesList.length === 0) {
                container.innerHTML = '<div class="error-message">No hay películas disponibles</div>';
                return;
            }
            
            moviesList.forEach(movie => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <img src="${movie.image}" alt="${movie.title}" class="card-img" onerror="this.src='https://via.placeholder.com/200x300?text=Sin+imagen'">
                    <div class="card-title">${movie.title}</div>
                `;
                
                card.addEventListener('click', () => showMovieDetails(movie));
                container.appendChild(card);
            });
        }

        // Mostrar películas en grid (para categorías específicas y búsqueda)
        function displayMoviesGrid(moviesList, container) {
            container.innerHTML = '';
            
            if (moviesList.length === 0) {
                container.innerHTML = '<div class="error-message">No hay películas disponibles</div>';
                return;
            }
            
            moviesList.forEach(movie => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <img src="${movie.image}" alt="${movie.title}" class="card-img" onerror="this.src='https://via.placeholder.com/200x300?text=Sin+imagen'">
                    <div class="card-title">${movie.title}</div>
                `;
                
                card.addEventListener('click', () => showMovieDetails(movie));
                container.appendChild(card);
            });
        }

        // Mostrar detalles de la película
        function showMovieDetails(movie) {
            movieModalTitle.textContent = movie.title;
            movieModalDescription.textContent = movie.description;
            
            // Configurar imagen de fondo si está disponible
            if (movie.image) {
                movieModalHeader.style.backgroundImage = `url(${movie.image})`;
            } else {
                movieModalHeader.style.backgroundImage = 'url(https://via.placeholder.com/900x400?text=Sin+imagen)';
            }
            
            // Actualizar metadatos
            document.getElementById('movieYear').textContent = movie.year || '2023';
            document.getElementById('movieDuration').textContent = movie.duration || '120 min';
            document.getElementById('movieRating').textContent = movie.rating ? `${movie.rating}/5` : '4.5/5';
            
            // Configurar botón de reproducción
            if (movie.openMovie && movie.openMovie !== '#') {
                modalPlayBtn.onclick = () => {
                    window.open(movie.openMovie, '_blank');
                };
            } else {
                modalPlayBtn.onclick = () => {
                    showNotification('Reproduciendo: ' + movie.title);
                };
            }
            
            movieModal.style.display = 'block';
        }

        // Filtrar por categoría y cargar TODAS las películas de esa categoría
        async function filterByCategory(category) {
            currentCategory = category;
            
            if (category === 'all') {
                // Mostrar página principal
                heroSection.style.display = 'flex';
                categoryTitle.style.display = 'none';
                document.querySelectorAll('.content-section').forEach(section => {
                    if (section.id !== 'categorySection') {
                        section.style.display = 'block';
                    }
                });
                categorySection.style.display = 'none';
                return;
            }
            
            // Ocultar secciones principales y mostrar sección de categoría
            heroSection.style.display = 'none';
            categoryTitle.style.display = 'block';
            categoryTitle.textContent = `Películas de ${category}`;
            document.querySelectorAll('.content-section').forEach(section => {
                if (section.id !== 'categorySection') {
                    section.style.display = 'none';
                }
            });
            categorySection.style.display = 'block';
            categorySectionTitle.innerHTML = `<i class="fas fa-film"></i> Películas de ${category}`;
            categoryViewAllBtn.setAttribute('data-category', category);
            
            // Mostrar spinner mientras se cargan los datos
            categoryContent.innerHTML = '<div class="spinner"></div>';
            
            try {
                let categoryMovies = [];
                
                // Cargar desde la API específica de la categoría
                const response = await fetch(API_URLS.categories[category]);
                const data = await response.json();
                
                // Procesar datos según la estructura de la API
                if (data.Pelis && Array.isArray(data.Pelis)) {
                    data.Pelis.forEach(peliGroup => {
                        if (peliGroup[category] && Array.isArray(peliGroup[category])) {
                            peliGroup[category].forEach(movie => {
                                if (movie.h2 && movie.img) {
                                    categoryMovies.push({
                                        id: movie.id || Math.random().toString(36).substr(2, 9),
                                        title: movie.h2,
                                        image: movie.img,
                                        openMovie: movie.openMovie,
                                        category: category,
                                        description: movie.description || 'Descripción no disponible'
                                    });
                                }
                            });
                        }
                    });
                }
                
                // Si no se encontraron películas, mostrar mensaje
                if (categoryMovies.length === 0) {
                    categoryContent.innerHTML = '<div class="error-message">No hay películas disponibles en esta categoría</div>';
                    return;
                }
                
                // Mostrar TODAS las películas de la categoría en grid
                displayMoviesGrid(categoryMovies, categoryContent);
                
            } catch (error) {
                console.error(`Error cargando películas de ${category}:`, error);
                categoryContent.innerHTML = '<div class="error-message">Error al cargar las películas de esta categoría</div>';
            }
        }

        // Actualizar película del héroe
        function updateHeroMovie() {
            if (allMovies.length === 0) return;
            
            const randomMovie = getRandomMovies(1)[0];
            heroSection.style.backgroundImage = `url(${randomMovie.image})`;
            heroTitle.textContent = randomMovie.title;
            heroDescription.textContent = randomMovie.description;
            
            // Configurar botones del héroe
            heroPlayBtn.onclick = () => {
                if (randomMovie.openMovie && randomMovie.openMovie !== '#') {
                    window.open(randomMovie.openMovie, '_blank');
                } else {
                    showMovieDetails(randomMovie);
                }
            };
            
            heroInfoBtn.onclick = () => {
                showMovieDetails(randomMovie);
            };
        }

        // Iniciar rotación de películas en el héroe
        function startHeroRotation() {
            // Cambiar cada 5 minutos (300000 ms)
            heroInterval = setInterval(updateHeroMovie, 300000);
        }

        // Manejar inicio de sesión
        async function handleLogin(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if (!username || !password) {
                showNotification('Por favor, completa todos los campos', 'error');
                return;
            }
            
            try {
                const response = await fetch(API_URLS.login);
                const users = await response.json();
                
                // Buscar usuario por nombre y contraseña
                const user = users.find(u => u.name === username && u.password === password);
                
                if (user) {
                    currentUser = user;
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    
                    // Cargar películas guardadas del usuario
                    const savedMovies = localStorage.getItem(`userMovies_${user.name}`);
                    if (savedMovies) {
                        userMovies = JSON.parse(savedMovies);
                    } else {
                        userMovies = [];
                    }
                    
                    loginModal.style.display = 'none';
                    
                    // Actualizar interfaz de usuario
                    updateUserInterface();
                    
                    showNotification(`Bienvenido, ${user.name}!`);
                } else {
                    showNotification('Usuario o contraseña incorrectos', 'error');
                }
            } catch (error) {
                console.error('Error en inicio de sesión:', error);
                showNotification('Error al conectar con el servidor', 'error');
            }
        }

        // Manejar registro
        async function handleRegister(e) {
            e.preventDefault();
            
            const name = document.getElementById('regName').value;
            const username = document.getElementById('regUsername').value;
            const password = document.getElementById('regPassword').value;
            const confirmPassword = document.getElementById('regConfirmPassword').value;
            
            if (!name || !username || !password || !confirmPassword) {
                showNotification('Por favor, completa todos los campos', 'error');
                return;
            }
            
            if (password !== confirmPassword) {
                showNotification('Las contraseñas no coinciden', 'error');
                return;
            }
            
            if (password.length < 6) {
                showNotification('La contraseña debe tener al menos 6 caracteres', 'error');
                return;
            }
            
            try {
                // Verificar si el usuario ya existe
                const response = await fetch(API_URLS.login);
                const users = await response.json();
                
                const existingUser = users.find(u => u.name === name);
                if (existingUser) {
                    showNotification('Este nombre de usuario ya está registrado', 'error');
                    return;
                }
                
                // Crear nuevo usuario (en una implementación real, esto se haría con POST)
                const newUser = {
                    name: name,
                    password: password,
                    img: "https://via.placeholder.com/150?text=Usuario",
                    CuentaCreada: [{ Fecha: `Creación de la cuenta fecha: ${new Date().toLocaleDateString()}` }],
                    "url-portada": "null",
                    descripcionuser: "Edita Tu Descripcion",
                    cardsociales: [{ social: "null", imgenurl: "null", urlperfil: "null" }]
                };
                
                // En una implementación real, enviaríamos newUser al servidor con POST
                // Para esta demo, simulamos el registro
                currentUser = newUser;
                localStorage.setItem('currentUser', JSON.stringify(newUser));
                
                // Inicializar lista de películas vacía
                userMovies = [];
                localStorage.setItem(`userMovies_${name}`, JSON.stringify(userMovies));
                
                registerModal.style.display = 'none';
                
                // Actualizar interfaz de usuario
                updateUserInterface();
                
                showNotification(`Cuenta creada exitosamente. Bienvenido, ${name}!`);
            } catch (error) {
                console.error('Error en registro:', error);
                showNotification('Error al crear la cuenta. Inténtalo de nuevo.', 'error');
            }
        }

        // Actualizar interfaz de usuario después del login/registro
        function updateUserInterface() {
            if (currentUser) {
                loginBtn.style.display = 'none';
                profileBtn.style.display = 'none';
                userAvatar.style.display = 'block';
                
                if (currentUser.img && currentUser.img !== "") {
                    userAvatar.src = currentUser.img;
                } else {
                    userAvatar.src = "https://via.placeholder.com/150?text=Usuario";
                }
                
                userAvatar.alt = currentUser.name;
            }
        }

        // Manejar cierre de sesión
        function handleLogout() {
            currentUser = null;
            localStorage.removeItem('currentUser');
            loginBtn.style.display = 'block';
            profileBtn.style.display = 'block';
            userAvatar.style.display = 'none';
            loginBtn.textContent = 'Iniciar Sesión';
            userMovies = [];
            showNotification('Sesión cerrada correctamente');
        }

        // Verificar estado de inicio de sesión
        function checkLoginStatus() {
            const savedUser = localStorage.getItem('currentUser');
            if (savedUser) {
                currentUser = JSON.parse(savedUser);
                updateUserInterface();
                
                // Cargar películas guardadas del usuario
                const savedMovies = localStorage.getItem(`userMovies_${currentUser.name}`);
                if (savedMovies) {
                    userMovies = JSON.parse(savedMovies);
                }
            }
        }
 
        // Mostrar notificación
        function showNotification(message, type = 'success') {
            notification.textContent = message;
            notification.style.display = 'block';
            notification.style.backgroundColor = type === 'error' ? '#e50914' : '#2ecc71';
            
            setTimeout(() => {
                notification.style.display = 'none';
            }, 3000);
        }
      
 
