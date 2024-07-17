<script setup>

const props = defineProps({
    img: {
        type: Object
    }
})


const addPlaceHolder = (id) => {
    const loader = document.getElementById('loader' + id)
    const placeholder = document.getElementById('placeholder' + id)

    if (loader) {
        loader.classList.add('hidden');
    }
    if (placeholder) {

        placeholder.classList.remove('hidden');
        placeholder.classList.add('block');
    }

}

const disableLoader = (id) => {
    const loader = document.getElementById('loader' + id)
    const element = document.getElementById('img' + id)

    if (element) {
        element.classList.remove('hidden');
        element.classList.add('block');
    }
    if (loader) {
        loader.classList.add('hidden');
    }

}

</script>

<template>
    <div class=" rounded-md overflow-hidden hover:scale-105 transition shadow-md aspect-square  ">
        <NuxtImg class="w-full h-full hidden" :src="img.url" :alt="img.title" @load="disableLoader(img.id)"
            @error="addPlaceHolder(img.id)" :id="'img' + img.id" />
        <div class="bg-slate-200 animate-pulse w-full  aspect-square  " :id="'loader' + img.id">
        </div>
        <NuxtImg src="/placeholder.png" class="h-full w-full hidden" :id="'placeholder'+img.id "/>
        <!-- i tried to add thumbnail instead of placeholder but it also takes too much time to render same as the normal photo -->
    </div>
</template>