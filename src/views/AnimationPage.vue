<template>
    <section class="section">
        <div class="container_btn">
            <SectionButton class="btn-top" direction="left" @click="goBack" />
        </div>
        <div class="title-container">
            <h1 class="title">Animation</h1>
        </div>
        <div class="container">
            <div class="game-card">
                <h2>Carousel Vanilla JS</h2>
                <p>
                    Un carrousel d'images simple créé avec Vanilla JavaScript.
                </p>
                <GameCard
                    :redirectURL="'https://rbz-code.github.io/Carousel/'"
                    backgroundA="url(https://images.unsplash.com/photo-1637416067365-2b5e7e8fe8fa?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
                    :backgroundB="backgroundCarousel"
                />
            </div>
            <div class="game-card">
                <h2>Dice 3D Animation</h2>
                <p>
                    Une animation de dés en 3D avec des effets visuels
                    impressionnants.
                </p>
                <GameCard
                    :redirectURL="'https://rbz-code.github.io/Des-3D-Animation/'"
                    backgroundA="url(https://images.unsplash.com/photo-1637416067365-2b5e7e8fe8fa?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
                    :backgroundB="backgroundDes"
                />
            </div>
        </div>
    </section>
</template>

<script>
import SectionButton from "@/components/SectionButton.vue";
import GameCard from "@/components/GameCard.vue";
import Des from "../assets/des.png";
import Carousel from "../assets/carousel.png";

export default {
    data() {
        return {
            backgroundDes: `url(${Des})`,
            backgroundCarousel: `url(${Carousel})`,
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
    flex-wrap: wrap;
    gap: 10%;
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
    color: #ffd700;
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
}
@media(min-width: 1800px) {
.section{
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
}
.container{
    width: 100%;
}
}
</style>
