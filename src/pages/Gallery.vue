<template>
  <Layout>
    <h1>Gallery</h1>
    <!-- <div
      class="image"
      v-for="gallery in images"
      :key="gallery.id"
    >
      <g-image
        :src="gallery.node.src"
        :alt="gallery.node.alt"
      >
      </g-image>
    </div>
    <pre>{{images}}</pre> -->
    <div>
      <div class="image">
        <g-image src="../../static/uploads/download.png"></g-image>
      </div>
      <div class="image">
        <g-image src="../../static/uploads/download.png"></g-image>
      </div>
      <div class="image">
        <g-image src="../../static/uploads/user.png"></g-image>
      </div>
      <div class="image">
        <g-image src="../../static/uploads/user1.png"></g-image>
      </div>
      <div class="image">
        <g-image src="../../static/uploads/user2.png"></g-image>
      </div>
      <div class="image">
        <g-image src="../../static/uploads/user-male-icon.png"></g-image>
      </div>
      <div class="image">
        <g-image src="../../static/uploads/user-management-2x.png"></g-image>
      </div>
      <div class="image">
        <g-image src="../../static/uploads/man-300x300.png"></g-image>
      </div>
      <div class="image">
        <g-image src="../../static/uploads/download.png"></g-image>
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
  .image {
    margin: 400px;
  }
</style>