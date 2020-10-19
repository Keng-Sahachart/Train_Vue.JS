<template>
  <div>CopyRight {{ currentYear }} by Sahachart</div>
</template>

<script>
export default {
  name: "Footer",
  // data Object
  data() {
    return {
      currentYear: new Date().getFullYear() + 1
    };
  }
};
</script>
