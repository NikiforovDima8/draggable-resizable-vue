<template>
  <div ref="el" :style="style" :class="[className]">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, computed, provide } from 'vue'

const props = defineProps({
  grid: {
    type: Array,
    default: () => [1, 1],
    validator: (val) =>
      Array.isArray(val) &&
      typeof val[0] === 'number' &&
      typeof val[1] === 'number',
  },
  showGrid: {
    type: [Boolean, String],
    default: false,
    validator: (val) => [true, false, 'x', 'y', 'both'].includes(val),
  },
  gridColor: {
    type: String,
    default: 'rgba(0, 0, 0, 0.1)',
  },
  className: {
    type: String,
    default: 'drv-container',
  },
})

const grid = computed(() => {
  return props.grid
})

const className = computed(() => {
  return props.className
})

provide('drvContainerClass', className)
provide('drvContainerGrid', grid)



const el = ref(null)

const gridBackgroundStyle = computed(() => {
  const axisBg = {
    x: `linear-gradient(-90deg, ${props.gridColor} 1px, transparent 1px) 0px 0px / ${props.grid[0]}px ${props.grid[0]}px`,
    y: `linear-gradient(0deg, ${props.gridColor} 1px, transparent 1px) 0px 0px / ${props.grid[1]}px ${props.grid[1]}px`,
  }

  if (props.showGrid === 'x' || props.showGrid === 'y') {
    return axisBg[props.showGrid]
  }

  return props.showGrid ? `${axisBg.x}, ${axisBg.y}` : null
})

const style = computed(() => {
  const style = {
    position: 'relative',
  }

  if (props.showGrid) {
    style.background = gridBackgroundStyle.value
  }

  return style
})
</script>
