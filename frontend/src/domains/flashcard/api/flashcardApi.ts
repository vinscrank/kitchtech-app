import { api } from '../../../shared/api/client'
import type { Flashcard, FlashcardInput } from '../model/flashcard'

export const flashcardApi = {
  list: (limit: number, offset: number) => {
    const params = new URLSearchParams({
      limit: String(limit),
      offset: String(offset),
    })

    return api<{ data: Flashcard[] }>(`/flashcards?${params}`).then((body) => body.data)
  },
  get: (id: string) => api<{ data: Flashcard }>(`/flashcards/${id}`).then((body) => body.data),
  create: (input: FlashcardInput) =>
    api<{ data: Flashcard }>('/flashcards', { method: 'POST', body: JSON.stringify(input) }).then((body) => body.data),
  update: (id: string, input: FlashcardInput) =>
    api<{ data: Flashcard }>(`/flashcards/${id}`, { method: 'PUT', body: JSON.stringify(input) }).then((body) => body.data),
  remove: (id: string) => api<void>(`/flashcards/${id}`, { method: 'DELETE' }),
}
