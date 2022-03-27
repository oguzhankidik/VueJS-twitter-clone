<template>
  <div class="flex flex-col text-white items-center">
    <ul class="ml-auto">
      <li>
        <a href="#" class="w-full">
          <div class="flex items-center w-fit">
            <i class="fa-brands fa-twitter"></i></div
        ></a>
      </li>
      <li>
        <a href="#" class="w-full">
          <div class="flex items-center w-fit">
            <i class="fa-solid fa-house" />
            <span>Anasayfa</span>
          </div></a
        >
      </li>
      <li>
        <a href="#" class="w-full">
          <div class="flex items-center w-fit">
            <i class="fa-light fa-hashtag" />
            <span> Keşfet </span>
          </div>
        </a>
      </li>
      <li>
        <a href="#" class="w-full">
          <div class="flex items-center w-fit">
            <i class="fa-regular fa-bell" />
            <span> Bildirimler</span>
          </div></a
        >
      </li>
      <li>
        <a href="#" class="w-full">
          <div class="flex items-center w-fit">
            <i class="fa-regular fa-envelope"></i>
            <span>Mesajlar</span>
          </div>
        </a>
      </li>
      <li>
        <a href="#" class="w-full">
          <div class="flex items-center w-fit">
            <i class="fa-regular fa-bookmark" />
            <span> Yer işaretleri </span>
          </div>
        </a>
      </li>
      <li>
        <a href="#" class="w-full">
          <div class="flex items-center w-fit">
            <i class="fa-regular fa-rectangle-list"></i>
            <span>Listeler</span>
          </div>
        </a>
      </li>
      <li>
        <a href="#" class="w-full">
          <div class="flex items-center w-fit">
            <i class="fa-regular fa-user"></i>
            <span>Profil</span>
          </div></a
        >
      </li>
      <li>
        <a href="#" class="w-full">
          <div class="flex items-center w-fit">
            <i class="fa-solid fa-ellipsis"></i>
            <span>Daha fazla</span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  setup() {},
};
</script>

<style lang="scss">
li {
  @apply text-left py-2 font-light text-lg flex;
}
li > a {
  @apply pr-20;

  &:hover > div {
    background-color: rgba(231, 233, 234, 0.1);
  }
  & > div {
    @apply py-2 pl-3 pr-5 rounded-full transition-all;

    &:hover {
      background-color: rgba(231, 233, 234, 0.1);
    }
  }
}

li i {
  font-size: 23px;
  width: 23px;
  text-align: center;
}

li span {
  @apply ml-4;
}
</style>
