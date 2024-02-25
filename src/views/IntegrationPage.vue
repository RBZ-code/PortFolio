<template>
    <section class="section">
        <div class="container_btn">
            <SectionButton class="btn-top" direction="left" @click="goBack" />
        </div>
        <div class="title-container">
            <h1 class="title">Intégration</h1>
        </div>
        <div class="container">
            <div class="game-card">
                <h2>Landing page Agence Lorem</h2>
                <p>
                    Découvrez la maquette d'une landing page pour une agence fictive.
                </p>
                <GameCard
                    :redirectURL="'https://rbz-code.github.io/maquette-Agence-Lorem/'"
                    backgroundA="url(https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
                    :backgroundB="backgroundSnake"
                />
            </div>
            <div class="game-card">
                <h2>Site fonctionnel E-commerce</h2>
                <p>
                    Explorez un projet de site web fonctionnel pour une plateforme de commerce en ligne.
                </p>
                <GameCard
                    :redirectURL="'https://rbz-code.github.io/projet-ww/'"
                    backgroundA="url(https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
                    :backgroundB="backgroundSite"
                />
            </div>
            <div class="game-card">
                <h2>Landing page Restaurant</h2>
                <p>
                    Découvrez la conception d'une page d'accueil pour un restaurant avec cette maquette.
                </p>
                <GameCard
                    :redirectURL="'https://rbz-code.github.io/page-vitrine-restau/'"
                    backgroundA="url(https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
                    :backgroundB="backgroundResto"
                />
            </div>
        </div>
    </section>
</template>

<script>
import SectionButton from "@/components/SectionButton.vue";
import GameCard from "@/components/GameCard.vue";
import agenceImage from "../assets/agenceLorem.png";
import SiteImage from "../assets/SiteWW.png";
import RestoImage from "../assets/restau.png";

export default {
    data() {
        return {
            backgroundSnake: `url(${agenceImage})`,
            backgroundSite: `url(${SiteImage})`,
            backgroundResto: `url(${RestoImage})`,
        };
    },
    components: {
        SectionButton,
        GameCard,
    },
    methods: {
        goBack() {
            this.$router.go(-1);
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

.btn-bot,
.btn-top {
    z-index: 2;
    position: absolute;
}

.btn-top {
    left: 20px;
    top: 50%;
}

.container {
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 5%;
    width: 100%;
}

.game-card {
    margin: 20px;
    padding: 20px;
    border-radius: 10px;
    background-color: #333;
    color: #fff;
    width: 300px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
}

.game-card:hover {
    transform: translateY(-1px);
}

.title-container {
    text-align: center;
    margin-bottom: 60px;
    margin-top: 60px;
}

.title {
    font-size: 3rem;
    color: #FFD700; 
    text-transform: uppercase;
}

h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
}

p {
    font-size: 1rem;
    margin-bottom: 20px;
}

.section {
    color: #ffffff; 
    background-color: #0d0d0d;
    height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media(min-width: 1800px) {
.section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
}
</style>
