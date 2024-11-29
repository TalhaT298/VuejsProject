<template>
  <nav class="bg-blue-500 p-4 text-white flex justify-between">
    <div class="text-xl font-bold">My Website</div>
    <ul class="flex space-x-4">
      <li><router-link to="/" class="hover:underline">Home</router-link></li>
      <li><router-link to="/about" class="hover:underline">About</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
