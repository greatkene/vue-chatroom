<template>
    <div>
        <label>{{ label }}</label>
        <input :type="type" :placeholder="placeholder" :value="value" @input="$emit('update:value', $event.target.value)" />
    </div>
</template>
  
<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: ''
        },
        value: {
            type: [String, Number],
            required: true
        }
    }
};
</script>
  