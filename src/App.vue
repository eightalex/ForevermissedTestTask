<script setup>
import { ref } from 'vue';
import Popup from '@/components/Popup.vue';
import ButtonCustom from '@/components/ui/ButtonCustom.vue';

const showModal = ref(false);
</script>

<template>
    <main class="main">
        <ButtonCustom class="btn" @click="showModal = true">Invite Friends</ButtonCustom>
        <Teleport to="body">
            <Popup v-show="showModal" @close="showModal = false"/>
        </Teleport>
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

.btn {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
}
</style>
