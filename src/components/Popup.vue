<script>
import { reactive, ref } from 'vue';
import { uniqueNamesGenerator, names } from 'unique-names-generator';
import { Validator } from '@/utils/Validator';
import IconCross from '@/components/icons/IconCross.vue';
import InputCustom from '@/components/ui/InputCustom.vue';
import IconYahoo from '@/components/icons/IconYahoo.vue';
import IconGmail from '@/components/icons/IconGmail.vue';
import IconAol from '@/components/icons/IconAol.vue';
import IconIcloud from '@/components/icons/IconIcloud.vue';
import NewGuestForm from '@/components/ui/NewGuestForm.vue';
import SubmissionForm from '@/components/ui/SubmissionForm.vue';
import List from '@/components/List.vue';
import ListItem from '@/components/ListItem.vue';

const defaultElement = {
    value: 'example@email.com',
    name: 'Valeriy Zaluzhniy',
};

export default {
    components: {
        ListItem,
        List,
        SubmissionForm,
        NewGuestForm,
        IconIcloud,
        IconAol,
        IconGmail,
        IconYahoo,
        InputCustom,
        IconCross,
    },
    emits: ['close'],
    setup(props, { emit }) {
        const emails = reactive([defaultElement]);

        const hasError = ref(false);

        function validateEmail(value) {
            return Validator.checkEmail(value) && emails.every(email => email.value !== value);
        }

        function addEmail(value) {
            hasError.value = !validateEmail(value);

            if (value && !hasError.value) {
                emails.push({
                    value,
                    name: uniqueNamesGenerator({dictionaries: [names]}),
                });
            }
        }

        function removeEmail(index) {
            emails.splice(index, 1);
        }

        function send() {
            alert('Success!');
            emit('close');
            emails.splice(0, emails.length);
            emails.push(defaultElement);
        }

        function close() {
            emit('close');
        }

        return {
            emails,
            hasError,
            addEmail,
            removeEmail,
            send,
            close,
        };
    },
};
</script>

<template>
    <div class="popup">
        <header class="popup__header">
            <h2 class="popup__title">
                Invite others
                <IconCross class="popup__close" @click="close"/>
            </h2>
            <NewGuestForm
                placeholder="Enter people E-mails"
                buttonText="Add"
                :hasError="hasError"
                @send="addEmail"
            />
            <div class="popup__socials">
                or add from
                <div class="popup__social-icons">
                    <IconYahoo/>
                    <IconGmail/>
                    <IconAol/>
                    <IconIcloud/>
                </div>
            </div>
        </header>

        <div class="popup__body">
            <List>
                <ListItem
                    v-for="(email, index) in emails"
                    :key="email.value"
                    :email="email.value"
                    :name="email.name"
                    @delete="removeEmail(index)"
                />
            </List>
        </div>

        <footer class="popup__footer">
            <SubmissionForm
                placeholder="Personal message (optional)"
                :counter="emails.length"
                buttonText="Send"
                @send="send"
            />
        </footer>
    </div>
</template>

<style scoped>
.popup {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 3;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px 0;
    width: 598px;
    max-height: 776px;
    background-color: var(--color-background);
    border-radius: var(--border-radius);
}

.popup__header {
    width: 100%;
    padding: 0 24px;
}

.popup__close {
    cursor: pointer;
}

.popup__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    font-weight: 600;
    font-feature-settings: 'ss01' on; /* todo need to discuss */
    line-height: 32px;
}

.popup__socials {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 16px;
}

.popup__social-icons {
    display: flex;
    gap: 12px;
}

.popup__body {
    overflow-y: auto;
    width: 100%;
    border-top: 1px solid var(--color-border-2);
    border-bottom: 1px solid var(--color-border-2);
}

.popup__footer {
    width: 100%;
    padding: 0 24px;
}
</style>
