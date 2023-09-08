<template>
  <div>
    <span>{{name}}</span> <button @click="deleteStudent">Delete</button>
  </div>
</template>

<script>
export default {
  props: ['id', 'name'],
  emits: ['delete-student'],
  methods: {
    deleteStudent() {
      this.$emit('delete-student', this.id);
    }
  }
}
</script>