<template>
  <div class="w-screen h-screen bg-black">
    <div class="flex flex-row">
      <div class="basis-1/3 h-screen border-solid">
        <Sidebar />
      </div>
      <div
        class="basis-1/3 border-r border-l h-screen border-gray-400 border-opacity-30 border-solid"
      >
        <WhatsHappening />
      </div>
      <div class="basis-1/3 h-screen border-solid"></div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "@vue/reactivity";
import Sidebar from "./components/Sidebar.vue";
import WhatsHappening from "./components/WhatsHappening.vue";

const baslik = ref("baslik");
</script>
