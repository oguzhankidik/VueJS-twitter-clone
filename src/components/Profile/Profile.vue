<template>
  <div class="container text-white">
    <back-button-bar />
    <div class="banner">
      <img src="../../assets/600x200.jpg" />
    </div>
    <div class="top-side flex justify-between items-center">
      <div
        class="profile-picture -mt-20 border-4 border-black w-36 rounded-full ml-3.5"
      >
        <img src="../../assets/profile-picture.jpg" class="rounded-full" />
      </div>
      <div class="edit-button mr-2.5 -mt-2">
        <button
          class="rounded-full bg-transparent py-1.5 px-4 text-sm text-white border-white border transition-all border-slate-500"
        >
          Profili düzenle
        </button>
      </div>
    </div>

    <div class="info flex flex-col px-4 mt-5 gap-1">
      <span>Oğuzhan Kıdık</span>
      <small class="color font-light">@oguzhankdk</small>
      <div class="color font-light">
        <i class="fa-solid fa-calendar-days mr-2 text-sm"></i>
        <span class="text-sm">Kasım 2016 tarihinde katıldı</span>
      </div>
      <div class="followers flex gap-4">
        <div class="flex gap-1 items-center">
          <span class="font-light text-sm">43</span
          ><span class="color font-light text-sm">Takip edilen</span>
        </div>
        <div class="flex gap-1 items-center">
          <span class="font-light text-sm">9</span
          ><span class="color font-light text-sm">Takipçi</span>
        </div>
      </div>
    </div>

    <ul
      class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b border-gray-400 border-opacity-30 pl-0 mb-4 w-full justify-between"
      id="tabs-tab"
      role="tablist"
    >
      <li class="nav-item flex-col items-center" role="presentation">
        <a
          href="#tabs-home"
          class="nav-link block font-medium text-sm leading-tight px-6 py-3 my-2 active"
          id="tabs-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#tabs-home"
          role="tab"
          aria-controls="tabs-home"
          aria-selected="true"
          >Tweetler</a
        >
        <div
          class="divider bg-amber-600 w-0 transition-all h-1 -mt-3 rounded-lg"
        ></div>
      </li>
      <li class="nav-item flex-col items-center" role="presentation">
        <a
          href="#tabs-profile"
          class="nav-link block font-medium text-sm leading-tight px-6 py-3 my-2"
          id="tabs-profile-tab"
          data-bs-toggle="pill"
          data-bs-target="#tabs-profile"
          role="tab"
          aria-controls="tabs-profile"
          aria-selected="false"
          >Tweetler ve yanıtlar</a
        >
        <div
          class="divider bg-amber-600 w-0 transition-all h-1 -mt-3 rounded-lg"
        ></div>
      </li>
      <li class="nav-item flex-col items-center" role="presentation">
        <a
          href="#tabs-messages"
          class="nav-link block font-medium text-sm leading-tight px-6 py-3 my-2"
          id="tabs-messages-tab"
          data-bs-toggle="pill"
          data-bs-target="#tabs-messages"
          role="tab"
          aria-controls="tabs-messages"
          aria-selected="false"
          >Medya</a
        >
        <div
          class="divider bg-amber-600 w-0 transition-all h-1 -mt-3 rounded-lg"
        ></div>
      </li>
      <li class="nav-item flex-col items-center" role="likes">
        <a
          href="#tabs-profile"
          class="nav-link block font-medium text-sm leading-tight px-6 py-3 my-2"
          id="tabs-profile-tab"
          data-bs-toggle="pill"
          data-bs-target="#tabs-profile"
          role="tab"
          aria-controls="tabs-profile"
          aria-selected="false"
          >Beğeni</a
        >
        <div
          class="divider bg-amber-600 w-0 transition-all h-1 -mt-3 rounded-lg"
        ></div>
      </li>
    </ul>
    <div class="tab-content" id="tabs-tabContent">
      <ProfileTweets />
      <div
        class="tab-pane fade"
        id="tabs-profile"
        role="tabpanel"
        aria-labelledby="tabs-profile-tab"
      >
        Tab 2 content
      </div>
      <div
        class="tab-pane fade"
        id="tabs-messages"
        role="tabpanel"
        aria-labelledby="tabs-profile-tab"
      >
        Tab 3 content
      </div>
      <div
        class="tab-pane fade"
        id="tabs-contact"
        role="tabpanel"
        aria-labelledby="tabs-contact-tab"
      >
        Tab 4 content
      </div>
    </div>
  </div>
</template>

<script setup>
import BackButtonBar from "../BackButtonBar.vue";
import ProfileTweets from "./tweets/ProfileTweets.vue";
import TopicsToFollow from "./tweets/topics-to-follow.vue";
</script>

<style scoped>
.bg-transparent:hover {
  background-color: rgba(239, 243, 244, 0.1);
}
.nav-link:hover {
  background-color: rgba(231, 233, 234, 0.1);
}
.color {
  color: #71767b;
}

.nav-link.active {
  border: none;
  @apply text-gray-600 border-none text-white;
}

.nav-link.active + .divider {
  @apply w-1/2;
}
.nav-item {
  @apply flex-grow pb-0;
}
.nav-link {
  @apply text-center w-full transition-all;
}
</style>
