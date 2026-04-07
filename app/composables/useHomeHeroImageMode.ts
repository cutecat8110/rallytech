export function useHomeHeroImageMode() {
  const mode = useHomePageImageMode()
  return {
    ...mode,
    hasLatestCandidate: mode.hasAnyLatestCandidate
  }
}
