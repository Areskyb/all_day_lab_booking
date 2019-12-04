<template lang="html">
  <div id="app">
<guest-form/>
  </div>
</template>

<script>
import GuestForm from './components/GuestForm';


export default {
  name: 'app',
  data(){
    return{
      guests: []
    }
  },
  components: {
    'guest-form': GuestForm
  },
  mounted(){

  },
  methods: {
    fetchData(){
      
    }
  }
}
</script>

<style lang="css" scoped>
</style>
