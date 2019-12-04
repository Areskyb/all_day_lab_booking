<template lang="html">
  <div id="guestGrid">
    <div v-for="guest in guests">
      <h2>{{ guest.name }}</h2>
      <p>{{ guest.email }} </p>
      <p> Status: {{ guest.checkedStatus }}</p>
      <button  v-on:click="deleteGuests(guest._id)" type="button" name="button">Delete Guest Booking</button>
    </div>
  </div>
</template>

<script>
import GuestServices from '../services/GuestServices';
import { eventBus } from '../main.js'

export default {
  name: 'guest-grid',
  props: ["guests"],
  data(){
    return{

    }
  },
  methods: {
    deleteGuests(id){
      GuestServices.deleteGuests(id)
      .then(() => eventBus.$emit('guest-deleted', id))
    }
  }
}

</script>

<style lang="css" scoped>
</style>
