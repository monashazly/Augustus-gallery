<script setup>
const props = defineProps({
    album: {
        type: Object
    }
})
</script>


<template >
    <div class="bg-white rounded-md">
        {{ album.title }}
    </div>
</template>