<template>
    <Header />
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
</template>

<script>

import Contact from "../components/ContactPage.vue";
import Salut from "../components/SalutPage.vue";
import Propos from "../components/APropos.vue";
import Projets from "../components/MesProjets.vue";
import Alternance from "../components/AlternancePage.vue"

export default {
    components: {
        Contact,
        Salut,
        Propos,
        Projets,
        Alternance,
    },
    data() {
        return {
            currentSection: "welcome", // Initial section displayed
        };
    },
    methods: {
        changeSection(section) {
            this.currentSection = section;
        },
    },
};
</script>

<style></style>
