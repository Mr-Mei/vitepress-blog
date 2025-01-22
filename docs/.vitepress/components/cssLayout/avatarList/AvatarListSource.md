```vue
<template>
  <div class="avatar-list">
    <div class="avatar-item">
      <img src="/assets/avatar.jpg" alt="Avatar" />
    </div>
    <div class="avatar-item">
      <img src="/assets/avatar.jpg" alt="Avatar" />
    </div>
    <div class="avatar-item">
      <img src="/assets/avatar.jpg" alt="Avatar" />
    </div>
  </div>
</template>
<style scoped>
.avatar-list {
  --avatar-size: 50px; /* 头像大小 */
  --container-size: 300px; /* 容器大小 */
  --border-color: #ffffff; /* 头像边框颜色 */

  display: flex;
  width: var(--container-size);
  height: var(--container-size);
  padding-left: 20px;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #ccc;
  background-color: #fff;
}

.avatar-item {
  position: relative;
  margin-left: -10px; /* 头像间距，设置负值以重叠 */
}

.avatar-item:first-child {
  margin-left: 0; /* 第一个头像无偏移 */
}

.avatar-item img {
  width: var(--avatar-size);
  height: var(--avatar-size);
  border-radius: 50%; /* 圆形头像 */
  object-fit: cover; /* 保持图片比例，填满容器 */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); /* 添加阴影效果 */
  border: 2px solid var(--border-color); /* 边框颜色 */
}
</style>
```
