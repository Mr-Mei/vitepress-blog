<template>
  <div class="accordion">
    <!-- 手风琴每一项 -->
    <details class="accordion-item">
      <!-- 手风琴标题，点击后控制内容折叠/展开 -->
      <summary class="accordion-header">
        <span class="arrow">▶</span>
        <span>Section 1</span>
      </summary>
      <!-- 手风琴内容区域 -->
      <div class="accordion-content">
        <p>This is the content of section 1.</p>
      </div>
    </details>

    <details class="accordion-item" open>
      <summary class="accordion-header">
        <span class="arrow">▶</span>
        <span>Section 2</span>
      </summary>
      <div class="accordion-content">
        <p>This is the content of section 2.</p>
      </div>
    </details>
  </div>
</template>
<script>
export default {
  name: '可折叠效果布局（手风琴）',
}
</script>

<style scoped>
/* 手风琴容器样式 */
.accordion {
  width: 300px;
  background: #fff;
  overflow: hidden;
}

/* 每个手风琴项的样式 */
.accordion-item {
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
}

/* 手风琴标题样式 */
.accordion-header {
  display: flex;
  align-items: center; /* 保持图标和文字垂直居中 */
  padding: 15px 20px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  font-size: 16px;
  user-select: none; /* 禁止选择文字 */
}

/* 手风琴内容样式 */
.accordion-content {
  padding: 15px 20px;
  background-color: #f9f9f9;
}

/* 隐藏默认的箭头样式 */
summary {
  outline: none; /* 去除outline */
  list-style: none; /* 去除列表样式 */
}

/* 箭头的旋转效果 */
.arrow {
  font-size: 18px;
  margin-right: 10px; /* 图标和文字之间的间距 */
  transition: transform 0.3s ease; /* 旋转过渡效果 */
  transform: rotate(0deg); /* 默认角度 */
}

/* 打开时箭头旋转 */
details[open] .arrow {
  transform: rotate(90deg); /* 打开时旋转90度 */
}
</style>
