```vue
<template>
  <div class="main">
    <div class="avatar-wrap">
      <img class="avatar" src="/assets/avatar.jpg" alt="avatar" />
    </div>
  </div>
</template>
<style scoped>
.main {
  --size: 200px; /* 容器大小 */
  --border-color: #ccc; /* 边框颜色 */

  width: var(--size);
  height: var(--size);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-color);
}
.avatar-wrap {
  width: 50%;
  height: 50%;
  border-radius: 50%;
  overflow: hidden;
}
.avatar-wrap .avatar {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
```
