<template>
  <div class="arrow-layout">
    <div class="arrow">
      <div class="spacer top"></div>
      <div class="spacer right"></div>
      <div class="spacer bottom"></div>
      <div class="spacer left"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: '不同方向的箭头',
}
</script>
<style scoped>
.arrow-layout {
  --size: 300px; /* 容器大小 */
  --border-color: #ccc; /* 边框颜色 */
  --spacing: 90px; /* 内边距大小 */
  --spacer-size: 35px; /* 间隔元素大小 */
  --spacer-offset: -10px; /* 间隔元素与边框的偏移 */
  --bg-color: #fff;

  width: var(--size);
  height: var(--size);
  border: 1px solid var(--border-color);
  padding: var(--spacing);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-color);
}

.arrow {
  width: 100%;
  height: 100%;
  border: 2px solid var(--border-color);
  position: relative;
  transform: rotate(45deg); /* 菱形旋转 */
}

/* 空白间隔元素的通用样式 */
.spacer {
  position: absolute;
  width: var(--spacer-size);
  height: var(--spacer-size);
  background-color: var(--bg-color);
}

/* 四个方向的空白间隔 */
.spacer.top {
  top: var(--spacer-offset);
  left: 50%;
  transform: translateX(-50%);
}

.spacer.right {
  right: var(--spacer-offset);
  top: 50%;
  transform: translateY(-50%);
}

.spacer.bottom {
  bottom: var(--spacer-offset);
  left: 50%;
  transform: translateX(-50%);
}

.spacer.left {
  left: var(--spacer-offset);
  top: 50%;
  transform: translateY(-50%);
}
</style>
