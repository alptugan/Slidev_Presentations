<!-- Bir HTML sayfasını (p5 sketch ya da simülatör) slayta ölçekleyerek gömer.
     src göreli olmalı (ör. "sketches/01-basic-tree/index.html") ki GitHub Pages base yolu altında da çalışsın. -->
<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
    defineProps<{
        src: string;
        w?: number; // iframe'in gerçek genişliği (px)
        h?: number; // iframe'in gerçek yüksekliği (px)
        size?: number; // slaytta görünen genişlik (px)
        link?: boolean;
    }>(),
    { w: 800, h: 800, size: 360, link: true },
);

const k = computed(() => props.size / props.w);
</script>

<template>
    <div class="embed-frame inline-flex flex-col items-end gap-1">
        <div
            class="overflow-hidden rounded-md border border-white/15 bg-black/40"
            :style="{ width: `${size}px`, height: `${h * k}px` }"
        >
            <iframe
                :src="src"
                :width="w"
                :height="h"
                loading="lazy"
                :style="{ transform: `scale(${k})`, transformOrigin: '0 0', border: 0 }"
            />
        </div>
        <a
            v-if="link"
            :href="src"
            target="_blank"
            rel="noopener"
            class="text-xs opacity-70"
            >yeni sekmede aç ↗</a
        >
    </div>
</template>
