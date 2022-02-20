<template>
  <!-- <label>{{label}}</label> -->
  <input
    class="input__style"
    :type="type"
    :placeholder="label"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    type: {
      type: String,
      default: "Text",
    },
    label: {
      type: String,
      dafault: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.input__style {
  border: 1px solid var(--color-white);
  color: var(--color-white);
  letter-spacing: 1.2px;
  padding: 10px;
  border-radius: 5px;
  background: none;
}
</style>