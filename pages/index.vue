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
    <div class="bg-white">
        <div class="bg-[url('/gallery.png')] bg-cover shadow-xl">
            <div class=" text-center backdrop-blur-xl py-20 text-[#838383] font-bold ">
                <h1 class=" md:text-8xl text-5xl ">
                    GALLERY
                </h1>
                <h5 class="text-3xl">Albums</h5>
            </div>
        </div>
        <div class="grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 p-10">
            <NuxtLink v-for="album in albums" :key="album.id" :to="{ name: 'details-id', params: { id: album.id } }">
                <AlbumGrid class="hover:scale-110 transition shadow-md" :album="album" />
            </NuxtLink>
        </div>
    </div>
</template>
