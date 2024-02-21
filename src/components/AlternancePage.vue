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
            <CustomButton class="btn" buttonText="Contactez moi" background="#FFE27D" gradient="url(#paint0_linear)" />
            <CustomButton class="btn" buttonText="Mon CV" background="#FFE27D" gradient="url(#paint0_linear)" />
        </div>

        <img src="../assets/Ninja.png" alt="ninja" class="ninja" />
        <img src="../assets/Chef2.png" alt="Cuisinier" class="chef" />
    </section>
</template>

<script>
import SectionButton from "@/components/SectionButton.vue";
import CustomButton from "@/components/CustomButton.vue";

export default {
    data() {
        return {
            sectionId: "Alternance-section",
        };
    },
    components: {
        SectionButton,
        CustomButton,

    },
    props: {
        prevSection: String,
        isActive: Boolean,
    },
    methods: {
        navigate(section) {
            this.$emit("changeSection", section);
        },
    },
};
</script>

<style scoped>
.block-btns{
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
    overflow: hidden;
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
