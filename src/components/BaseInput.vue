<template>
  <!-- <label>{{label}}</label> -->
  <input :type="type" :placeholder="label" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'Text'
        },
        label: {
            type: String,
            dafault: ''
        },
        modelValue: {
            type: [String, Number],
            default: ''
        }
    }
}
</script>