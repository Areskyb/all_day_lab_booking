<template lang="html">
  <div id="app">
<guest-form/>
<guest-grid :guests="guests"></guest-grid>
  </div>
</template>

<script>
import GuestForm from './components/GuestForm';
import GuestServices from './services/GuestServices';
import GuestGrid from './components/GuestGrid';
import { eventBus } from './main';

export default {
  name: 'app',
  data(){
    return{
      guests: []
    }
  },
  components: {
    'guest-form': GuestForm,
    'guest-grid': GuestGrid
  },
  mounted(){
    this.fetchData();
    eventBus.$on('guest-added', (guest) => {
      this.guests.push(guest)
    })
  },
  methods: {
    fetchData(){
      GuestServices.getGuests()
      .then(guests => this.guests = guests);
    }
  }
}




</script>

<style lang="css" scoped>
</style>
