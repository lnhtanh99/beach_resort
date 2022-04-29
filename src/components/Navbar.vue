<template>
  <div>
    <nav class="navbar">
      <div class="nav-center">
        <div class="nav-header">
          <router-link to="/">
            <img src="../assets/logo.svg" alt="Beach Resort" />
          </router-link>
          <button type="button" class="nav-btn" @click="handleToggle">
            <font-awesome-icon
              :icon="['fas', 'align-right']"
              class="nav-icon"
            />
          </button>
        </div>
        <ul :class="isOpen ? 'nav-links show-nav' : 'nav-links'">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/rooms">Rooms</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    handleToggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.75rem 2rem;
  background: var(--offWhite);
  z-index: 1;
}
.nav-header {
  display: flex;
  justify-content: space-between;
}
.nav-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
}
.nav-icon {
  font-size: 1.5rem;
  color: var(--primaryColor);
}
.nav-links {
  height: 0;
  overflow: hidden;
  transition: var(--mainTransition);
  list-style-type: none;
}
.nav-links a {
  display: block;
  text-decoration: none;
  padding: 1rem 0;
  color: var(--mainBlack);
  transition: var(--mainTransition);
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: var(--mainSpacing);
}
.nav-links a:hover {
  color: var(--primaryColor);
}

.show-nav {
  height: 100px;
}
@media screen and (min-width: 768px) {
  .nav-btn {
    display: none;
  }
  .nav-center {
    max-width: 1170px;
    margin: 0 auto;
    display: flex;
  }
  .nav-links {
    height: auto;
    display: flex;
    margin-left: 4rem;
  }
  .nav-links a {
    margin: 0 1rem;
    padding: 0.5rem 0;
  }
}
</style>