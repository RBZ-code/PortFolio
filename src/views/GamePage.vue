<template>
  <section class="section">
    <div class="container_btn">
      <SectionButton
        class="btn-top"
        direction="left"
        @click="goBack"
      />
    </div>
    <h1>Game</h1>
    <div class="container">
      <GameCard
        :redirectURL="'https://rbz-code.github.io/Snake/'"
        backgroundA="url(http://media-hearth.cursecdn.com/attachments/9/192/feb-2015.png)"
        :backgroundB= 'backgroundSnake'
      />
      <GameCard
      :redirectURL="'https://rbz-code.github.io/Snake/'"
        backgroundA="url(http://media-hearth.cursecdn.com/attachments/9/192/feb-2015.png)"
        :backgroundB= 'backgroundShifumi'
      />
    

      </div>
  

  </section>
</template>

<script>
import SectionButton from "@/components/SectionButton.vue";
import GameCard from "@/components/GameCard.vue";
import snakeImage from "../assets/snake.png";
import ShifumiImage from "../assets/shi-fu-mi.png";




export default {
  data() {
    return {
        backgroundSnake: `url(${snakeImage})`,
        backgroundShifumi: `url(${ShifumiImage})`,

    };
  },
  components: {
    SectionButton,
    GameCard,
   
  },
  methods: {
  goBack() {
    this.$router.go(-1);
  }
}
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
