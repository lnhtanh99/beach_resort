<template>
  <header class="styledHero" :style="style">
    <slot />
  </header>
</template>
<script>

export default {
  name: "StyledHero",
  props:{
      room: Object,
  },
  computed:{
      image(){
        const roomImg = JSON.parse(JSON.stringify(this.room));
        return roomImg.fields.images[0].fields.file.url;
      },
      style(){
          return `background: url(${this.image}) center/cover no-repeat;` 
      }
  },
};
</script>
<style scoped>
.styledHero {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>