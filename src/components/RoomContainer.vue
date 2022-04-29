<template>
  <div>
    <div v-if="loading">
      <Loading></Loading>
    </div>
    <div v-else>
      <RoomFilter></RoomFilter>
      <RoomList></RoomList>
    </div>
  </div>
</template>
<script>
import Loading from "@/components/Loading";
import RoomFilter from "@/components/RoomFilter";
import RoomList from "@/components/RoomList";


export default {
  name: "RoomContainer",
  components: {
    Loading,
    RoomFilter,
    RoomList,
  },
  data() {
    return {
      loading: true,
      filter: {
        type: 'all'
      }
    };
  },
  mounted() {
    this.loading = false;
  },
};
</script>
<style scoped>
</style>