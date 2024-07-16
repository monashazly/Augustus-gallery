<script setup>

const props = defineProps({
    img: {
        type: Object
    }
})
</script>

<template>
    <div class="rounded-md overflow-hidden hover:scale-105 transition shadow-md">
        <NuxtImg  class="w-full h-full" :src="img.url" :alt="img.title" />
    </div>
</template>