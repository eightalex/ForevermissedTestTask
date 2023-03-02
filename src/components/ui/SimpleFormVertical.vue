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
    <div class="simple-form-vertical">
        <InputCustom class="simple-form-vertical__input" :placeholder="placeholder"/>
        <div class="simple-form-vertical__footer">
            <var class="simple-form-vertical__counter">
                4 recipients
            </var>
            <ButtonCustom class="simple-form-vertical__btn">
                <slot>Send</slot>
            </ButtonCustom>
        </div>
    </div>
</template>

<style scoped>
.simple-form-vertical {
    display: flex;
    gap: 24px;
    flex-direction: column;
    align-items: flex-end;
}

.simple-form-vertical__input {
    width: 100%;
}

.simple-form-vertical__footer {
    display: flex;
    align-items: center;
    gap: 24px;
}

.simple-form-vertical__counter {
    color: var(--color-text-3);
    font-style: normal;
}

.simple-form-vertical__btn {
    width: 160px;
}
</style>
