# Vue3 基础知识

## 1. **核心概念和基础特性**

### 1.1 Vue 实例

Vue 3 使用新的创建实例方式，通过 `createApp` 初始化应用。

```ts
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

### 1.2 组件系统

Vue 3 依旧基于组件开发，可以通过单文件组件 (SFC) 或函数式组件开发。

- **单文件组件**：`.vue` 文件形式，包含 `template`、`script` 和 `style`。
- **基本结构**：

```ts
<template>
  <div>{{ message }}</div>
</template>

<script>
export default {
  data() {
    return { message: 'Hello Vue 3!' };
  },
};
</script>

<style>
div {
  color: blue;
}
</style>
```

---

### 1.3 模板语法

#### **插值**

- 文本插值：`{{ message }}`
- HTML 插值：`v-html`

```vue
<p>{{ message }}</p>
<p v-html="htmlContent"></p>
```

#### **指令**

- 条件渲染：`v-if`、`v-else`、`v-show`
- 列表渲染：`v-for`
- 事件绑定：`v-on` / `@`
- 双向绑定：`v-model`

```vue
<p v-if="isShow">This is conditional rendering.</p>
<ul>
  <li v-for="(item, index) in items" :key="index">{{ item }}</li>
</ul>
<button @click="handleClick">Click Me</button>
```

#### **绑定**

- 属性绑定：`v-bind` / `:`
- 动态类名与样式：

```vue
<div :class="{ active: isActive }" :style="{ color: 'red' }">Dynamic Style</div>
```

---

### 1.4 响应式

#### **响应式数据**

Vue 3 中新增了基于 Proxy 的响应式系统，提供 `reactive` 和 `ref` API。

- **ref：**用于单个值或非对象。
- **reactive：**用于复杂对象。

```ts
import { ref, reactive } from 'vue'
const count = ref(0)
const user = reactive({ name: 'John', age: 30 })
```

#### **计算属性和侦听器**

- **computed：**用来定义基于其他响应式数据计算的值。
- **watch：**监听响应式数据的变化并执行回调。

```ts
import { computed, watch } from 'vue'

const doubleCount = computed(() => count.value * 2)

watch(count, (newVal, oldVal) => {
  console.log(`Count changed: ${oldVal} -> ${newVal}`)
})
```

---

## 2. **Composition API**

Vue 3 的核心新特性，提供了一种更灵活、更可重用的逻辑组织方式。

### 2.1 `setup` 函数

- 作为组件的入口。
- 在组件初始化前调用。

```vue
<template>
  <div>{{ count }}</div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    return { count }
  },
}
</script>
```

### 2.2 生命周期钩子

与 Options API 对应的生命周期钩子，可在 `setup` 中使用。

```ts
import { onMounted, onUnmounted } from 'vue'

onMounted(() => console.log('Component Mounted'))
onUnmounted(() => console.log('Component Unmounted'))
```

#### 对应关系：

| Options API     | Composition API   |
| --------------- | ----------------- |
| `created`       | N/A               |
| `mounted`       | `onMounted`       |
| `updated`       | `onUpdated`       |
| `beforeUnmount` | `onBeforeUnmount` |
| `unmounted`     | `onUnmounted`     |

---

## 3. **组件间通信**

### 3.1 父子通信

- 父组件通过 `props` 向子组件传递数据。
- 子组件通过事件 `emit` 通知父组件。

```vue
// 子组件
<script>
export default {
  props: ['message'],
  emits: ['update'],
}
</script>

// 父组件
<Child :message="parentMessage" @update="handleUpdate" />
```

### 3.2 Provide / Inject

祖先组件与后代组件共享数据。

```ts
import { provide, inject } from 'vue'

// 父组件
provide('key', 'value')

// 子组件
const value = inject('key')
```

### 3.3 全局状态管理

Vue 3 推荐使用 Pinia 或 Vuex 管理全局状态。

---

## 4. **模板增强**

### 4.1 Fragment

Vue 3 支持多个根节点，避免冗余的包裹元素。

```vue
<template>
  <p>First Element</p>
  <p>Second Element</p>
</template>
```

### 4.2 Teleport

支持将组件渲染到 DOM 树外的指定位置。

```vue
<template>
  <Teleport to="body">
    <div class="modal">Modal Content</div>
  </Teleport>
</template>
```

---

## 5. **性能优化**

### 5.1 异步组件

通过 `defineAsyncComponent` 按需加载组件。

```ts
import { defineAsyncComponent } from 'vue'

const AsyncComponent = defineAsyncComponent(() => import('./components/HeavyComponent.vue'))
```

### 5.2 渲染优化

使用 `v-memo` 缓存组件树。

```vue
<template>
  <div v-memo="[count]">{{ count }}</div>
</template>
```

---

## 6. **构建和工具**

### 6.1 Vite 工具支持

Vue 3 强烈推荐使用 Vite 作为构建工具，支持快速热更新和性能优化。

### 6.2 TypeScript 支持

Vue 3 与 TypeScript 紧密集成，可在 SFC 中使用 `lang="ts"`。

```vue
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    name: String,
  },
})
</script>
```

---

## 7. **生态系统**

### 7.1 Pinia（状态管理库）

替代 Vuex 的轻量状态管理解决方案。

```ts
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  actions: {
    increment() {
      this.count++
    },
  },
})
```

### 7.2 Vue Router

Vue 3 的官方路由支持：

```ts
import { createRouter, createWebHistory } from 'vue-router'

const routes = [{ path: '/', component: Home }]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
```
