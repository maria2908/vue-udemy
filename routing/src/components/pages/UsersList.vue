<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="savedChanges">Save Changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      changesSaved: false
    };
  },
  methods: {
    confirmInput() {
      // do something
      this.$router.push('/teams');
    },
    savedChanges() {
      this.changesSaved = true;
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('123');
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('UsersList cmp beforeRouteLeave');
    console.log(to, from);
    if(this.changesSaved) {
      next();
    } else {
      const userWantToLeave = confirm('Are you sure You got unsaved changes');
      next(userWantToLeave);
    }
  },
  unmounted() {
    console.log('unmounted');
  }


};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>