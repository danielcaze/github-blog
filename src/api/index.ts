import { searchApi } from '../lib/api'

export async function handleSearch(search: string) {
  const { data } = await searchApi.get(
    `issues?q=${encodeURIComponent(search)}%20repo:danielcaze/github-blog`,
  )
  return data
}
