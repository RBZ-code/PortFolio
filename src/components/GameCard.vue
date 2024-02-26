<template>
  <div class="wrap" @click="redirectToURL">
    <div :style="{ backgroundImage: backgroundA }" class="card side-a"></div>
    <div :style="{ backgroundImage: backgroundB }" class="card side-b"></div>
  </div>
</template>

<script>
export default {
  props: {
    backgroundA: String,
    backgroundB: String,
    redirectURL: String,
  },
  methods: {
    redirectToURL() {
      window.open(this.redirectURL, "_blank");
    }
  }
};
</script>

<style scoped>

.wrap {
  position: relative;
  margin: 0 auto;
  width: 250px;
  height: 350px;
  cursor: pointer;
  perspective: 800px;
}
.card {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: inset 0 0 45px rgba(255, 255, 255, 0.3), 0 12px 20px -10px rgba(0, 0, 0, 0.4);
  color: #fff;
  text-align: center;
  text-shadow: 0 1px rgba(0, 0, 0, 0.3);
  font: bold 3em sans-serif;
  line-height: 350px;
  position: absolute;
  backface-visibility: hidden;
  transition: transform 1s ease-in;
}
.side-a {
  transform: rotateY(0deg);
}
.side-b {
  transform: rotateY(-180deg);

}
.wrap:hover .side-a {
  transform: rotateY(180deg);
}
.wrap:hover .side-b {
  transform: rotateY(0deg);
  
}
</style>
