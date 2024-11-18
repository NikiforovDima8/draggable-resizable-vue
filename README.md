# draggable-resizable-vue3

[![Latest Version on NPM](https://img.shields.io/npm/v/draggable-resizable-vue3.svg?style=flat-square)](https://www.npmjs.com/package/draggable-resizable-vue3)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
[![npm](https://img.shields.io/npm/dt/draggable-resizable-vue3.svg?style=flat-square)](https://www.npmjs.com/package/draggable-resizable-vue3)

This is Vue 3 (Composition API) library for draggable and resizable elements with custom grid.

![preview](static/draggable.gif)

## Get started

- [:green_book: Documentation](https://draggable-resizable-vue3.netlify.app/).
- [:cookie: Examples](https://draggable-resizable-vue3.netlify.app/docs/examples/no-props.html).
- [:tomato: Live playground.](https://codesandbox.io/s/github/zavalen/draggable-resizable-vue3?file=/src/App.vue)



## Roadmap
- :white_check_mark: Rewrite to Composition API.
- :white_check_mark: Create docs.
- :black_square_button: Test all props, slots and events.
- :black_square_button: Add as much as possible examples of usage to the docs.
- :black_square_button: Release the stable `1.1.0` version.



## Installation

```bash
$ npm install draggable-resizable-vue3
```

Register (`DraggableResizableVue` and `DraggableResizableContainer` components) globally:

```js
// main.js
import { createApp } from "vue";
import App from "./App.vue";
import DraggableResizableVue from "draggable-resizable-vue3";
const app = createApp(App);
app.use(DraggableResizableVue);
app.mount("#app");
```

Register locally (composition API):

```vue
<script setup>
import DraggableResizableVue from "draggable-resizable-vue3";
</script>
```

Register locally with the container component:

```vue
<script setup>
import {
  DraggableResizableVue,
  DraggableResizableContainer,
} from "draggable-resizable-vue3";
</script>
```
___

Initially, this is a fork of the Vue 2 library [vue-draggable-resizable](https://github.com/mauricius/vue-draggable-resizable). Now it is being developed independently from the source.