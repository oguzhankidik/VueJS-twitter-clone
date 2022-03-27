<template>
  <div class="container px-3">
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
          class="bg-transparent min-h-full outline-none text-white flex-wrap clone-textarea"
          type="textarea"
          placeholder="Neler oluyor ?"
        />
      </div>
    </div>
  </div>
</template>

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
}
</style>
