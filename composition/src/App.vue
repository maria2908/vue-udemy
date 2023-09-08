<template>
  <section class="container">
    <h2>{{ user.name  }}</h2>
    <h3>{{ user.age }}</h3>
  </section>
</template>

<script>
import { reactive } from 'vue';
export default {
  setup() {
    // const uName = ref('Maria');
    // const uAge = ref(31);

    const user = reactive({
      name: 'Maria',
      age: 31
    });

    console.log(user)

    setTimeout(function() {
      // user.value.name = 'Mari';
      // user.value.age = 20;

      user.name = 'Mari';
      user.age = 20;
    }, 2000);

    return { user: user};
  }

};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>