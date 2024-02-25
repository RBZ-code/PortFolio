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
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Contact from "../components/ContactPage.vue";
import Salut from "../components/SalutPage.vue";
import Propos from "../components/APropos.vue";
import Projets from "../components/MesProjets.vue";
import Alternance from "../components/AlternancePage.vue";
import { ref, provide } from 'vue';

export default {
    components: {
        NavBar,
        Contact,
        Salut,
        Propos,
        Projets,
        Alternance,
    },
    setup() {
        const currentSection = ref("welcome"); // Définir la section actuelle

        // Fournir la valeur currentSection à tous les composants enfants
        provide('currentSection', currentSection);

        const changeSection = (section) => {
            currentSection.value = section;
        };

        return {
            currentSection,
            changeSection,
        };
    },
};
</script>

<style>
.landing-page{
    overflow: hidden;
}
</style>
