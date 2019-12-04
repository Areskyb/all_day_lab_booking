<template lang="html">
  <div id="guestGrid">
    <div v-for="guest in guests">
      <h2>{{ guest.name }}</h2>
      <p>{{ guest.email }} </p>
      <p> Status: {{ guest.checkedStatus }}</p>
      <button type="button" name="button">Delete Guest Booking</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'guest-grid',
  props: ["guests"]
}
</script>

<style lang="css" scoped>
</style>
