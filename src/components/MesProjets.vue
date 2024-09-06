<template>
    <section
        :id="sectionId"
        class="projets-section"
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
            <!-- Passer les données des cartes en tant que prop -->
            <Animation :cards="cardsData" />
        </div>

        <div class="container_btn">
            <SectionButton
                class="btn-bot"
                :nextSection="nextSection"
                @changeSection="navigate"
            />
        </div>
    </section>
</template>

<script>
import Animation from "@/components/AnimationCards.vue";
import SectionButton from "@/components/SectionButton.vue";

export default {
    data() {
        return {
            sectionId: "projets-section",
            cardsData: [
                {
                    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    header: "Integrations",
                    content:
                        "Découvrez des intégrations et des projets combinant différentes technologies.",
                },
                {
                    image: "https://plus.unsplash.com/premium_photo-1669658981858-b2ae0d7581a3?q=80&w=1108&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    header: "Applications",
                    content:
                        "Explorez différentes applications utiles et amusantes.",
                },
                {
                    image: "https://images.unsplash.com/photo-1504370164829-8c6ef0c41d06?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    header: "Games",
                    content: "Découvrez une sélection de jeux à essayer.",
                },
                {
                    image: "https://images.unsplash.com/photo-1637416067365-2b5e7e8fe8fa?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    header: "Animations",
                    content: "Explorez des animations et des effets visuels.",
                },
            ],
        };
    },
    components: {
        SectionButton,
        Animation,
    },
    props: {
        prevSection: String,
        nextSection: String,
        isActive: Boolean,
    },
    methods: {
        navigate(section) {
            this.$emit("changeSection", section);
        },
        toGames() {
            this.$router.push("/games");
        },
    },
};
</script>

<style scoped>
.container_btn {
    display: flex;
    justify-content: center;
    align-items: center;
}
.btn-top {
    z-index: 2;
    position: absolute;
}

.btn-bot {
    bottom: 20px;
    position: absolute;
}

.btn-top {
    top: 20px;
}

.projets-section {
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
    overflow-y: visible;
}

@media screen and (max-width: 679px) {
    .btn-bot {
        bottom: -450px;
        position: absolute;
    }
}
</style>
