<template>
  <Layout>
    <div class="flex mt-12 mb-12">
      <div class="w-full">
        <span class="font-medium text-xl">Gallery</span>
        <hr />
        <div class="w-full flex flex-wrap mt-20">
          <div class="w-full md:w-1/3 mx-2 my-2" v-for="gallery in images" :key="gallery.id">
            <g-image :src="gallery.node.src" :alt="gallery.node.alt"></g-image>
          </div>
        </div>
      </div>
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
  },
  computed: {
    images() {
      return this.$page.gallery.edges;
    }
  }
};
</script>
<style  scoped>
</style>