<template>
  <div>
    <select name="" id="">
      <option :value="item" :key="index" v-for="(item, index) in products">
        {{ index }} - {{ item }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: ["product1", "product2", "product3", "product4", "product5"]
    };
  }
};
</script>

<style></style>
