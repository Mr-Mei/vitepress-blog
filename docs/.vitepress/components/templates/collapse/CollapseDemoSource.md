### 组件整体结构

- **collapse**
  - `Collapse.vue`
  - `CollapseItem.vue`

### CollapseItem 文件

```vue
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
```

### Collapse.vue 文件

```vue
<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, watch, defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: {
    type: [Array, String],
    default: () => [],
  },
  accordion: {
    type: Boolean,
    default: false, // 默认为非互斥模式
  },
})

// 声明 emits
const emit = defineEmits(['update:modelValue'])

// 初始化活动项
const activeKeys = ref(Array.isArray(props.modelValue) ? [...props.modelValue] : [props.modelValue])

// 更新活动状态
const toggle = (key: string) => {
  if (props.accordion) {
    // 互斥模式：如果已经展开则关闭，否则只允许一个展开
    activeKeys.value = activeKeys.value.includes(key) ? [] : [key]
  } else {
    // 自由模式：多项可以同时展开
    if (activeKeys.value.includes(key)) {
      activeKeys.value = activeKeys.value.filter((k) => k !== key)
    } else {
      activeKeys.value.push(key)
    }
  }

  // 触发 update:modelValue 事件，通知父组件状态变化
  emit('update:modelValue', props.accordion ? activeKeys.value[0] : [...activeKeys.value])
}

// 监听 props.modelValue 的变化，保持同步
watch(
  () => props.modelValue,
  (newValue) => {
    activeKeys.value = Array.isArray(newValue) ? [...newValue] : [newValue]
  },
  { immediate: true }
)

// 提供上下文给子组件
provide('collapseContext', { activeKeys, toggle })
</script>

<style scoped>
.collapse {
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
}
</style>
```

### 使用案例

```vue
<template>
  <div class="collapse-container">
    <h3>互斥模式</h3>
    <!-- 互斥模式下，accordion 为 true -->
    <Collapse v-model="activeItem" :accordion="true">
      <CollapseItem v-for="item in activeItemData" :name="item.name" :key="item.name">
        <template #header>
          {{ item.title }}
        </template>
        <template #icon>
          <i> &hearts;</i>
        </template>
        <template #content>
          {{ item.content }}
        </template>
      </CollapseItem>
    </Collapse>
    <h3>自由模式</h3>
    <!-- 自由模式下，accordion 为 false，允许多个项目同时展开 -->
    <Collapse v-model="activeItems" :accordion="false">
      <CollapseItem v-for="item in activeItemData" :name="item.name" :key="item.name">
        <template #header>
          {{ item.title }}
        </template>
        <template #content>
          {{ item.content }}
        </template>
      </CollapseItem>
    </Collapse>
  </div>
</template>

<script setup>
import Collapse from './Collapse.vue'
import CollapseItem from './CollapseItem.vue'
import { ref } from 'vue'

// 存储活动项
const activeItem = ref('1') // 互斥模式下的活动项
const activeItems = ref(['1', '2']) // 自由模式下的活动项

const activeItemData = ref([
  {
    title: 'Title 1',
    content: 'Content 1',
    name: '1',
  },
  {
    title: 'Title 2',
    content: 'Content 2',
    name: '2',
  },
  {
    title: 'Title 3',
    content: 'Content 3',
    name: '3',
  },
])
</script>
<style scoped>
.collapse-container {
  h3 {
    padding: 5px 0;
  }
}
</style>
```
