<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext, useNav } from '@slidev/client'

const props = withDefaults(
  defineProps<{
    columns?: string | number
    showPageNumbers?: boolean
  }>(),
  {
    columns: 2,
    showPageNumbers: true,
  }
)

const { $slidev } = useSlideContext()
const { go } = useNav()

const items = computed(() => {
  const tree = $slidev?.nav.tocTree
  if (!tree) return []
  return tree.filter(item => {
    const title = (item.title || '').trim().toLowerCase()
    return !['table of contents', 'toc', 'contents', 'agenda', 'outline'].includes(title)
  })
})

function goTo(no?: number) {
  if (no != null) {
    go(no)
  }
}
</script>

<template>
  <div 
    class="slidev-toc w-full"
    :style="{ columnCount: columns, columnGap: '2.5rem' }"
  >
    <div 
      v-for="item in items" 
      :key="item.no"
      class="toc-row break-inside-avoid mb-[0.15rem]"
    >
      <a 
        :href="'#' + item.no"
        @click.prevent="goTo(item.no)"
        class="toc-entry flex items-baseline justify-between group py-0.5 text-neutral-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 no-underline transition select-none"
      >
        <span class="toc-title truncate text-[0.88rem] leading-tight font-normal group-hover:underline">
          {{ item.title }}
        </span>
        <span class="toc-leader flex-1 mx-2 border-b border-dotted border-neutral-300 dark:border-neutral-700 opacity-60"></span>
        <span class="toc-page-no font-mono text-[0.78rem] text-neutral-500 dark:text-neutral-400 font-semibold shrink-0 group-hover:text-blue-600 dark:group-hover:text-blue-400">
          {{ String(item.no).padStart(2, '0') }}
        </span>
      </a>

      <!-- Nested child items if any -->
      <div v-if="item.children && item.children.length > 0" class="pl-3">
        <div
          v-for="child in item.children"
          :key="child.no"
          class="mb-[0.1rem]"
        >
          <a 
            :href="'#' + child.no"
            @click.prevent="goTo(child.no)"
            class="toc-entry flex items-baseline justify-between group py-0.5 text-neutral-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 no-underline transition select-none"
          >
            <span class="toc-title truncate text-[0.82rem] leading-tight font-normal group-hover:underline">
              {{ child.title }}
            </span>
            <span class="toc-leader flex-1 mx-2 border-b border-dotted border-neutral-200 dark:border-neutral-800 opacity-50"></span>
            <span class="toc-page-no font-mono text-[0.75rem] text-neutral-500 dark:text-neutral-400 shrink-0">
              {{ String(child.no).padStart(2, '0') }}
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.toc-entry {
  cursor: pointer;
}
.toc-entry:hover .toc-leader {
  border-color: rgba(37, 99, 235, 0.4);
}
</style>
