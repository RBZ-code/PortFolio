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
        nextSection="skills"
        prevSection="welcome"
        @changeSection="changeSection"
        data-section="about"
        :isActive="currentSection === 'about'"
    />
    <Competence
        v-show="currentSection === 'skills'"
        nextSection="experience"
        prevSection="about"
        @changeSection="changeSection"
        data-section="skills"
        :isActive="currentSection === 'skills'"
    />
    <Section
        v-show="currentSection === 'experience'"
        title="Recherche de stage et d'alternance"
        content="Je suis actuellement à la recherche d'un stage dans le domaine du développement web. Passionné et motivé, je suis prêt à plonger tête baissée dans un environnement professionnel pour acquérir de l'expérience concrète et mettre mes compétences en pratique. Si vous cherchez quelqu'un de curieux et déterminé à rejoindre votre équipe, je suis là !

Je suis également ouvert à une opportunité d'alternance pour l'année prochaine. Si vous êtes prêts à accueillir un étudiant motivé et désireux d'apprendre tout en contribuant à votre projet, n'hésitez pas à me contacter."
        nextSection="contact"
        prevSection="skills"
        contactButton="true"
        @changeSection="changeSection"
        data-section="experience"
    />
    <Contact
        v-show="currentSection === 'contact'"
        prevSection="experience"
        @changeSection="changeSection"
        data-section="contact"
    />
</template>

<script>
import Header from "../components/Headerpage.vue";
import Section from "../components/SectionPage.vue";
import Contact from "../components/ContactPage.vue";
import Salut from "../components/SalutPage.vue";
import Propos from "../components/APropos.vue";
import Competence from "../components/CompetencePage.vue"

export default {
    components: {
        Header,
        Section,
        Contact,
        Salut,
        Propos,
        Competence
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

<style>

</style>
