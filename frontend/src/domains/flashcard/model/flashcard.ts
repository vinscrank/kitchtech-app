export type Flashcard = {
  id: string
  front: string
  back: string
}

export type FlashcardInput = {
  front: string
  back: string
}

export const flashcardKeys = {
  all: ['flashcards'] as const,
  list: (limit: number, offset: number) => ['flashcards', 'list', limit, offset] as const,
  detail: (id: string) => ['flashcards', 'detail', id] as const,
}
