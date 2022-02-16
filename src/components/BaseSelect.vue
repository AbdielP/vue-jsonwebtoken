<template>
  <select :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
    <option value="" disabled selected>-</option>
    <option value="mobile">Mobile</option>
    <option value="phone">Phone</option>
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
