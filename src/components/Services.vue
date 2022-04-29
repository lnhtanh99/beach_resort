<template>
  <div>
    <section class="services">
      <Title title="services"></Title>
        <div class="services-center">
          <article class="service" v-for="service in allServices" :key="service.title">
            <span><font-awesome-icon :icon="service.icon"></font-awesome-icon></span>
            <h6>{{ service.title }}</h6>
            <p>{{ service.info }}</p>
          </article>
        </div>
    </section>
  </div>
</template>
<script>
import Title from "@/components/Title";
import { mapGetters } from "vuex";

export default {
  name: "Services",
  components: {
    Title,
  },
  computed: {
    ...mapGetters(['allServices'])
  }
};
</script>
<style scoped>
.services {
  padding: 5rem 0;
}
.services {
  background: var(--darkGrey);
  text-align: center;
}
.services-center {
  width: 90vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 50px;
}
.service span {
  display: inline-block;
  color: var(--primaryColor);
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}
.services h6 {
  letter-spacing: var(--mainSpacing);
  text-transform: capitalize;
}
.services p {
  width: 80%;
  margin: 0 auto;
}
@media screen and (min-width: 992px) {
  .services-center {
    width: 95vw;
    max-width: 1170px;
  }
}

@media screen and (min-width: 1200px) {
  .services p {
    width: 100%;
  }
}
</style>