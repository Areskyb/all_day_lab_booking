<template lang="html">
  <form v-on:submit="addGuest" method="post" id="guestForm">
    <h2>Add a Guest</h2>
    <label for="name">Name:</label>
    <input type="text" id="name" v-model="name" required>
    <label for="email">Email Address:</label>
    <input type="text" id="email" v-model="email" required>
    <label for="guest">Check Status:</label>
    <select class="" v-model="checkedStatus"required>
      <option value="checked in">Checked In</option>
      <option value="not checked in">Not Checked In</option>
    </select>
    <input type="submit" name="" value="Submit Booking">
  </form>
</template>

<script>
import GuestServices from '../services/GuestServices'
import { eventBus } from '../main';


export default {
  name: 'guest-form',
  data(){
    return {
      name: "",
      email: "",
      checkedStatus: ""
    }
  },
  methods: {
    addGuest(event)
    {event.preventDefault()
      const guest = {
        name: this.name,
        email: this.email,
        checkedStatus: this.checkedStatus
      }
    GuestServices.addGuests(guest)
    .then(res => eventBus.$emit('guest-added', res))}
  }
}
</script>

<style lang="css" scoped>
</style>
