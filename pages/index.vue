<script setup>
const query = gql`
  query FetchAlbums {
  albums {
    data {
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
</script>

<template>
    <div>
        {{ data.albums.data }}
    </div>
</template>

<style scoped></style>