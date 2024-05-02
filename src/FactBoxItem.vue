<template>
  <div class="text-center text-sm font-semibold text-white border-app-200 border-l-2 pl-4 min-h-16 first:border-l-0 first:pl-0">
    <div
      class="text-sm font-semibold text-yellow-500 whitespace-nowrap flex flex-col"
    >
      <span v-for="(labelItem, index) in labelAsArray" :key="`label-${index}`" :class="labelClass">
        {{ labelItem }}
      </span>
    </div>
    <span
      v-if="value"
      data-testid="factBox-pricing-premium-value"
      :class="[valueClass, { 'cursor-pointer': showTooltip }]"
      class="flex w-fit"
    >
      {{ value }}
    </span>
    <div v-else :class="valueClass" class="flex w-fit">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { FactBoxItemProps } from './definitions'

const props = defineProps<FactBoxItemProps>()

const labelAsArray = computed(() => {
  if (!props.label) return []

  if (Array.isArray(props.label)) {
    return props.label
  }

  return [props.label]
})
</script>

<style scoped>
.price-down {
  color: theme('colors.s-red.300');
}

.icon-price-down::after {
  background-color: theme('colors.s-red.300');
  display: block;
  margin: auto;
  width: 20px;
  height: 20px;
  content: '';
  mask: url('/ChevronDown.svg');
  mask-repeat: no-repeat;
  margin-left: 4px;
}

.price-up {
  color: theme('colors.p-green.400');
}

.icon-price-up::after {
  background-color: theme('colors.p-green.400');
  rotate: theme('rotate.180');
  display: block;
  margin: auto;
  width: 20px;
  height: 20px;
  content: '';
  mask: url('/ChevronDown.svg');
  mask-repeat: no-repeat;
  margin-left: 4px;
}

.price-normal {
  color: theme('colors.n-gray.150');
}

.icon-price-normal::after {
  rotate: theme('rotate.180');
  display: block;
  background: theme('colors.n-gray.150');
  margin: auto;
  width: 15px;
  height: 15px;
  content: '';
  mask: url('/minus.svg');
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
  margin-left: 4px;
}
</style>
