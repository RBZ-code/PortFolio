<template>
  <button  @click="navigate(nextSection)" class="section-button">
    <div class="icon-container">
      <i :class="['fa', 'fa-arrow-' + direction, 'icon-center']"></i>
      <div class="icon-overlay"></div>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    nextSection: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: "down" 
    }
  },
  methods: {
    navigate(section) {
      this.$emit("changeSection", section);
    },
  },
};
</script>

<style lang="scss" scoped>
.section-button {
  font-size: 20px;
  background-color: transparent;
  color: white;
  border: none;
  margin-top: 20px;
  cursor: pointer;
  opacity: 0.4;
  transition: opacity 0.3s ease;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  &:hover {
    opacity: 1;
  }

  .icon-container {
    position: relative;
    width: 100%;
    height: 100%;
    border: #3498db solid 2px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon-container:hover{
    border: #f1f1f1 solid 2px;
  }

  .fa {
    font-size: 24px;
    transition: color 0.3s ease;
    position: relative;
    color: #3498db;
  }


  

  .icon-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color:#3498db;
    transition: width 0.5s ease;
    border-radius: 50%;
    transform-origin: right center;
  }

  &:hover .fa {
    color: white;
    z-index: 2;
  }


  &:hover .icon-overlay {
    width: 100%;
    transform: scaleX(1);
  }
}

</style>
