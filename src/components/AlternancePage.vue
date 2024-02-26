<template>
    <section
        :id="sectionId"
        class="about-section"
        :class="{ 'dark-mode': $store.state.isDarkMode }"
    >
        <div class="container_btn">
            <SectionButton
                class="btn-top"
                :nextSection="prevSection"
                @changeSection="navigate"
                direction="up"
            />
        </div>

        <div class="content">
            <h2 class="section-title" ref="title">
                Recherche de stage et d'alternance
            </h2>
            <p class="about-description">
                Je suis actuellement à la recherche d'un stage dans le domaine
                du développement web. Passionné et motivé, je suis prêt à
                plonger tête baissée dans un environnement professionnel pour
                acquérir de l'expérience concrète et mettre mes compétences en
                pratique.
            </p>
            <p class="about-description">
                Si vous cherchez quelqu'un de curieux et déterminé à rejoindre
                votre équipe, je suis là !
            </p>
            <p class="about-description">
                Je suis également ouvert à une opportunité d'alternance pour
                l'année prochaine. Si vous êtes prêts à accueillir un étudiant
                motivé et désireux d'apprendre tout en contribuant à votre
                projet, n'hésitez pas à me contacter.
            </p>
        </div>
        <div class="block-btns">
            <CustomButton
                class="btn"
                buttonText="Contactez moi"
                background="#3498db"
                gradient="url(#paint0_linear)"
                :nextSection="nextSection"
                @changeSection="navigate"
            />
            <CustomButton
                class="btn cv"
                buttonText="Mon CV"
                background="#3498db"
                gradient="url(#paint0_linear)"
                @click="openCVModal"
            />
        </div>
        <!-- Modal -->

        <div v-if="showCVModal" class="container-img" @click="closeCVModal">
            <div class="cv-page-container">
                <img
                    v-bind:class="{ 'cv-page-large': enlargedImage }"
                    src="../assets/Developpeur Web - Romain Bezolles - CV-1.png"
                    alt="CV-Romain Bezolles"
                    class="cv-page"
                    @click="toggleImageSize"
                />
                <a :href="pdfLink" download="download">
                    <img
                        src="../assets/download.png"
                        class="download-icon"
                        alt="Télécharger le CV"
                        v-bind:class="{ 'download-btn-large': enlargedImage }"
                /></a>
            </div>
        </div>

        <img src="../assets/Chef2.png" alt="Cuisinier" class="chef" />
    </section>
</template>

<script>

import SectionButton from "@/components/SectionButton.vue";
import CustomButton from "@/components/CustomButton.vue";
import cv from '../assets/Romain Bezolles - CV -DEV.pdf';
export default {
    data() {
        return {
            sectionId: "Alternance-section",
            showCVModal: false,
            enlargedImage: false,
            pdfLink: cv,
        };
    },
    components: {
        SectionButton,
        CustomButton,
    },
    props: {
        prevSection: String,
        isActive: Boolean,
        nextSection: String,
    },
    methods: {
        navigate(section) {
            this.$emit("changeSection", section);
        },
        openCVModal() {
            this.showCVModal = true;
            this.enlargedImage = false;
        },
        closeCVModal(event) {
            if (!event.target.closest(".cv-page-container")) {
                this.showCVModal = false;
            }
        },
        toggleImageSize() {
            this.enlargedImage = !this.enlargedImage;
        },
    },
};
</script>

<style scoped>
.cv-page-large {
    cursor: zoom-out !important;
    transform: translateY(15%) !important;
    z-index: 9;
    scale: 1.5;
    transition: 0.5s;
}

.download-btn {
    z-index: 10;
}

.download-btn-large {
    visibility: hidden;
}

.container-img {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
}
.cv-page-container {
    position: relative;
}

.cv-page {
    max-width: 90vw;
    max-height: 90vh;
    width: auto;
    height: auto;
    object-fit: contain;
    z-index: 3;
    animation: modalFadeIn 1s forwards ease-in;
    transform-origin: center;

    transition: 0.5s;
    cursor: zoom-in;
    position: relative;
}

.download-icon {
    position: absolute;
    top: 5%;
    right: 5%;
    width: 50px;
    height: 50px;
    cursor: pointer;
    z-index: 4;
}

@keyframes modalFadeIn {
    0% {
        opacity: 0;
        height: 0;
        transform: scaleY(0);
    }
    80% {
        opacity: 1;
        height: 100%;
        transform: scaleY(1.1);
    }
    90% {
        opacity: 1;
        height: 100%;
        transform: scaleY(0.9);
    }
    100% {
        opacity: 1;
        height: 100%;
        transform: scaleY(1);
    }
}

.block-btns {
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    gap: 10%;
}

.chef {
    z-index: -2;
    position: absolute;
    width: auto;
    height: 8rem;
    bottom: 40px;
    left: 40px;
}

.ninja {
    z-index: -1;
    position: absolute;
    width: 80px;
    height: auto;
    top: 40px;
    right: 40px;
}

.about-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: #0d0d0d;
    color: #ffffff;
    position: relative;
    /* overflow: hidden; */
    overflow-y: auto;

    animation: bounce-in-left 2s ease forwards;
}

@keyframes bounce-in-left {
    0% {
        opacity: 0;
        transform: translateX(200%);
    }
    60% {
        opacity: 1;
        transform: translateX(-30px);
    }
    80% {
        transform: translateX(10px);
    }
    100% {
        transform: translateX(0);
    }
}

.section-title {
    font-size: 36px;
    margin-bottom: 20px;
    text-align: center;
}

.about-description {
    font-size: 20px;
    margin: 10px 0;
    max-width: 600px;
    text-align: center ;
}
@media (max-width: 600px) {
    .about-description {
        font-size: 16px; 
        max-width: 400px;
        text-align: center;
        padding: 0 5%;
        margin: auto;
    }
}

.container_btn {
    display: flex;
    justify-content: center;
    align-items: center;
}

.btn-bot,
.btn-top {
    z-index: 2;
    position: absolute;
}

.btn-bot {
    bottom: 20px;
}

.btn-top {
    top: 20px;
}
</style>
