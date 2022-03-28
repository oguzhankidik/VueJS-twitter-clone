<template>
  <div class="container px-3 text-white">
    <div class="sticky bg-transparent bg-opacity-30 text-white py-4">
      <div class="flex justify-between">
        <a href="#">Anasayfa</a>
        <i class="fa-regular fa-star"></i>
      </div>
    </div>
    <div class="what-is-happening flex flex-row">
      <img
        class="inline object-cover w-12 h-12 mr-2 rounded-full"
        src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        alt="Profile image"
      />
      <div class="new-post flex flex-col grow">
        <textarea
          v-model="newPostInput"
          class="bg-transparent outline-none text-white flex-wrap clone-textarea overflow-hidden font-thin"
          type="textarea"
          maxlength="100"
          placeholder="Neler oluyor ?"
        />

        <div
          class="w-full main-theme-text-color text-sm border-b border-b-gray-600 border-opacity-60 pb-5 hidden mt-5"
        >
          <i class="fa-solid fa-earth-europe mr-2" />
          <span>Herkes yanıtlayabilir</span>
        </div>

        <div class="flex options text-white justify-between text-lg mt-2">
          <div class="actions flex gap-4 main-theme-text-color">
            <button>
              <i class="fa-regular fa-image"></i>
            </button>
            <button>
              <i class="fa-regular fa-image"></i>
            </button>
            <button>
              <i class="fa-solid fa-bars-staggered"></i>
            </button>
            <button>
              <i class="fa-regular fa-face-smile"></i>
            </button>
            <button>
              <i class="fa-regular fa-calendar-plus"></i>
            </button>
            <button disabled>
              <i class="fa-solid fa-location-dot opacity-30"></i>
            </button>
          </div>
          <div class="action-buttons flex items-center gap-4">
            <div
              class="hidden-actions flex gap-4 items-center relative"
              :class="{
                block: newPostInput.length,
                hidden: !newPostInput.length,
              }"
            >
              <ProgressingCircle :percent="percent" />
              <div class="w-px h-10 bg-gray-600"></div>
              <i class="fa-solid fa-circle-plus"></i>
            </div>

            <button
              class="rounded-full main-theme-background-color py-2.5 px-4 text-sm tweet disabled:opacity-60"
              :disabled="!newPostInput.length"
            >
              Tweetle
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import ProgressingCircle from "./ProgressingCircle.vue";
import { ref, watch } from "vue";
const newPostInput = ref("");
const percent = ref(0);
watch(newPostInput, (val) => (percent.value = val.length));
</script>

<style lang="scss">
.clone-textarea {
  resize: none;
  min-height: 48px;
  padding-top: 16px;
  &::placeholder {
    line-height: 24px;
    font-size: 20px;
    opacity: 0.5;
    font-weight: 300;
  }

  &:focus + div {
    display: block;
  }
}
</style>
