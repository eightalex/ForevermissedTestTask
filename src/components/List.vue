<template>
    <ul class="list">
        <slot></slot>
    </ul>
</template>

<style scoped>
.list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 15px 24px;
    width: 100%;
}
</style>
