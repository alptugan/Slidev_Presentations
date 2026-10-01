<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'
import VideoFrame from '../components/VideoFrame.vue'

const props = withDefaults(
  defineProps<{
    video?: string
    videoUrl?: string
    url?: string
    title?: string
    subtitle?: string
    caption?: string
    preview?: string
    poster?: string
    aspect?: string
    frontmatter?: Record<string, any>
  }>(),
  {
    aspect: '16/9',
  }
)

const { $frontmatter } = useSlideContext()

const displayTitle = computed(() => {
  return props.title || props.frontmatter?.title || $frontmatter?.title || ''
})

const videoLink = computed(() => {
  return (
    props.video ||
    props.videoUrl ||
    props.url ||
    props.frontmatter?.video ||
    props.frontmatter?.videoUrl ||
    props.frontmatter?.url ||
    $frontmatter?.video ||
    $frontmatter?.videoUrl ||
    $frontmatter?.url ||
    ''
  )
})

// Extract YouTube ID from various YouTube URL formats or direct IDs
const youtubeId = computed(() => {
  const src = videoLink.value
  if (!src) return undefined
  const regExp = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/
  const match = src.match(regExp)
  if (match && match[1]) {
    return match[1]
  }
  if (/^[\w-]{11}$/.test(src.trim())) {
    return src.trim()
  }
  return undefined
})

// Auto poster thumbnail from YouTube if not explicitly provided
const videoPreview = computed(() => {
  return (
    props.preview ||
    props.poster ||
    props.frontmatter?.preview ||
    props.frontmatter?.poster ||
    $frontmatter?.preview ||
    $frontmatter?.poster ||
    (youtubeId.value ? `https://img.youtube.com/vi/${youtubeId.value}/hqdefault.jpg` : undefined)
  )
})

const displaySubtitle = computed(() => {
  return props.subtitle || props.frontmatter?.subtitle || $frontmatter?.subtitle || ''
})

const videoCaption = computed(() => {
  return props.caption || props.frontmatter?.caption || $frontmatter?.caption || ''
})
</script>

<template>
  <div class="slidev-layout video-single w-full h-full flex flex-col justify-center">
    <!-- Single Column on Top: Slide Title & Optional Subtitle -->
    <div v-if="displayTitle || displaySubtitle" class="w-full mb-5 shrink-0">
      <h1 v-if="displayTitle" class="text-3xl font-bold text-neutral-900 dark:text-white leading-tight m-0">
        {{ displayTitle }}
      </h1>
      <h3 v-if="displaySubtitle" class="text-base font-medium opacity-75 mt-1 text-neutral-600 dark:text-neutral-300 m-0">
        {{ displaySubtitle }}
      </h3>
    </div>

    <!-- Two Separate Columns Underneath the Title -->
    <div class="grid grid-cols-12 gap-8 items-center w-full">
      <!-- Left Column: Text & Content -->
      <div class="col-span-5 flex flex-col justify-center">
        <div class="video-content space-y-3" :class="{ 'has-display-title': !!displayTitle }">
          <slot />
        </div>
      </div>

      <!-- Right Column: Embedded Video Player -->
      <div class="col-span-7 flex flex-col justify-center">
        <VideoFrame
          :id="youtubeId"
          :src="youtubeId ? undefined : videoLink"
          :preview="videoPreview"
          :title="displayTitle"
          :caption="videoCaption"
          :aspect="aspect"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.video-content :deep(h2),
.video-content :deep(h3) {
  margin-top: 0;
  margin-bottom: 0.5rem;
  opacity: 0.75;
}

.has-display-title :deep(h1:first-child) {
  display: none;
}
</style>


