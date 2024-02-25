<template>
    <section class="section">
        <div class="container_btn">
            <SectionButton class="btn-top" direction="left" @click="goBack" />
        </div>
        <div class="title-container">
            <h1 class="title">App</h1>
        </div>
        <div class="container">
            <div class="game-card">
                <h2>Calculateur IMC</h2>
                <p>
                    Un outil pratique pour calculer votre indice de masse corporelle.
                </p>
                <GameCard
                    :redirectURL="'https://rbz-code.github.io/Calculateur-IMC/'"
                    backgroundA="url(https://plus.unsplash.com/premium_photo-1669658981858-b2ae0d7581a3?q=80&w=1108&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
                    :backgroundB="backgroundImc"
                />
            </div>
            <div class="game-card">
                <h2>Générateur de Gradient</h2>
                <p>
                    Créez des dégradés de couleurs personnalisés pour vos projets.
                </p>
                <GameCard
                    :redirectURL="'https://rbz-code.github.io/generateur-linear-gradient/'"
                    backgroundA="url(https://plus.unsplash.com/premium_photo-1669658981858-b2ae0d7581a3?q=80&w=1108&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
                    :backgroundB="backgroundGradient"
                />
            </div>
            <div class="game-card">
                <h2>API Wuf</h2>
                <p>
                    Découvrez des images aléatoires amusantes avec cette API.
                </p>
                <GameCard
                    :redirectURL="'https://rbz-code.github.io/API-Wuf/'"
                    backgroundA="url(https://plus.unsplash.com/premium_photo-1669658981858-b2ae0d7581a3?q=80&w=1108&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
                    :backgroundB="backgroundWuf"
                />
            </div>
            <div class="game-card">
                <h2>API Météo</h2>
                <p>
                    Obtenez les prévisions météorologiques actuelles et à venir.
                </p>
                <GameCard
                    :redirectURL="'https://rbz-code.github.io/Meteo-API/'"
                    backgroundA="url(https://plus.unsplash.com/premium_photo-1669658981858-b2ae0d7581a3?q=80&w=1108&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
                    :backgroundB="backgroundMeteo"
                />
            </div>
        </div>
    </section>
</template>

<script>
import SectionButton from "@/components/SectionButton.vue";
import GameCard from "@/components/GameCard.vue";
import gradient from "../assets/gradient.png";
import imc from "../assets/imc.png";
import wuf from "../assets/wuf.png";
import Meteo from "../assets/Meteo.png";


export default {
    data() {
        return {
            backgroundGradient: `url(${gradient})`,
            backgroundImc: `url(${imc})`,
            backgroundWuf: `url(${wuf})`,
            backgroundMeteo: `url(${Meteo})`,
         
            
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
