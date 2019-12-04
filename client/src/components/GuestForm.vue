<template lang="html">
  <form v-on:submit="addGuest" method="post" id="guestForm">
    <h2>Add a Guest</h2>
    <label for="name">Name:</label>
    <input type="text" id="name" v-model="name">
    <label for="email">Email Address:</label>
    <input type="text" id="email" v-model="email">
    <label for="guest">Check Status:</label>
    <select class="" v-model="checkedStatus"name="">
      <option value="true">Checked In</option>
      <option value="false">Not Checked In</option>
    </select>
  </form>
</template>

<script>
export default {
  name: 'guest-form',
  data(){
    return {
      name: "",
      email: "",
      checkedStatus: ""
    }
  }
}
</script>

<style lang="css" scoped>
</style>
