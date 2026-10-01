<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(
  defineProps<{
    title: string
    category?: string
    categoryType?: 'signal' | 'soundmark' | 'keynote' | 'biophony' | 'geophony' | 'anthrophony'
    location?: string
    description?: string
    src?: string
  }>(),
  {
    category: 'Field Sample',
    categoryType: 'signal',
    location: 'Kitchen / Domestic',
    description: '',
    src: ''
  }
)

const isPlaying = ref(false)
const audioElement = ref<HTMLAudioElement | null>(null)

function togglePlay() {
  if (props.src && audioElement.value) {
    if (isPlaying.value) {
      audioElement.value.pause()
    } else {
      // Pause any other playing audio on the slide
      document.querySelectorAll('audio').forEach((el) => {
        if (el !== audioElement.value && !el.paused) {
          el.pause()
        }
      })
      audioElement.value.play().catch((err) => {
        console.warn('Playback error:', err)
      })
    }
  } else {
    // Simulated toggle for visual cue
    isPlaying.value = !isPlaying.value
  }
}

function onEnded() {
  isPlaying.value = false
}

const badgeColor = {
  keynote: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-300 dark:border-slate-700',
  signal: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300 border-amber-300 dark:border-amber-700/50',
  soundmark: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300 border-indigo-300 dark:border-indigo-700/50',
  biophony: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700/50',
  geophony: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300 border-cyan-300 dark:border-cyan-700/50',
  anthrophony: 'bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300 border-rose-300 dark:border-rose-700/50',
}[props.categoryType || 'signal']
</script>

<template>
  <div class="audio-card my-3 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 shadow-sm backdrop-blur-md transition-all hover:shadow-md">
    <audio 
      v-if="src" 
      ref="audioElement" 
      :src="src" 
      @ended="onEnded"
      @pause="isPlaying = false"
      @play="isPlaying = true"
      preload="auto" 
    />
    
    <div class="flex items-center justify-between gap-4">
      <!-- Play / Pause Button -->
      <button 
        @click="togglePlay"
        class="w-11 h-11 shrink-0 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm focus:outline-none"
        :class="isPlaying ? 'bg-blue-600 text-white scale-105 shadow-blue-500/20' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-neutral-700'"
        :title="isPlaying ? 'Pause' : 'Play audio'"
      >
        <svg v-if="!isPlaying" class="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
        <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
        </svg>
      </button>

      <!-- Track Info -->
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-1 flex-wrap">
          <span class="text-[0.7rem] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full border" :class="badgeColor">
            {{ category }}
          </span>
          <span v-if="location" class="text-[0.72rem] text-neutral-500 dark:text-neutral-400 font-mono">
            📍 {{ location }}
          </span>
        </div>
        <h4 class="text-sm font-semibold text-neutral-900 dark:text-neutral-100 truncate m-0 leading-snug">
          {{ title }}
        </h4>
        <p v-if="description" class="text-xs text-neutral-500 dark:text-neutral-400 m-0 mt-0.5 line-clamp-1">
          {{ description }}
        </p>
      </div>

      <!-- Animated Waveform Visualizer simulation -->
      <div class="flex items-end gap-1 h-6 shrink-0 px-2" :class="{ 'opacity-40': !isPlaying }">
        <span class="w-1 bg-blue-500 rounded-full transition-all duration-150" :style="{ height: isPlaying ? '18px' : '6px', animation: isPlaying ? 'bounce 0.8s ease-in-out infinite alternate' : 'none' }"></span>
        <span class="w-1 bg-blue-500 rounded-full transition-all duration-150" :style="{ height: isPlaying ? '24px' : '10px', animation: isPlaying ? 'bounce 0.6s ease-in-out infinite 0.2s alternate' : 'none' }"></span>
        <span class="w-1 bg-blue-500 rounded-full transition-all duration-150" :style="{ height: isPlaying ? '14px' : '8px', animation: isPlaying ? 'bounce 0.9s ease-in-out infinite 0.1s alternate' : 'none' }"></span>
        <span class="w-1 bg-blue-500 rounded-full transition-all duration-150" :style="{ height: isPlaying ? '22px' : '12px', animation: isPlaying ? 'bounce 0.7s ease-in-out infinite 0.3s alternate' : 'none' }"></span>
        <span class="w-1 bg-blue-500 rounded-full transition-all duration-150" :style="{ height: isPlaying ? '10px' : '5px', animation: isPlaying ? 'bounce 0.5s ease-in-out infinite 0.15s alternate' : 'none' }"></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes bounce {
  0% { transform: scaleY(0.3); }
  100% { transform: scaleY(1); }
}
</style>
