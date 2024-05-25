<script setup>
defineProps({
    icon: String,
    text: String,
    to: String
})
</script>
<template>
    <RouterLink :to="to" class="text-gray font-medium flex gap-1 items-center" activeClass="!text-primary !font-semibold">
        <v-icon :name="icon" />
        <span>{{ text }}</span>
    </RouterLink>
</template>