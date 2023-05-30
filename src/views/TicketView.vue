<template>
<MyNavigation/>



<MyFooter/>
</template>

<script>
import MyNavigation from '../views/Navigation.vue'
import MyFooter from '../views/Footer.vue'

export default {
    name: 'ticket',

  components: {
    MyNavigation,
     MyFooter
  },
}

</script>