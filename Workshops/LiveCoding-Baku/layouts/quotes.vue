<template>
    <div class="slidev-layout quotes h-full flex flex-col">
        <div
            class="flex-grow flex flex-col justify-center items-center text-center quote-content"
            :style="computedStyles"
        >
            <div class="quote-text">
                <slot />
            </div>
            <div
                class="quote-attribution"
                v-if="author || source"
            >
                <span
                    v-if="author"
                    class="quote-author"
                    >— {{ author }}</span
                >
                <span
                    v-if="source"
                    class="quote-source"
                    >{{ source }}</span
                >
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useFontSizeStyles } from "../utils/useFontSizeStyles";

defineProps<{
    /** Quote author name */
    author?: string;
    /** Quote source (book, year, etc.) */
    source?: string;
}>();

const computedStyles = useFontSizeStyles();
</script>

<style scoped>
.quote-text {
    max-width: 56rem;
    position: relative;
    font-style: italic;
    font-family: serif;
    margin-top: -5rem;
}

.quote-text :deep(h1) {
    @apply text-5xl font-200;
}

.quote-text::before {
    content: "\201C";
    display: block;
    font-size: 6rem;
    line-height: 2;
    color: #fff;
    opacity: 0.4;
    font-family: serif;
    margin-bottom: -3rem;
    text-align: center;
}

/* Does not effective WORK */
.quote-text :deep(p:first-child),
.quote-text :deep(blockquote) {
    font-size: 1.875rem;
    font-style: italic;
    line-height: 1.6;
    border-left: none;
    padding: 0 2rem;
    text-align: center;
    margin-bottom: 1.5rem;
}

.quote-attribution {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    margin-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.4);
    padding-top: 1.5rem;
    width: 60%;
}

.quote-author {
    opacity: 0.9;
    font-size: 1.25rem;
    font-weight: 400;
    color: #fff !important;
    margin-top: 10px;
}

.quote-source {
    opacity: 0.6;
    font-size: 1rem;
    font-style: italic;
    color: currentColor;
}
</style>
