# Vue3常用方法

## **什么是** **Hooks**

在 Vue 3 中，引入了 Composition API，它是一种新的 API 设计范式，为我们提供了更加灵活和可组合的代码组织方式。其中的一个重要概念就是 Hooks。

**Hooks** 是一种函数，以 `use` 开头，用于封装可复用的逻辑。它们提供了一种在函数组件中复用状态逻辑的方式，使我们能够更好地组织组件代码，将相关的逻辑聚合在一起，实现更高水平的可维护性。

借用知乎大佬的定义：集成定义一些可复用的方法，可以随时被引入和调用以实现高内聚低耦合的目标，应该都能算是hook。

使用自定义hooks，就是为了让`Compoosition Api`更好用更丰满，让写Vue3更畅快，其实编码体验也是Vue3的优点`Composition Api`的引入（解决Option Api在代码量大的情况下的强耦合） 让开发者有更好的开发体验。

注意：

在Vue 3中，你可以创建自定义的Hooks，它们本质上是普通的JavaScript函数，但可以利用Composition API提供的`ref`、`reactive`、`watch`等函数来创建可重用的组件逻辑。这些自定义Hooks可以在`setup`函数中被调用，并返回一些值，这些值可以在组件中被使用。

虽然在 Vue 3 中以 "use" 开头的命名规范是推荐的，但并不是强制要求。Vue 3 的 Composition API 并没有硬性规定自定义 Hook 函数必须以 "use" 开头，而是推崇这种命名约定以方便开发者辨识。

以下是一些遵循 "use" 命名约定的好处：

1. 易于识别： 以 "use" 开头的函数名可以让其他开发者清晰地知道这是一个自定义 Hook，而不是普通的函数或组件。
2. 遵循约定： Vue 社区通常采用这种命名约定，这有助于代码的一致性和可读性。
3. 编辑器支持： 一些代码编辑器和插件可能会根据 "use" 的命名约定提供更好的自动补全和提示功能。

虽然推荐使用 "use" 开头的命名约定，但在特殊情况下，你可以根据项目的具体需求和团队的约定来命名自定义 Hook 函数。关键是保持代码的一致性和可读性，确保其他开发者容易理解和使用你的代码。

## Vue3常用的hooks方法

## **本地存储方法**

我们经常需要使用`localStorage`API，一个好用的可组合函数封装将帮助我们更好地使用它。

```JavaScript
import { customRef } from "vue"

/**
 * @description 本地存储方法封装
 * @param key 键名
 * @param initValue        初始值
 * @returns value
 */
export const useLocalStorage = (key: string, initValue: any) => {
        // 创建自定义ref，对依赖项进行跟踪和更新
        const value = customRef((track, trigger) => {
                return {
                        // 获取数据值
                        get: () => {
                                track()
                                const val = localStorage.getItem(key)
                                if (val) return val
                                // 把初始化的值存进去
                                localStorage.setItem(key, initValue)
                                return initValue
                        },
                        // 监听数据变化
                        set: (newVal: any) => {
                                trigger()
                                localStorage.setItem(key, newVal)
                        }
                }
        })

        return value
}
```

示例：

```JavaScript
<template>
    <div>{{ counter }}</div>
    <el-button type="primary" @click="update">更新</el-button>
</template>

<script setup lang="ts">
    import { useLocalStorage } from "@/hooks"

    const counter = useLocalStorage("counter", 0)

    // 更新 counter 值
    const update = () => {
        counter.value++
    }

</script>
```

## **自定义防抖Ref**

防抖函数在输入框操作场景中非常有用，一个 防抖的`ref`在`Vue.js`更加灵活。

```JavaScript
import { customRef } from "vue"

/**
 * @description 自定义防抖Ref
 * @param value 数据值
 * @param delay 延迟时间
 * @returns value
 */
export const useDebouncedRef = (value: number | string, delay: number = 300) => {
        let timer: any
        return customRef((track, trigger) => {
                return {
                        get: () => {
                                track()
                                return value
                        },
                        set: (newVal: any) => {
                                timer && clearTimeout(timer)
                                timer = setTimeout(() => {
                                        trigger()
                                        value = newVal
                                }, delay);
                        }
                }
        })
}
```

示例：

```JavaScript
<template>
    <el-input v-model="text" placeholder="Please input" />
</template>
<script setup lang="ts">
    import { useDebouncedRef } from "@/hooks"
    const text = useDebouncedRef("hello")
</script>
```

## **表格多选操作**

多选是表格批量编辑、删除常用的功能，我们用hooks也封装一下吧。

```JavaScript
import { ref, computed } from "vue"
import { ElTable } from 'element-plus'

/**
 * @description 表格多选操作
 * @param rowKey 键名
 */
export const useSelection = (rowKey: string = "id") => {
        const multipleTableRef = ref<InstanceType<typeof ElTable>>()
        const selectList = ref([])

        // 获取ids
        const selectListIds = computed(() => {
                const ids = selectList.value.map(item => item[rowKey])
                return ids
        })

        // 多选操作
        const handleSelectionChange = (rowArr: any) => {
                selectList.value = rowArr
        }

        // 关闭多选
        const clearSelection = () => {
                multipleTableRef.value!.clearSelection()
        }

        return {
                multipleTableRef,
                selectList,
                selectListIds,
                clearSelection,
                handleSelectionChange
        }
}
```

示例：

```JavaScript
<script setup lang="ts">
    import { useSelection } from "@/hooks"
    import { watch } from 'vue';

    const { multipleTableRef, selectListIds, handleSelectionChange } = useSelection()

    const tableData: any[] = [
      { id: '1', name: 'Tom' },
      { id: '2', name: 'Tom' }
    ]
    watch(selectListIds, (newVal) => {
        console.log(newVal)
    })
</script>

<template>
    <el-table
        ref="multipleTableRef"
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
    >
    <el-table-column type="selection" width="55" />
        <el-table-column property="name" label="Name" width="120" />
    </el-table>
</template>
```

## **网络是否可用**

```JavaScript
import { ref, onMounted, onUnmounted } from 'vue';

/**
 * @description 网络是否可用
 * @returns
 */
export const useOnline = () => {
        const online = ref(false)

        const showStatus = (val: any) => {
            online.value = typeof val == 'boolean' ? val : val.target.online
        }

        // 在页面加载后，设置正确的网络状态
        navigator.onLine ? showStatus(true) : showStatus(false)

        onMounted(() => {
            // 开始监听网络状态变化
            window.addEventListener("online", showStatus)
            window.addEventListener("offline", showStatus)
        })

        onUnmounted(() => {
            // 移除监听网络状态的变化
            window.removeEventListener("online", showStatus);
            window.removeEventListener("offline", showStatus);
        });

        return {
            online
        }
}
```
