<script setup lang="ts">
import { computed } from "vue";
import { handleBackground } from "../utils/layoutHelper";

const props = defineProps({
    image: {
        type: String,
    },
});
const style = computed(() => handleBackground(props.image));
</script>

<template>
    <div
        class="slidev-layout w-full h-full image-to"
        :style="style"
    >
        <slot />
    </div>
</template>

<style scoped>
.image-to :deep(*) {
    color: currentColor !important;
    text-shadow: 2px 2px 15px black;
    opacity: 1 !important;
}

.image-to {
    @apply h-full;
}

.image-to :deep(h1) {
    @apply text-6xl font-700 leading-20;
}

.image-to :deep(h1 + p) {
    @apply font-700 -mt-4 text-2xl;
}
</style>
