<template>
    <div id="app" :class="{ 'dark-mode': $store.state.isDarkMode }">
        <router-view></router-view>
        <landing-page />
        
    </div>
</template>

<script>
import LandingPage from "./views/LandingPage.vue";

export default {
    name: "App",
    components: {
        LandingPage,
    },
    methods: {
        toggleTheme() {
            this.$store.commit("toggleTheme");
        },
    },
};
</script>




<style>

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100vh;
    background-color: #2c3e50;
    overflow: hidden;
}

* {
    margin: 0;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
