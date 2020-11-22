<template>
  <div class="home">
    <Header/>
    <Main/>
  </div>
</template>

<script>
import Main from '@/components/Main.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'Main_page',
  components: {
    Main,
    Header
  }
}
</script>
