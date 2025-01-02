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
