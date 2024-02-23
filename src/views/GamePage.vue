<template>
    <section class="section">
        <div class="container_btn">
            <SectionButton class="btn-top" direction="up" />
        </div>
        <h1>Game</h1>
        <div class="container">
            <GameCard
                :redirectURL="'https://rbz-code.github.io/Snake/'"
                backgroundA="url(http://media-hearth.cursecdn.com/attachments/9/192/feb-2015.png)"
                backgroundB="url(../assets/snake.png)"
            />
            <GameCard
                :redirectURL="'https://rbz-code.github.io/shi-fu-mi/'"
                backgroundA="url(http://media-hearth.cursecdn.com/attachments/9/192/feb-2015.png)"
                backgroundB="url(../assets/shi-fu-mi.png)"
            />
            <!-- Ajoutez autant d'instances de GameCard que nécessaire avec les images de fond appropriées -->
        </div>
    </section>
</template>

<script>
import SectionButton from "@/components/SectionButton.vue";
import GameCard from "@/components/GameCard.vue";

export default {
    data() {
        return {};
    },
    components: {
        SectionButton,
        GameCard,
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
    top: 20px;
}
.container {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.section {
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
    background: red;
}
</style>
