<template>
  <section>
    <h2>Vous avez une opportunité de stage ou d'alternance à me proposer, ou simplement envie de discuter ?</h2>
    <p>N'hésitez pas à me contacter via <a href="mailto:romainbezollespro@gmail.com">romainbezollespro@gmail.com</a>.</p>
    <button @click="navigate(prevSection)">↑</button>
  </section>
</template>

<script>
export default {

  props: ['prevSection'],
  methods: {
    navigate(section) {
      this.$emit('changeSection', section);
    }
  }
}
</script>
