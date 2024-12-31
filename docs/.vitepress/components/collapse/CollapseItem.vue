<template>
  <div class="collapse-item">
    <div
      class="collapse-item-header"
      :class="{ 'header-click-disabled': toggleOnlyOnIcon }"
      @click="headerClick"
    >
      <!-- Header 内容 -->
      <slot name="header"></slot>

      <!-- 图标区域 -->
      <div class="icon-wrap" @click.stop="toggle">
        <!-- 默认图标 -->
        <span class="arrow-icon" v-if="!$slots.icon" :class="{ rotated: isActive }"> ▼ </span>

        <!-- 自定义图标 -->
        <div class="custom-icon-wrapper" :class="{ rotated: isActive }" v-else>
          <slot name="icon" :is-active="isActive" />
        </div>
      </div>
    </div>

    <!-- 内容区域 -->
    <div class="collapse-item-content" v-show="isActive">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'

const collapseContext: any = inject('collapseContext')
if (!collapseContext) {
  throw new Error('CollapseItem must be used inside Collapse')
}

// 定义 props
const props = defineProps({
  name: { type: String, required: true }, // 唯一标识符
  toggleOnlyOnIcon: { type: Boolean, default: false }, // 是否仅图标可触发
})

// 当前是否展开
const isActive = computed(() => collapseContext.activeKeys.value.includes(props.name))

// 切换状态
const toggle = () => collapseContext.toggle(props.name)

// 控制 header 是否响应点击
const headerClick = () => {
  if (!props.toggleOnlyOnIcon) toggle()
}
</script>

<style scoped>
.collapse-item {
  border-top: 1px solid #ddd;
}

.collapse-item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background-color: #f7f7f7;
  cursor: pointer;
}

.collapse-item-header:hover {
  background-color: #eaeaea;
}

.collapse-item-content {
  padding: 10px 15px;
  background-color: #fff;
}

.arrow-icon {
  transition: transform 0.3s ease;
  font-size: 12px;
  display: inline-block;
}

.arrow-icon.rotated,
.custom-icon-wrapper.rotated {
  transform: rotate(180deg); /* 默认旋转逻辑 */
}

.custom-icon-wrapper {
  transition: transform 0.3s ease; /* 确保动画一致 */
}
</style>
