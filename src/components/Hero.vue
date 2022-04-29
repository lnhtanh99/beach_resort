<template>
  <div>
    <header>
      <slot /> 
    </header>
  </div>
</template>
<script>
export default {
  name: "Hero",
};
</script>
<style scoped>
.defaultHero,
.roomsHero {
  min-height: calc(100vh - 66px);
  background: url("../assets/defaultBcg.jpeg") center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}
.roomsHero {
  background-image: url("../assets/room-2.jpeg");
  min-height: 60vh;
}
</style>