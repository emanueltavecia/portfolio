export const getRepoName = (
  repoName?: string | { frontend?: string; backend?: string },
) => {
  if (!repoName) return undefined
  if (typeof repoName === 'string') return repoName
  return repoName.frontend || repoName.backend
}
