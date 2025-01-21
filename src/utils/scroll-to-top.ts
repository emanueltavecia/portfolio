import { useEffect } from 'react'

export function scrollToTop(smooth?: ScrollBehavior): void {
  window.scrollTo({
    top: 0,
    behavior: smooth,
  })
}

export function useScrollToTopOnPageLoad(): void {
  useEffect(() => {
    scrollToTop('instant')
  }, [])
}
