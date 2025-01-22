```vue
<template>
  <div class="card">
    <div class="card-image">
      <img src="/assets/avatar.jpg" alt="示例图片" />
    </div>
    <div class="card-content">
      <h3 class="card-title">靓仔</h3>
      <p class="card-text">这是一个靓仔</p>
      <button class="card-button">点击按钮</button>
    </div>
  </div>
</template>
<style scoped>
.card {
  --size: 300px; /* 容器大小 */

  display: flex;
  flex-direction: column;
  width: var(--size);
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15); /* 阴影效果 */
  overflow: hidden;
  background-color: #fff;
}
.card-image img {
  width: 100%;
  height: 150px;
  object-fit: cover; /* 保持图片比例，填满容器 */
}
.card-content {
  padding: 15px;
}

.card-title {
  margin: 0 0 10px;
  font-size: 18px;
  color: #333;
}

.card-text {
  margin: 0 0 15px;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
}

/* 卡片按钮 */
.card-button {
  padding: 2px 15px;
  font-size: 14px;
  color: #fff;
  background-color: #ff5a5f;
  border: none;
  border-radius: 30px;
  cursor: pointer;
}

.card-button:hover {
  background-color: #e04848;
}
</style>
```
