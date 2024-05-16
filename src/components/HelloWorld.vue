<template>
  <div class="home">
    <Header />
    <h1>Welcome to My Blog</h1>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/AppHeader.vue';
import Footer from '@/components/AppFooter.vue';

export default {
  name: 'HelloWorldCompnent',
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
.home {
  text-align: center;
}
</style>
