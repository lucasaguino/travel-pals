<template>
  <button @click="handleClick">
    Add New Adventure
  </button>
</template>

<script>
export default {
  name: 'NewAdventureButton',
  methods: {
    handleClick() {
      alert('Button clicked!');
    }
  }
}
</script>

<style scoped>
button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
}
</style>
