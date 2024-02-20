<template>
    <section
        :id="sectionId"
        :class="{ 'about-section': true, active: isActive }"
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
            <h2 class="section-title" ref="title">À propos de moi</h2>
            <p class="about-description">Bonjour à tous !</p>
            <p class="about-description">
                Je suis Romain Bezolles, un passionné de développement web en
                pleine reconversion professionnelle.
            </p>
            <p class="about-description">
                À 33 ans, je suis actuellement en formation pour devenir
                développeur web. Mon parcours atypique, nourri par ma passion
                pour les jeux vidéo, m'a conduit à explorer le monde fascinant
                de la programmation.
            </p>
        </div>
        <div class="container_btn">
            <SectionButton
                class="btn-bot"
                :nextSection="nextSection"
                @changeSection="navigate"
            />
        </div>
        <img src="../assets/Ninja.png" alt="ninja" class="ninja" />
        <img src="../assets/Chef2.png" alt="Cuisinier" class="chef">
    </section>
</template>

<script>
import SectionButton from "@/components/SectionButton.vue";

export default {
    data() {
        return {
            sectionId: "about-section",
        };
    },
    components: {
        SectionButton,
    },
    props: {
        prevSection: String,
        nextSection: String,
        isActive: Boolean, // Définissez la prop isActive ici
    },
    methods: {
        navigate(section) {
            this.$emit("changeSection", section);
        },
    },
};
</script>

<style scoped>

.chef {
    z-index: -1;
    position: absolute;
    width: auto;
    height: 8rem;
    bottom: 60px;
    left: 60px;
}

.ninja {
    z-index: -1;
    position: absolute;
    width: 80px;
    height: auto;
    top: 60px;
    right: 60px;
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
    overflow: hidden;
    animation: bounce-in-left 2s ease forwards;
}


@keyframes bounce-in-left {
    0% {
        opacity: 0;
        transform: translateX(-200%);
    }
    60% {
        opacity: 1;
        transform: translateX(30px);
    }
    80% {
        transform: translateX(-10px);
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
    text-align: center;
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
