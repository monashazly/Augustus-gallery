<script setup>

const props = defineProps({
    img: {
        type: Object
    }
})
</script>

<template>
    <div class="rounded-md overflow-hidden hover:scale-110 transition">
        <NuxtImg  class="w-full h-full" :src="img.url" :alt="img.title" />
    </div>
</template>