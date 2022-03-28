<template>
  <div
    x-data="scrollProgress"
    class="inline-flex items-center justify-center overflow-hidden rounded-full bottom-5 left-5 -mt-10"
  >
    <!-- Building a Progress Ring: https://css-tricks.com/building-progress-ring-quickly/ -->
    <svg class="w-14 h-20 absolute -top-1/2 right-3/4">
      <circle
        class="text-gray-300 text-opacity-30"
        stroke-width="2"
        stroke="currentColor"
        fill="transparent"
        r="8"
        cx="40"
        cy="40"
      />
      <circle
        class="text-amber-600"
        stroke-width="2"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="circumference - (percent / 100) * circumference"
        stroke-linecap="round"
        stroke="currentColor"
        fill="transparent"
        r="8"
        cx="40"
        cy="40"
      />
    </svg>
    <span class="absolute text-xl text-blue-700" x-text="`${percent}%`"></span>
  </div>
</template>

<script setup>
const circumference = 8 * 2 * Math.PI;
const props = defineProps(["percent"]);
</script>
