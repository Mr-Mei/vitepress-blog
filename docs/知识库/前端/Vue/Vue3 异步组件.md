# Vue3 异步组件

在 Vue 3 中，异步组件可以使用`defineAsyncComponent`函数来创建。这个函数接受一个工厂函数，该函数返回一个`Promise`，它解析为一个组件。你还可以提供一个选项对象来处理加载状态、错误处理和超时。

```JavaScript
import { defineAsyncComponent } from 'vue';

const AsyncComponent = defineAsyncComponent(() =>
  import('./MyAsyncComponent.vue')
);
// 或者使用高级选项
const AsyncComponentWithOptions = defineAsyncComponent({
  // 工厂函数
  loader: () => import('./MyAsyncComponent.vue'),
  // 加载异步组件时使用的组件
  loadingComponent: LoadingComponent,
  // 如果加载失败，应该使用的组件
  errorComponent: ErrorComponent,
  // 在显示错误组件之前的延迟（默认值是：Infinity）
  delay: 200,
  // 如果提供了timeout，超时之后将显示错误组件，默认值是：Infinity
  timeout: 3000,
  // 定义组件是否可挂起
  suspensible: false, // 默认为 true，在 <Suspense> 内部使用
  // 在尝试重新加载失败的组件之前的等待时间
  retryDelay: 1000,
  // 将尝试重新加载的次数
  retries: 3
});
```

在模板中像普通组件一样使用`AsyncComponent`。

```XML
<template>
  <div>
    <AsyncComponent />
  </div>
</template>
```

1. **路由级的懒加载：** 当使用 Vue Router 时，可以通过异步组件来实现路由级别的代码分割。这意味着只有当用户实际访问某个路由时，相应的组件代码才会被加载，从而减少了初始加载的时间。

```TOML
   const About = defineAsyncComponent(() => import('./views/About.vue'));

   const router = createRouter({
     history: createWebHistory(),
     routes: [
       { path: '/about', component: About }
     ]
   });

```

1. **大型组件的延迟加载：** 如果你的应用中有一些功能复杂、体积较大的组件，可能不想在应用加载时就立即加载它们。使用异步组件可以在需要时才加载它们，例如用户点击按钮时。

```XML
    <template>
      <button @click="loadComponent">Load Editor</button>
      <div v-if="editor">
        <editor />
      </div>
    </template>

    <script>
    import { defineAsyncComponent, ref } from 'vue';

    export default {
      components: {
        editor: defineAsyncComponent(() =>
          import('./components/LargeTextEditor.vue')
        )
      },
      setup() {
        const editor = ref(null);

        function loadComponent() {
          editor.value = true;
        }

        return { editor, loadComponent };
      }
    };
    </script>

```

1. **条件渲染：** 当某个组件只在特定条件下显示时，例如模态窗口或者折叠面板，可以使用异步组件仅在需要时加载该组件。

```XML
    <template>
      <button @click="showModal = true">Open Modal</button>
      <AsyncModal v-if="showModal" @close="showModal = false" />
    </template>

    <script>
    import { defineAsyncComponent, ref } from 'vue';

    const AsyncModal = defineAsyncComponent(() =>
      import('./components/Modal.vue')
    );

    export default {
      components: {
        AsyncModal
      },
      setup() {
        const showModal = ref(false);

        return { showModal };
      }
    };
    </script>
```

1. **依赖其他资源加载的组件：** 如果你有一个组件依赖于其他的资源加载，如第三方库或者是通过 AJAX 请求获取的数据，这时使用异步组件可以确保组件在所有依赖项都加载完成后才渲染。

```XML
 <template>
  <ChartComponent v-if="chartData" :data="chartData" />
 </template>

<script>
import { defineAsyncComponent, ref, onMounted } from 'vue';
import { fetchChartData } from './api';

const ChartComponent =
defineAsyncComponent(() => import('./components/ChartComponent.vue') );

export default {
  components: { ChartComponent },
  setup() {
    const chartData = ref(null);
    onMounted( async () => { chartData.value = await fetchChartData(); });
    return { chartData };
    }
  };
</script>
```

`在这个例子中，`ChartComponent`是一个异步组件，只有在`chartData` 被设置之后才会渲染。这样可以确保组件依赖的数据已经准备好了，从而避免在数据未就绪时渲染组件。

这些场景展示了异步组件在 Vue 3 中的多样化应用，通过动态地加载组件，可以有效地优化应用的加载时间、性能和用户体验。使用异步组件是现代前端开发中一个重要的性能优化策略。
