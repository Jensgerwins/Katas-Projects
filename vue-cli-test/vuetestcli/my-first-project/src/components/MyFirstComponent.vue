<template>
  <h1 :class="cssTypeClass">{{ headline }}</h1>
</template>
<script>
export default {
  name: "MyComponent",
  props: {
    headline: String,
    type: {
      type: String,
      default: "green",
    },
  },
  computed: {
    cssTypeClass() {
      return `text-${this.type}`;
    },
  },
};
</script>

<style scoped>
.text-green {
  color: green;
}
.text-red {
  color: red;
}
.text-blue {
  color: blue;
}
.text-purple {
  color: purple;
}
.text-hotpink {
  color: hotpink;
}
</style>
