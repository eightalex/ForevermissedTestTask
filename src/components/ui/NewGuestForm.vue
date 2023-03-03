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
    <div class="new-guest-form">
        <InputCustom
            class="new-guest-form__input"
            type="email"
            v-model="value"
            :hasError="hasError"
            :placeholder="placeholder"
        />
        <ButtonCustom
            class="new-guest-form__btn"
            type="light"
            @click="send"
        >
            {{ buttonText }}
        </ButtonCustom>
    </div>
</template>

<style scoped>
.new-guest-form {
    display: flex;
    gap: 12px;
}

.new-guest-form__input {
    flex-grow: 1;
}

.new-guest-form__btn {
    flex-basis: 79px;
}
</style>
