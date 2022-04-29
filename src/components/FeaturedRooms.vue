<template>
  <div>
    <section class="featured-rooms">
      <Title title="featured rooms"></Title>
      <div class="featured-rooms-center">
        <div v-for="room in featuredRooms" :key="room.sys.id">
          <div v-if="loading">
            <Loading></Loading>
          </div>
          <div v-else>
            <Room :room="room"></Room>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Title from "@/components/Title";
import Room from "@/components/Room";
import Loading from "@/components/Loading";
import { mapGetters } from "vuex";

export default {
  components: {
    Title,
    Room,
    Loading,
  },
  computed: {
    ...mapGetters(["featuredRooms"]),
  },
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    this.loading = false;
  },
};
</script>
<style scoped>
.featured-rooms {
  padding: 5rem 0;
}
.featured-rooms-center {
  width: 80vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 40px;
}
@media screen and (min-width: 776px) {
  .featured-rooms-center {
    width: 90vw;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  }
}
@media screen and (min-width: 992px) {
  .featured-rooms-center {
    width: 95vw;
    max-width: 1170px;
  }
}
</style>