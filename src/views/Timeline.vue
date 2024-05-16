<template>
    <div class="timeline">
      <Header />
      <h1>Timeline</h1>
      <ul>
        <li v-for="event in events" :key="event.id">{{ event.year }}: {{ event.content }}</li>
      </ul>
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '@/components/AppHeader.vue';
  import Footer from '@/components/AppFooter.vue';
  import events from '@/data/timeline.js';
  
  export default {
    name: 'TimelineComponent',
    components: {
      Header,
      Footer,
    },
    data() {
      return {
        events
      };
    },
  };
  </script>
  
  <style scoped>
  .timeline {
    padding: 20px;
  }
  </style>