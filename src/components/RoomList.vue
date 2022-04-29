<template>
  <div>
    <section class="roomslist">
      <div v-if="filterRooms.length === 0">
        <div class="empty-search">
          <h3>unfortunately no rooms matched your search parameters</h3>
        </div>
      </div>
      <div class="roomslist-center">
        <div v-for="room in filterRooms" :key="room.sys.id">
          <Room :room="room"></Room>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Room from "@/components/Room";
import { mapGetters } from "vuex";
export default {
  name: "RoomList",
  components: {
    Room,
  },
  computed: {
    ...mapGetters([ "filterRooms"]),
  },
};
</script>
<style scoped>
.roomslist {
  padding: 5rem 0;
}
.roomslist-center {
  width: 80vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 30px;
}

@media screen and (min-width: 776px) {
  .roomslist-center {
    width: 90vw;
  }
}
@media screen and (min-width: 992px) {
  .roomslist-center {
    width: 95vw;
    max-width: 1170px;
  }
}
</style>