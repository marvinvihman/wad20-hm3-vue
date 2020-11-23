<template>
  <div class="home" style="position: absolute;margin: auto;top: 0;right: 0;bottom: 0;left: 0">
    <Login/>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'

export default {
  name: 'Login_page',
  components: {
    Login
  }
}
</script>
