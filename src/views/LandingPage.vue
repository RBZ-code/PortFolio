<template>
    <div class="landing-page">
        <NavBar @changeSection="changeSection" />
        <Salut
            v-show="currentSection === 'welcome'"
            nextSection="about"
            @changeSection="changeSection"
            data-section="welcome"
            :isActive="currentSection === 'welcome'"
        />
        <Propos
            v-show="currentSection === 'about'"
            nextSection="projets"
            prevSection="welcome"
            @changeSection="changeSection"
            data-section="about"
            :isActive="currentSection === 'about'"
        />
        <Projets
            v-show="currentSection === 'projets'"
            nextSection="experience"
            prevSection="about"
            @changeSection="changeSection"
            data-section="projets"
            :isActive="currentSection === 'projets'"
        />
        <Alternance
            v-show="currentSection === 'experience'"
            nextSection="contact"
            prevSection="projets"
            @changeSection="changeSection"
            data-section="experience"
            :isActive="currentSection === 'experience'"
        />
        <Contact
            v-show="currentSection === 'contact'"
            prevSection="experience"
            @changeSection="changeSection"
            data-section="contact"
            :isActive="currentSection === 'contact'"
        />

        <!-- <button class="test" @click="toggleTheme">Toggle Theme</button> -->
        <div class="switch dark-mode-switch test-btn" >
            <label>
                <input
                    type="checkbox"
                    name="dark_light"
                    v-model="isDarkMode"
                    title="Toggle dark/light mode"
                    @click="toggleTheme"
                />
                <span class="lever"></span>
                Dark Mode
            </label>
        </div>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Contact from "../components/ContactPage.vue";
import Salut from "../components/SalutPage.vue";
import Propos from "../components/APropos.vue";
import Projets from "../components/MesProjets.vue";
import Alternance from "../components/AlternancePage.vue";
import { ref, provide } from "vue";

export default {
    methods: {
        toggleTheme() {
            this.$store.commit("toggleTheme");
            console.log("clique");
        },
    },
    components: {
        NavBar,
        Contact,
        Salut,
        Propos,
        Projets,
        Alternance,
    },
    setup() {
        const isDarkMode = ref(true);
        const currentSection = ref("welcome"); // Définir la section actuelle
        provide("isDarkMode", isDarkMode);
        // Fournir la valeur currentSection à tous les composants enfants
        provide("currentSection", currentSection);

        const changeSection = (section) => {
            currentSection.value = section;
        };

        return {
            currentSection,
            changeSection,
            isDarkMode,
        };
    },
};
</script>

<style>
.dark-mode {
    background-color: #111 !important;
    color: #eee !important;
}

.dark-mode a {
    color: #111;
}

.dark-mode button {
    background-color: #eee;
    color: #111;
}

/* Styles pour le mode clair */
.light-mode {
    background-color: #eee;
    color: #111;
}

.light-mode a {
    color: #eee;
}

.light-mode button {
    background-color: #111;
    color: #eee;
}

/* Styles pour le bouton de commutation */
.switch.dark-mode-switch label {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
}

.switch.dark-mode-switch label input {
    display: none;
}

.switch.dark-mode-switch label .lever {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    border-radius: 34px;
    transition: background-color 0.2s;
}

.switch.dark-mode-switch label .lever:before {
    content: "";
    position: absolute;
    top: 4px;
    left: 4px;
    width: 26px;
    height: 26px;
    background-color: #3498db;
    border-radius: 50%;
    transition: transform 0.2s;
}

.switch.dark-mode-switch label input:checked + .lever {
    background-color: #f0f5f9;
}

.switch.dark-mode-switch label input:checked + .lever:before {
    transform: translateX(26px);
}
.test-btn {
    position: fixed;
    top: 20px;
    left: 20px;
    cursor: pointer;
    z-index: 1000;
}

.dark-mode {
    background-color: #f0f5f9 !important; /* Arrière-plan clair */
    color: #1f1f1f !important; /* Texte sombre */
}
.landing-page {
    overflow: hidden;
}
</style>
