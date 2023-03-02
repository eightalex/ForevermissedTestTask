<script setup>
import IconDelete from '@/components/icons/IconDelete.vue';

defineProps({
    email: {
        type: String,
        default: 'temp@temp.com',
    },
    name: {
        type: String,
        default: 'Oleksandr Kuzmenko',
    },
});
</script>

<template>
    <li class="list-item">
        <div class="list-item__content">
            <div class="list-item__email">{{ email }}</div>
            <div class="list-item__name">{{ name }}</div>
        </div>
        <IconDelete class="list-item__delete" @click="$emit('delete')"/>
    </li>
</template>

<style scoped>
.list-item {
    display: flex;
    align-items: center;
    gap: 10px;
}

.list-item__content {
    flex-grow: 1;
    padding: 6px 16px 6px 12px;
    background-color: var(--color-background-3);
    border-radius: var(--border-radius);
}

.list-item__email {
    font-size: inherit;
    line-height: 24px;
}

.list-item__name {
    font-size: 12px;
    color: var(--color-text-3);
    line-height: 16px;
}

.list-item__delete {
    cursor: pointer;
}
</style>
