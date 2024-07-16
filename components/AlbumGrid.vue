<script setup>
const props = defineProps({
    album: {
        type: Object
    }
})
</script>


<template>
    {{ album.title }}
</template>