<template>
  <div class="about">
    <Header />
    <h1>About Me</h1>
    <p>This is the about me section of the blog.</p>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/AppHeader.vue';
import Footer from '@/components/AppFooter.vue';

export default {
  name: 'AboutComponent',
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
.about {
  padding: 20px;
}
</style>
