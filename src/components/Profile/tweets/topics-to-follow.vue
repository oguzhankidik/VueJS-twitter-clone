<template>
  <div class="container">
    <div
      class="flex cursor-pointer items-center rounded-full border border-gray-400 border-opacity-40 w-[15.5rem] h-11"
    >
      <div
        class="flex justify-between items-center basis-full hover:bg-amber-600 hover:bg-opacity-25 px-4 py-1.5 rounded-l-full"
      >
        <span class="tracking-wide text-whit capitalize text-sm">
          {{ props.title }}
        </span>
        <button class="text-2xl font-thin main-theme-text-color">+</button>
      </div>
      <div
        class="flex items-center gap-3 pr-3 hover:bg-amber-600 hover:bg-opacity-25 rounded-r-full py-1"
      >
        <div class="vertical-divider h-6 bg-gray-400 bg-opacity-40 w-px" />
        <button class="text-3xl font-thin text-gray-500 rotate-45">+</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
});
</script>
