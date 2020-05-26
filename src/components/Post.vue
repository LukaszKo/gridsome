<template>
  <div class="w-full max-w-sm rounded overflow-hidden shadow-lg">
    <g-image :src="post.image" class="w-full" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{post.title}}</div>
      <p class="text-gray-700 text-base">{{post.excerpt}}</p>
    </div>
    <div class="flex flex-wrap px-6 py-4 items-center">
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
      >#photography</span>
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
      >#travel</span>
      <g-link :to="post.path">
        <button
          class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >Preview</button>
      </g-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ["post"]
};
</script>