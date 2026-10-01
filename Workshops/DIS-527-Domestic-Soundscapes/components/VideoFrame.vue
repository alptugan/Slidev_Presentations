<script setup lang="ts">
import { ref, computed } from 'vue'

const props = withDefaults(
  defineProps<{
    id?: string
    src?: string
    poster?: string
    preview?: string
    title?: string
    caption?: string
    href?: string
    autoplay?: boolean
    aspect?: string
  }>(),
  {
    autoplay: true,
    aspect: '16/9',
  }
)

const isPlaying = ref(false)

const computedPoster = computed(() => {
  if (props.poster) return props.poster
  if (props.preview) return props.preview
  if (props.id) return `https://img.youtube.com/vi/${props.id}/hqdefault.jpg`
  return ''
})

const computedHref = computed(() => {
  if (props.href) return props.href
  if (props.id) return `https://www.youtube.com/watch?v=${props.id}`
  if (props.src) return props.src
  return '#'
})

const embedUrl = computed(() => {
  if (props.id) {
    const autoParam = props.autoplay ? '1' : '0'
    return `https://www.youtube-nocookie.com/embed/${props.id}?autoplay=${autoParam}&rel=0`
  }
  return ''
})

function play() {
  isPlaying.value = true
}
</script>

<template>
  <div 
    class="video-frame-container relative w-full overflow-hidden rounded-2xl border border-black/10 dark:border-white/15 shadow-2xl bg-neutral-900 group"
    :style="{ aspectRatio: aspect }"
  >
    <!-- Live Video Player when activated -->
    <template v-if="isPlaying">
      <iframe
        v-if="id"
        :src="embedUrl"
        class="w-full h-full border-0"
        title="Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      />
      <video
        v-else-if="src"
        :src="src"
        class="w-full h-full object-cover"
        controls
        autoplay
      />
    </template>

    <!-- Preview Frame / Poster with Play Button -->
    <template v-else>
      <img
        v-if="computedPoster"
        :src="computedPoster"
        :alt="title || 'Video preview frame'"
        class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div 
        v-else 
        class="w-full h-full flex items-center justify-center bg-neutral-900 text-neutral-500"
      >
        <span>Video Preview</span>
      </div>

      <!-- Vignette Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 transition-opacity duration-300 group-hover:opacity-90 pointer-events-none" />

      <!-- Center Play Button -->
      <button
        type="button"
        @click="play"
        class="absolute inset-0 m-auto w-18 h-18 rounded-full bg-red-600/90 hover:bg-red-600 text-white flex items-center justify-center shadow-2xl backdrop-blur-md border border-white/20 transition-all duration-300 ease-out group-hover:scale-115 active:scale-95 cursor-pointer z-10"
        aria-label="Play video"
      >
        <svg class="w-8 h-8 ml-1 fill-current" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>

      <!-- Bottom Metadata Bar -->
      <div class="absolute bottom-0 inset-x-0 p-4 sm:p-5 flex items-end justify-between z-10 pointer-events-none">
        <div class="max-w-[80%]">
          <div v-if="title" class="text-lg sm:text-xl font-bold text-white tracking-tight drop-shadow-md">
            {{ title }}
          </div>
          <div v-if="caption" class="text-xs sm:text-sm text-gray-200 mt-1 line-clamp-2 drop-shadow-sm font-light">
            {{ caption }}
          </div>
        </div>

        <div class="flex items-center gap-2 pointer-events-auto">
          <!-- External Link Button -->
          <a
            :href="computedHref"
            target="_blank"
            class="px-3 py-1.5 rounded-lg bg-black/60 hover:bg-black/85 text-xs text-white/90 hover:text-white border border-white/20 backdrop-blur-md flex items-center gap-1.5 transition no-underline shadow-lg"
            title="Open in new tab"
          >
            <span>Open</span>
            <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7z" />
            </svg>
          </a>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.video-frame-container {
  will-change: transform;
}
</style>
