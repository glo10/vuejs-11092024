<script setup>
const emit = defineEmits(['app:change:filter'])
const changeOption = (criteria) => {
  emit("app:change:filter", criteria)
};
</script>
<template>
  <div>
    <article>
      <h5>Par état</h5>
      <label for="yes">oui</label>
      <input type="radio" name="bought" value="yes" id="yes" @change="changeOption({ isBought: true })">
      <label for="non">non</label>
      <input type="radio" name="bought" value="no" id="no" @change="changeOption({ isBought: false })">
      <label for="all">oui et non</label>
      <input type="radio" name="bought" value="all" id="all" @change="changeOption({})">
    </article>
  </div>
</template>