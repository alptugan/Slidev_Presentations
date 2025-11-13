<template>
  <div
    v-if="$slidev.nav.currentLayout !== 'cover'"
    class="absolute top-0 w-14 text-3 right-0 p-2 pb-0 z-99999999 bg-black"
  >
    {{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}
</div>
</template>