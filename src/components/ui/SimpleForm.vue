<script setup>
import InputCustom from '@/components/ui/InputCustom.vue';
import ButtonCustom from '@/components/ui/ButtonCustom.vue';

defineProps({
    placeholder: {
        type: String,
        default: '',
    },
});
</script>

<template>
    <div class="simple-form">
        <InputCustom class="simple-form__input" type="email" :placeholder="placeholder"/>
        <ButtonCustom class="simple-form__btn" type="light">
            <slot></slot>
        </ButtonCustom>
    </div>
</template>

<style scoped>
.simple-form {
    display: flex;
    gap: 12px;
}

.simple-form__input {
    flex-grow: 1;
}

.simple-form__btn {
    flex-basis: 79px;
}
</style>
