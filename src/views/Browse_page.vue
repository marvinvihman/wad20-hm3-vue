<template>
  <div class="home">
    <Header/>
    <Browse/>
  </div>
</template>

<script>
// @ is an alias to /src
import Browse from '@/components/Browse.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'Browse_page',
  components: {
    Browse,
    Header
  }
}
</script>
