<script setup>
import { store } from "../store.js"

const route = useRoute();
const id = route.params.id
const photos = ref([])

photos.value =  store.albums.find((album)=> album.id === id )

console.log('pghots' , photos)

</script>

<template >
    <div class="bg-black py-20">
        <h1 class="text-center text-white text-8xl font-bold ">
            PHOTO GALLERY  
        </h1>
        <h5 class="text-center text-white text-xl font-bold mt-5" >
            {{ photos.title  }}
        </h5>
    </div>
    <div class="  grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 p-10">
       <ImgCard v-for="img in photos.photos.data" :key="img.id" :img="img"/>
    </div>
</template>