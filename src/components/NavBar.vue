<template>
    <div class="navbar-toggle" @click="toggleMenu" v-if="!isMenuOpen"
    :class="{ 'dark-mode': $store.state.isDarkMode }">
        <span :class="{ 'dark-mode-span': $store.state.isDarkMode }"></span>
        <span :class="{ 'dark-mode-span': $store.state.isDarkMode }"></span>
        <span :class="{ 'dark-mode-span': $store.state.isDarkMode }"></span>
    </div>
    <nav class="navbar" :class="{ active: isMenuOpen }" ref="burgerMenu">
        <ul class="navbar-menu">
            <li><a @click="navigateTo('welcome')">HOME</a></li>
            <li><a @click="navigateTo('about')">A PROPOS</a></li>
            <li><a @click="navigateTo('projets')">PROJETS</a></li>
            <li><a @click="navigateTo('experience')">CV</a></li>
            <li><a @click="navigateTo('contact')">CONTACT</a></li>
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            isMenuOpen: false,
        };
    },
    methods: {
        toggleMenu(event) {
            event.stopPropagation(); 
            this.isMenuOpen = !this.isMenuOpen;
        },
        navigateTo(section) {
            if (this.$route.path !== '/') {
                this.$router.push('/'); 
            }
            this.$nextTick(() => {
                this.$emit("changeSection", section); // Émettre un événement pour indiquer la section spécifique après la redirection vers la page d'accueil
            });
            this.isMenuOpen = false; 
        },
        handleGlobalClick(event) {
            if (!this.$refs.burgerMenu.contains(event.target)) {
                this.isMenuOpen = false; 
            }
        },
    },
    mounted() {
        document.addEventListener("click", this.handleGlobalClick);
    },
    beforeUnmount() {
        document.removeEventListener("click", this.handleGlobalClick);
    },
};
</script>

<style scoped>
.dark-mode-span {
    background-color: #000 !important;
}

.navbar {
    position: fixed;
    top: 0;
    right: 0; 
    width: 100px; 
    height: 100vh;
    background-color: rgba(51, 51, 51, 0.5);
    z-index: 1000;

    transition: transform 0.3s ease-in-out; 
    transform: translateX(
        100%
    ); 
}

.navbar.active {
    transform: translateX(
        0
    ); 
}

.navbar-toggle {
    cursor: pointer;
    padding: 20px;
    text-align: center;
    position: absolute;
    top: 4%;
    right: 4%;
    z-index: 10;
    background-color: transparent !important;
}

.navbar-toggle span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: #fff; /* Couleur des lignes du menu burger */
    margin: 5px auto;
}

.navbar-menu {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;
    padding: 0;
    margin: 0;
}

.navbar-menu li {
    margin-bottom: 20px; 
}

.navbar-menu li a {
    position: relative; 
    color: #fff;
    text-decoration: none;
    font-size: 14px;
    display: block;
    padding: 10px;
    cursor: pointer;
}

.navbar-menu li a::before {
    content: "";
    position: absolute;
    bottom: 0; 
    left: 0;
    width: 100%; 
    height: 1px; 
    background-color: #3498db;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 400ms ease-in-out;
}

.navbar-menu li a:hover::before {
    transform: scaleX(1);
}

</style>
