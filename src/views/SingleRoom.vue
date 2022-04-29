<template>
  <div>
    <StyledHero :room="room">
      <Banner :title="`${room.fields.name} Room`">
        <router-link to="/rooms" class="btn-primary">back to rooms</router-link>
      </Banner>
    </StyledHero>
    <section class="single-room">
      <div class="single-room-images">
        <div v-for="(img, index) in images" :key="index" class="img-wrapper">
            <img v-show="index" :src="img" alt="" />
        </div>
      </div>
      <div class="single-room-info">
        <article class="desc">
          <h3>details</h3>
          <p>{{ room.fields.description }}</p>
        </article>
        <article class="info">
          <h3>info</h3>
          <h6>price: ${{ room.fields.price }}</h6>
          <h6>size: ${{ room.fields.size }} SQFT</h6>
          <h6>
            max capacity:
            {{
              room.fields.capacity > 1
                ? room.fields.capacity + " people"
                : room.fields.capacity + " person"
            }}
          </h6>
          <h6>
            {{ room.fields.pets ? "pets allowed" : "no pets allowed" }}
          </h6>
          <h6>
            {{ room.fields.breakfast ? "free breakfast included" : "" }}
          </h6>
        </article>
      </div>
    </section>
    <section class="room-extras">
      <h6>Extras</h6>
      <ul class="extras">
        <li v-for="(extra, index) in room.fields.extras" :key="index">
          - {{ extra }}
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
import StyledHero from "@/components/StyledHero";
import Banner from "@/components/Banner";
import { mapGetters } from "vuex";

export default {
  name: "SingleRoom",
  components: {
    StyledHero,
    Banner,
  },
  computed: {
    ...mapGetters(["allRooms"]),
    images() {
      return this.room.fields.images.map((img, index) => {
        if(index){
          return this.room.fields.images[index].fields.file.url;
        }
      })
    },
  },
  methods: {
    getSingleRoom(slug) {
      return this.allRooms.find((room) => room.fields.slug === slug);
    },
  },
  data() {
    return {
      slug: this.$route.params.slug,
      room: {},
    };
  },
  created() {
    const result = this.getSingleRoom(this.slug);
    const room = JSON.parse(JSON.stringify(result));
    this.room = room;
  },
};
</script>
<style scoped>
.single-room {
  padding: 5rem 0 0 0;
}
.single-room-images {
  width: 80vw;
  margin: 0 auto;
  display: flex;
}
.img-wrapper:not(:first-child){
  margin: 10px 0;
  margin-right: 30px;
}
.single-room-images img {
  max-width: 357px;
  max-height: 200px;
  display: block;
}
.single-room-info {
  width: 80vw;
  display: grid;
  grid-template-columns: 1fr;
  margin: 2rem auto;
}
.desc,
.info {
  margin: 1rem 0;
}
.desc h3 {
  text-transform: capitalize;
  letter-spacing: var(--mainSpacing);
}
.desc p {
  line-height: 1.5;
}
.info h3,
.info h6 {
  text-transform: capitalize;
  letter-spacing: var(--mainSpacing);
}

.info h6 {
  font-weight: 300;
}
.room-extras {
  width: 80vw;
  margin: 0 auto 3rem auto;
}
.room-extras h6 {
  text-transform: capitalize;
  letter-spacing: var(--mainSpacing);
}
.extras {
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
}
@media screen and (min-width: 992px) {
  .single-room-images,
  .single-room-info,
  .room-extras {
    width: 95vw;
    max-width: 1170px;
  }
  .single-room-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
  }
  .info {
    padding-left: 3rem;
  }
}
</style>