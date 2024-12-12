<script setup lang="ts">
useHead({
  title: 'Catify | Home',
  meta: [
    {
      name: 'description',
      content: 'Get random cat images!',
    },
  ],
})

const { data: imgUrl, execute, status, error } = useFetch('/api/cats')
const transitionName = getRandomTransition()

const handleClick = () => {
  getRandomTransition()
  execute()
}
</script>

<template>
  <main>
    <div class="flex justify-center flex-col items-center">
      <h1 class="mt-10 text-4xl font-semibold">Catify :&rpar;</h1>
      <Button
        variant="ghost"
        v-if="status === 'pending'"
        class="mt-10"
        disabled
      >
        Loading...
      </Button>
      <Button v-else class="mt-10" @click="handleClick">
        Get Random Cat
      </Button>
      <p v-if="error" class="mt-5 text-red-500">{{ error.message }}</p>
      <transition :name="transitionName" mode="out-in">
        <NuxtImg
          v-if="imgUrl"
          :key="imgUrl"
          width="500"
          height="300"
          :src="imgUrl ?? ''"
          alt="cat"
          class="mt-5 rounded-md shadow-sm"
        />
      </transition>
    </div>
  </main>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}

.zoom-enter-active,
.zoom-leave-active {
  transition: transform 0.5s;
}
.zoom-enter,
.zoom-leave-to {
  transform: scale(0.5);
}
</style>
