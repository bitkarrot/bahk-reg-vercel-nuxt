<template>
  <div>
    <Nav />
    <Offline />
  </div>
</template>

<script>
import Nav from '~/components/Nav.vue'
import Offline from '~/components/Offline.vue'

export default {
  components: {
    Nav,
    Offline
  }
}
</script>
