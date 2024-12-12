<script setup lang="ts">
useHead({
  title: 'Signup | Catify',
  meta: [
    {
      name: 'description',
      content: 'Signup to see beautiful cats!',
    },
  ],
})
</script>

<template>
  <main class="mt-24">
    <div class="flex flex-col items-center gap-10">
      <div class="text-center space-y-4">
        <h1 class="mt-10 text-4xl font-semibold">Catify</h1>
        <p>Please register to see beautiful cats!</p>
      </div>
      <SignupForm />
    </div>
  </main>
</template>
