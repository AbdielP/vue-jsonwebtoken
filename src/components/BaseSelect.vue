<template>
  <select class="select" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
    <option class="option" value disabled selected>Select an option</option>
    <option class="option" value="mobile">Mobile</option>
    <option class="option" value="phone">Phone</option>
  </select>
</template>

<script>
export default {
    name: 'BaseSelect',
    props: {
        modelValue: {
            type: [String, Number],
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>
.select {
  border: 1px solid var(--color-white);
  color: var(--color-white);
  letter-spacing: 1.2px;
  border-radius: 5px;
  margin-right: 3px;
  background: none;
  padding: 10px;
  width: auto;
  // width: 100%;
}

.option {
  color: var(--background-light);
}

</style>
