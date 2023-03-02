<script setup>
import { ref, nextTick } from 'vue';
import InputCustom from '@/components/ui/InputCustom.vue';
import ButtonCustom from '@/components/ui/ButtonCustom.vue';

const props = defineProps({
    placeholder: {
        type: String,
        default: '',
    },
    buttonText: {
        type: String,
        default: 'Add',
    },
    hasError: {
        type: Boolean,
        default: false,
    },
});

const value = ref('');
const emit = defineEmits(['send']);

const send = async () => {
    emit('send', value.value);

    await nextTick();

    if (value.value && !props.hasError) {
        value.value = '';
    }
};
</script>

<template>
    <div class="simple-form">
        <InputCustom
            class="simple-form__input"
            type="email"
            v-model="value"
            :hasError="hasError"
            :placeholder="placeholder"
        />
        <ButtonCustom
            class="simple-form__btn"
            type="light"
            @click="send"
        >
            {{ buttonText }}
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
