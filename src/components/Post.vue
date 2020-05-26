<template>
  <div class="w-full max-w-sm rounded overflow-hidden shadow-lg">
    <g-image src="~/assets/card-top.jpg" class="w-full"/>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{post.title}}</div>
      <p
        class="text-gray-700 text-base"
      >{{post.excerpt}}</p>
    </div>
    <div class="px-6 py-4">
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
      >#photography</span>
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
      >#travel</span>
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
      >#winter</span>
    </div>
  </div>
</template>
<script>
export default {
    props: ['post']
}
</script>