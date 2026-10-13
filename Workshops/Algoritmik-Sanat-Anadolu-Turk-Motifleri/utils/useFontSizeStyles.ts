import { computed, type Ref, unref } from 'vue'
import { useSlideContext } from '@slidev/client'

const normalizeFontSize = (value: unknown): string | null => {
  if (value === null || value === undefined) return null
  if (typeof value === 'number' && Number.isFinite(value)) {
    return `${value}px`
  }
  if (typeof value === 'string') {
    const trimmed = value.trim()
    if (!trimmed) return null
    const numeric = Number(trimmed)
    if (!Number.isNaN(numeric)) {
      return `${numeric}px`
    }
    return trimmed
  }
  return null
}

export function useFontSizeStyles(baseFontSize?: Ref<string> | string) {
  const { $slidev } = useSlideContext()

  return computed(() => {
    const styles: Record<string, string> = {}

    const fontSize = unref(baseFontSize)
    if (fontSize) {
      styles.fontSize = fontSize
    }

    const frontmatter = ($slidev?.nav?.currentSlideRoute?.meta?.slide as any)?.frontmatter
    const globalConfig = ($slidev?.configs as any) || {}

    const localFontsize = frontmatter?.fontsize
    const globalFontsize = globalConfig?.fontsize

    const getSize = (key: string) => {
      if (localFontsize && typeof localFontsize === 'object') {
        const local = normalizeFontSize(localFontsize[key])
        if (local) return local
      }
      if (globalFontsize && typeof globalFontsize === 'object') {
        const global = normalizeFontSize(globalFontsize[key])
        if (global) return global
      }
      return null
    }

    const h1Size = getSize('h1')
    const h2Size = getSize('h2')
    const h3Size = getSize('h3')

    if (h1Size) styles['--scholarly-h1-size'] = h1Size
    if (h2Size) styles['--scholarly-h2-size'] = h2Size
    if (h3Size) styles['--scholarly-h3-size'] = h3Size

    return styles
  })
}