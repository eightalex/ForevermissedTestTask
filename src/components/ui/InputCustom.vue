<template>
    <input class="input" :type="type" :placeholder="placeholder">
</template>

<script setup>
defineProps({
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
});
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
</style>
