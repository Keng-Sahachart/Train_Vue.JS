<template>
  <button @click="status = !status">Toggle Status</button><br />
  Status is : {{ status }}<br />
  <img src="@/assets/logo.png" alt="" v-show="status" /><br />
</template>

<script>
export default {
  data() {
    return {
      status: true
    };
  }
};
</script>

<style></style>
