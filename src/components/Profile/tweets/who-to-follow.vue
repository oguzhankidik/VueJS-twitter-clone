<template>
  <div class="main-container py-2 px-4">
    <div class="flex">
      <img :src="props.items.img" alt="" class="w-14 h-1/2 rounded-full" />
      <div class="right-container ml-3 flex-grow">
        <div class="container-with-button flex justify-between mb-1">
          <div>
            <div class="title leading-3">
              {{ props.items.title }}
            </div>
            <small class="color">{{ props.items.hashtag }}</small>
          </div>
          <button class="rounded-full bg-white px-5 text-black text-sm">
            Takip et
          </button>
        </div>

        <p class="leading-4 text-sm font-light">
          {{ props.items.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  items: Array,
});
</script>

<style scoped>
.color {
  color: #71767b;
}
.main-container:hover {
  background-color: rgba(255, 255, 255, 0.03);
  cursor: pointer;
}
</style>
