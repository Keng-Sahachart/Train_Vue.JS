<template>
  <button @click="addQty">Add</button>
  qty=> {{ qty }}
  <button @click="minusQty">Minus</button>
  <br />
  <img src="@/assets/logo.png" alt="" v-if="qty == 10" />
  <img
    src="https://www.google.co.th/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
    alt=""
    v-else
  />
</template>

<script>
export default {
  data() {
    return {
      qty: 0
    };
  },
  methods: {
    addQty() {
      this.qty++;
    },
    minusQty() {
      this.qty--;
    }
  }
};
</script>

<style></style>
