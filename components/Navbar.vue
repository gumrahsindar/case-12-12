<script setup lang="ts">
import { useAuthStore } from '~/store/authStore'

const authStore = useAuthStore()
</script>

<template>
  <nav class="flex items-center justify-between">
    <Logo />

    <small v-if="authStore.user.isLoggedIn" class="ml-auto mr-4"
      >User: {{ authStore.user.username }}</small
    >
    <Button
      v-if="authStore.user.isLoggedIn"
      class="mr-3"
      size="sm"
      variant="destructive"
      @click="authStore.logout"
      >Logout</Button
    >
    <ThemeSwitch />
  </nav>
</template>

<style scoped></style>
