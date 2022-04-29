<template>
  <div>
    <section class="filter-container">
      <Title title="search rooms"></Title>
      <form class="filter-form">
        <div class="form-group">
          <label for="type">room type</label>
          <select
            name="type"
            id="type"
            class="form-control"
            @change="filterRooms"
            v-model="filter.type"
          >
            <option v-for="type in getUniqueType" :key="type">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label for="capacity">guests</label>
          <select
            name="capacity"
            id="capacity"
            class="form-control"
            v-model="filter.capacity"
            @change="filterRooms"
          >
            <option v-for="capacity in getUniqueCapacity" :key="capacity">
              {{ capacity }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label for="price">room price ${{ filter.price }}</label>
          <input
            type="range"
            :min="filter.minPrice"
            :max="filter.maxPrice"
            v-model="filter.price"
            name="price"
            id="price"
            class="form-control"
            @change="filterRooms"
          />
        </div>
        <div class="form-group">
          <label for="size">room size</label>
          <div class="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              class="size-input"
              v-model="filter.minSize"
              @change="filterRooms"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              class="size-input"
              v-model="filter.maxSize"
              @change="filterRooms"
            />
          </div>
        </div>
        <div class="form-group">
          <div class="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              v-model="filter.breakfast"
              @change="filterRooms"
            />
            <label for="breakfast">breakfast</label>
          </div>
          <div class="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              v-model="filter.pets"
              @change="filterRooms"
            />
            <label for="pets">pets</label>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>
<script>
import Title from "@/components/Title";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "RoomFilter",
  components: {
    Title,
  },
  computed: {
    ...mapGetters(["filter", "getUniqueType", "getUniqueCapacity"]),
  },
  methods: {
    ...mapActions(["filterRooms"]),
  },
  created() {
    this.filterRooms(this.filter.type);
  },
};
</script>
<style scoped>
.filter-container {
  padding: 5rem 0;
}
.filter-form {
  width: 60vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(202px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 40px;
}
.form-group {
  text-transform: capitalize;
}
.form-group label {
  display: block;
  letter-spacing: var(--mainSpacing);
  margin-bottom: 0.5rem;
}
.form-control {
  width: 100%;
  background: transparent;
  font-size: 1rem;
}
.size-inputs {
  display: flex;
}
.size-input {
  width: 40%;
  padding: 0.2rem;
  border: 1px solid var(--mainBlack);
  border-radius: 0.3rem;
  margin-right: 0.3rem;
}
.single-extra label {
  display: inline-block;
  font-size: 0.8rem;
  margin-left: 0.5rem;
}
@media screen and (min-width: 776px) {
  .filter-form {
    width: 70vw;
  }
}
@media screen and (min-width: 992px) {
  .filter-form {
    width: 95vw;
    max-width: 1170px;
  }
}
</style>