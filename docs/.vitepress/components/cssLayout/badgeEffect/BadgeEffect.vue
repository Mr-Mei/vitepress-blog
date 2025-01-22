<template>
  <div class="badge-container">
    <div class="badge">1</div>
  </div>
</template>
<script>
export default { name: '徽章效果' }
</script>
<style scoped>
.badge-container {
  --container-size: 300px; /* 容器大小 */
  --border-color: #ddd; /* 容器边框颜色 */
  --background-color: #fff; /* 容器背景色 */

  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--container-size);
  height: var(--container-size);
  background-color: var(--background-color);
  border: 2px solid var(--border-color);
}

/* 徽章样式 */
.badge {
  --badge-size: 50px; /* 徽章大小 */
  --badge-color: #ccc; /* 徽章背景色 */
  --text-color: #fff; /* 文本颜色 */
  --font-size: 24px; /* 字体大小 */

  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--badge-size);
  height: var(--badge-size);
  border-radius: 50%; /* 圆形徽章 */
  background-color: var(--badge-color);
  color: var(--text-color);
  font-size: var(--font-size);
  font-weight: bold; /* 加粗文本 */
}
</style>
