<template>
  <div>
    <Hero class="roomsHero">
      <Banner :title="title">
        <router-link to="/" class="btn-primary">return home</router-link>
      </Banner>
    </Hero>
    <RoomContainer></RoomContainer>
  </div>
</template>
<script>
import Hero from "@/components/Hero";
import Banner from "@/components/Banner";
import RoomContainer from "@/components/RoomContainer";

export default {
  components: {
    Hero,
    Banner,
    RoomContainer,
  },
  data() {
    return {
      title: "our rooms",
    };
  },
};
</script>
<style scoped>
</style>
