<!-- global-bottom.vue -->
<template>
    <footer
        class="text-shadow-sm text-shadow-color-#000000 text-color-#ffffff op-25 absolute bottom-0 left-0 right-0 p-2 z-10 text-2"
    >
        Özyeğin University
        <span
            color-white
            op-40
            >•</span
        >
        COD 301 Design Studio III
        <span
            color-white
            op-40
            >•</span
        >
        Alp Tuğan, PhD

        <div
            v-if="$slidev.nav.currentLayout !== 'cover'"
            class="absolute bottom-1 w-8 text-2 right-1 p-1 z-99999999 bg-#000000aa rounded-md"
        >
            {{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}
        </div>
    </footer>
</template>
