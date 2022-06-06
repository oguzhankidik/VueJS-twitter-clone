<template>
  <div
    class="tab-pane fade show active pb-4 border-b border-b-gray-400 border-opacity-30"
    id="tabs-home"
    role="tabpanel"
    aria-labelledby="tabs-home-tab"
  >
    <p class="font-bold text-xl mb-6 tracking-wide px-4">Kimi takip etmeli</p>
    <div class="flex flex-col">
      <div v-for="i in whoToFollow" :key="i">
        <who-to-follow :items="i" />
      </div>
    </div>

    <div class="show-more main-theme-text-color mt-7 font-thin px-4">
      <a href="javascript:void(0)">Daha fazla göster</a>
    </div>
    <div class="divider h-px w-full bg-gray-400 bg-opacity-30 my-4"></div>
    <div class="topics-to-follow px-4">
      <div class="infos leading-3 mb-5">
        <p class="text-xl font-bold">Takip edilebilecek Konular</p>
        <small class="color">
          Takip ettiğin Konular hakkındaki Tweetler Ana Sayfa zaman akışında
          görünür
        </small>
      </div>

      <div class="flex flex-wrap justify-between gap-1">
        <div v-for="i in chips" :key="i">
          <topics-to-follow :title="i" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import WhoToFollow from "./who-to-follow.vue";
import TopicsToFollow from "./topics-to-follow.vue";
import { ref } from "vue";
import axios from "axios";
const whoToFollow = ref([
  {
    title: "hic etik degil",
    hashtag: "@hicetikdegil",
    description:
      "bu hesaptaki içerikler atalarınıza, kitabınıza ve her türlü değer yargınıza hakaret içerebilir.",
    img: "/src/assets/pp1.jpg",
  },
  {
    title: "h",
    hashtag: "@Pikohh",
    description: "通吃",
    img: "/src/assets/pp2.jpg",
  },
  {
    title: "rezalet iyi şeyler",
    hashtag: "@rezaletiyisey",
    description:
      "ok boomer öneri veya reklam varsa alırız dm 🤠 rezaletiyiseyler@yandex.com ig: rezaletiyiseyler",
    img: "/src/assets/pp3.jpg",
  },
]);

const chips = [
  "Viral Tweetler",
  "Hava durumu",
  "Otomobil markaları",
  "Kediler",
  "Teknoloji haberleri",
  "Futbol",
  "Sanat ve kültür",
  "Uzay ve astronomi",
  "Popüler resimler",
  "The Office",
];

axios({
  url: "posts",
  baseURL: "http://localhost:3004",
})
  .then((response) => {
    console.log(response.data, "asdsa");
  })
  .catch((error) => {
    console.log(error);
  });
</script>
