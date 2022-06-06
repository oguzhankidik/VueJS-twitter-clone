<template>
  <div class="w-screen h-screen bg-black">
    <div class="flex flex-row">
      <div class="basis-1/3 h-screen border-solid">
        <Sidebar />
      </div>
      <div
        class="border-r border-l min-h-screen border-gray-400 border-opacity-30 border-solid"
      >
        <router-view></router-view>
      </div>
      <div class="basis-1/3 h-screen border-solid"><TopTweetList /></div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "@vue/reactivity";
import Sidebar from "./components/Sidebar.vue";
import WhatsHappening from "./components/WhatsHappening.vue";
import TopTweetList from "./components/TopTweetList.vue";

const baslik = ref("baslik");
</script>

<style scoped>
div:first-child {
  flex-basis: 31%;
}
div:nth-child(2) {
  flex-basis: 31.3%;
}
</style>
