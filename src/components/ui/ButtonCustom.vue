<script setup>
defineProps({
    type: {
        type: String,
        default: 'default',
        validator(value) {
            return ['default', 'light'].includes(value);
        },
    },
});
</script>

<template>
    <button class="btn" :class="type">
        <slot>Button</slot>
    </button>
</template>

<style scoped>
.btn {
    padding: 12px 24px;
    max-width: 160px;
    width: 100%;
    min-height: 48px;
    color: var(--color-text-2);
    border: 1px solid var(--color-border-3);
    border-radius: 6px;
    background-image: var(--gradient);
    font-family: inherit;
    font-size: inherit;
    font-weight: 600;
    cursor: pointer;
}

.btn.light {
    color: var(--color-text);
    background: none;
    border-color: var(--color-border-4);
}
</style>
