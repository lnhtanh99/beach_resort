<template>
  <div class="home">
    <Hero class="defaultHero">
      <Banner :title="title" :subtitle="subtitle">
        <router-link to="/rooms" class="btn-primary">our rooms</router-link>
      </Banner>
    </Hero>
    <Services></Services>
    <FeaturedRooms></FeaturedRooms>
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import Banner from "@/components/Banner";
import Services from "@/components/Services";
import FeaturedRooms from "@/components/FeaturedRooms";


export default {
  name: "Home",
  components: {
     Hero,
     Banner,
     Services,
     FeaturedRooms,
  },
  data() {
    return {
      title: "Luxurious Rooms",
      subtitle: "Deluxe Rooms Starting At $299",
    };
  },
};
</script>
