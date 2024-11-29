<template>
  <div>
    <ANavbar />
    <router-view />
    <AFooter />
  </div>
</template>

<script>
import ANavbar from './components/ANavbar.vue';
import AFooter from './components/AFooter.vue';

export default {
  components: {
    ANavbar,
    AFooter,
  },
};
</script>

<style></style>
