<template>
  <MyComponent :headline="headline" type="blue" />
  <MyComponent :headline="headline" type="red" />
  <MyComponent :headline="headline" />
  <MyComponent :headline="headline" type="purple" />
  <MyComponent :headline="headline" type="hotpink" />
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import MyComponent from "@/components/MyFirstComponent.vue";
export default {
  name: "App",
  data() {
    return {
      headline: "My Headline Hi World",
    };
  },
  components: {
    HelloWorld,
    MyComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
