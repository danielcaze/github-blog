import { api } from '../lib/api'

export async function handleSearch(search: string) {
  const { data } = await api.get(
    `search/issues?q=${encodeURIComponent(
      search,
    )}%20label:published%20repo:danielcaze/github-blog`,
  )
  return data
}
