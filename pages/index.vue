<script setup>
import { store } from "../store.js"

useHead({
    title: 'Gallery'
})

const query = gql`
query FetchAlbums {
  albums {
    data {
      id,
      title
      photos {
        data {
          url,
          id,
          title,
          thumbnailUrl
        }
      }
    }
  }
}

`
const { data } = await useAsyncQuery(query)
const albums = ref(data.value.albums.data)
store.albums = albums.value

</script>

<template>
    <div class=" bg-black p-10">
        <h1 class="text-center text-white text-8xl font-bold py-20">
            GALLERY
        </h1>
        <div class="grid grid-cols-4 gap-5">
            <NuxtLink v-for="album in albums" 
            :key="album.id" :to="{ name: 'details-id', params: { id: album.id } }">
                <AlbumGrid 
                class="hover:scale-110 transition"
                :album="album" />
            </NuxtLink>
        </div>
    </div>
</template>
