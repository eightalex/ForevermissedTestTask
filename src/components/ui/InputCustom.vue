<template>
    <input
        class="input"
        :class="{ input_error: hasError }"
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        @input="updateValue"
    >
</template>

<script setup>
defineProps({
    modelValue: String,
    placeholder: {
        type: String,
        default: '',
    },
    type: {
        type: String,
        default: 'text',
        validator(value) {
            return ['text', 'email'].includes(value);
        },
    },
    hasError: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(['update:modelValue']);

const updateValue = (event) => {
    emit('update:modelValue', event.target.value);
}
</script>

<style scoped>
.input {
    padding: 12px 16px;
    background-color: var(--color-background-2);
    border-radius: var(--border-radius);
    border: 1px solid var(--color-border);
    color: inherit;
    font-size: 16px;
    font-family: inherit;
    line-height: 22px;
}

.input::placeholder {
    color: var(--color-text-placeholder);
}

.input_error {
    border-color: #ff1e1e;
}
</style>
