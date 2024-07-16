<script setup>

const props = defineProps({
    img: {
        type: String
    }
})
</script>

<template>
    <div class="rounded-md overflow-hidden hover:scale-110 transition">
        <NuxtImg  :src="img.url" :alt="img.title" />
    </div>
</template>