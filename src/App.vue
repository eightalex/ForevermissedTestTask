<script setup>
import Popup from '@/components/Popup.vue';
</script>

<template>
    <main class="main">
        <transition name="modal">
            <Popup/>
        </transition>
    </main>
</template>

<style scoped>
.main {
    min-height: 100vh;
    background-image: url("src/assets/main_background.png");
    background-size: cover;
}

.main::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.32);
}
</style>
