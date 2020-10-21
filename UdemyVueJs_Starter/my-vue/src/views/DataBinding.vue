<template>
  <div>
      <input type="text" :value="name" class="group-control">
      <br>
      <img :src="image" alt="" :title="image">
  </div>
</template>

<script>
export default {
    data(){
        return{
            name:"This Is From Data Binding by attribute :value",
            image: require("@/assets/logo.png")
        }
    }
}
</script>

<style>

</style>