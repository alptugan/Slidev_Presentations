<template>
  <div
    v-if="$slidev.nav.currentLayout !== 'cover'"
    class="absolute bottom-0 left-50% right-0 p-2"
  >
    {{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}
</div>
</template>