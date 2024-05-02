
<template>
  <div class="bg-app-500 h-screen p-4 text-white">
    <div class="rounded bg-app-300 flex flex-col flex-wrap gap-4 items-start p-6 ">
      <h1 class="border-b-2 border-app-200 w-full text-3xl font-semibold pb-2">WORKSHOP - Unit testing</h1>
      <div class="flex flex-wrap gap-4 items-start">
        <FactBoxItem
          :label="['Total Mined Lithium', 'Production 2024 (t, LCE)']"
          value="44,930"
          label-class="text-left text-white"
          value-class="text-yellow-500"
        />
        <FactBoxItem
          :label="['Total Chemical Lithium', 'Production 2024 (t, LCE)ce']"
          value="44,930 (5%)"
          label-class="text-left text-white"
          value-class="icon-price-up price-up"
        />
        <FactBoxItem
          :label="['Total Lithium Demand', '2024 (t, LCE)']"
          value="14,584 (0%)"
          label-class="text-left text-white"
          value-class="icon-price-normal price-normal"
        />
        <FactBoxItem
          :label="['Lithium Market', 'Value ($)']"
          value="14,044 (2%)"
          label-class="text-left text-white"
          value-class="icon-price-down price-down"
        />
      </div>
    </div>
    <div class="mt-4 grid grid-cols-2 gap-4">
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import FactBoxItem from './src/FactBoxItem.vue';
import Card from './src/Card.vue';
</script>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>