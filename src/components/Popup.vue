<template>
    <div class="popup">
        <header class="popup__header">
            <h2 class="popup__title">
                Invite others
                <IconCross class="popup__close"/>
            </h2>
            <SimpleForm placeholder="Enter people E-mails">Add</SimpleForm>
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
                <ListItem>
                    example@email.com
                    <template #name>Valeriy Zaluzhniy</template>
                </ListItem>
                <ListItem>
                    example@email.com
                    <template #name>Valeriy Zaluzhniy</template>
                </ListItem>
                <ListItem>
                    example@email.com
                    <template #name>Valeriy Zaluzhniy</template>
                </ListItem>
                <ListItem>
                    example@email.com
                    <template #name>Valeriy Zaluzhniy</template>
                </ListItem>
                <ListItem>
                    example@email.com
                    <template #name>Valeriy Zaluzhniy</template>
                </ListItem>
                <ListItem>
                    example@email.com
                    <template #name>Valeriy Zaluzhniy</template>
                </ListItem>
                <ListItem>
                    example@email.com
                    <template #name>Valeriy Zaluzhniy</template>
                </ListItem>
                <ListItem>
                    example@email.com
                    <template #name>Valeriy Zaluzhniy</template>
                </ListItem>
                <ListItem>
                    example@email.com
                    <template #name>Valeriy Zaluzhniy</template>
                </ListItem>
                <ListItem>
                    example@email.com
                    <template #name>Valeriy Zaluzhniy</template>
                </ListItem>
            </List>
        </div>

        <footer class="popup__footer">
            <SimpleFormVertical placeholder="Personal message (optional)">Send</SimpleFormVertical>
        </footer>
    </div>
</template>

<script>
import IconCross from '@/components/icons/IconCross.vue';
import InputCustom from '@/components/ui/InputCustom.vue';
import IconYahoo from '@/components/icons/IconYahoo.vue';
import IconGmail from '@/components/icons/IconGmail.vue';
import IconAol from '@/components/icons/IconAol.vue';
import IconIcloud from '@/components/icons/IconIcloud.vue';
import SimpleForm from '@/components/ui/SimpleForm.vue';
import SimpleFormVertical from '@/components/ui/SimpleFormVertical.vue';
import List from '@/components/List.vue';
import ListItem from '@/components/ListItem.vue';

export default {
    name: 'Popup',
    components: {
        ListItem,
        List, SimpleFormVertical, SimpleForm, IconIcloud, IconAol, IconGmail, IconYahoo, InputCustom, IconCross},
};
</script>

<style scoped>
.popup {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 2;
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
