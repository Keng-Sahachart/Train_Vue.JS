<template>
  <div>
    <button @click="addQuantity">Add</button>
    Quantity:{{ Quantity }}
    <button @click="minusQuantity">Minus</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Quantity: 0
    };
  },
  methods: {
    addQuantity() {
      this.Quantity++;
    },
    minusQuantity() {
      this.Quantity--;
    }
  }
};
</script>

<style></style>
