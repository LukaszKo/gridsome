<template>
  <Layout>
    <h1>Gallery</h1>
    <div
      class="image"
      v-for="gallery in $page.gallery.edges"
      :key="gallery.id"
    >
      <g-image
        :src="gallery.node.src"
        :alt="gallery.node.alt"
      >
      </g-image>
    </div>

  </Layout>
</template>

<page-query>
query Gallery {
  gallery: allGallery {
    edges {
      node {
        title,
        alt,
        src(width: 700, height: 200, quality: 90)
      }
    }
  }
}
</page-query>
<script>
export default {
  metaInfo: {
    title: "Gallery"
  }
};
</script>
<style  scoped>
  .image {
    margin: 200px;
  }
</style>