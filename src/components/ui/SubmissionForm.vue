<script setup>
import InputCustom from '@/components/ui/InputCustom.vue';
import ButtonCustom from '@/components/ui/ButtonCustom.vue';

defineProps({
    placeholder: {
        type: String,
        default: '',
    },
    buttonText: {
        type: String,
        default: 'Send',
    },
    counter: {
        type: Number,
        default: 0,
    },
});
</script>

<template>
    <div class="submission-form">
        <InputCustom class="submission-form__input" :placeholder="placeholder"/>
        <div class="submission-form__footer">
            <var class="submission-form__counter">
                {{ counter }} recipients
            </var>
            <ButtonCustom class="submission-form__btn" @click="$emit('send')">
                {{ buttonText }}
            </ButtonCustom>
        </div>
    </div>
</template>

<style scoped>
.submission-form {
    display: flex;
    gap: 24px;
    flex-direction: column;
    align-items: flex-end;
}

.submission-form__input {
    width: 100%;
}

.submission-form__footer {
    display: flex;
    align-items: center;
    gap: 24px;
}

.submission-form__counter {
    color: var(--color-text-3);
    font-style: normal;
}

.submission-form__btn {
    width: 160px;
}
</style>
