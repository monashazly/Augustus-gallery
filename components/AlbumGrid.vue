<script setup>
const props = defineProps({
    album: {
        type: Object
    }
})
</script>


<template >
    <div class=" text-lg bg-[#1D1F26] rounded-lg border border-[#383D48] p-6 text-white text-center min-h-36">
        {{ album.title }}
    </div>
</template>