<script setup>
import { store } from "../store.js"

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
    <div class="grid grid-cols-4">
        <NuxtLink v-for="album in albums" :key="album.id" 
        :to="{ name: 'details-id', params: { id: album.id } }">
            <AlbumGrid :album="album" />
        </NuxtLink>
    </div>
</template>
