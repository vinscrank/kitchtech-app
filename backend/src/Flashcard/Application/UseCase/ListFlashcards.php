<?php

declare(strict_types=1);

namespace App\Flashcard\Application\UseCase;

use App\Flashcard\Application\Dto\FlashcardView;
use App\Flashcard\Domain\Repository\FlashcardRepository;

final class ListFlashcards
{
  public function __construct(private readonly FlashcardRepository $repository)
  {
  }

  public function execute(int $limit, int $offset): array
  {
    $data = [];

    foreach ($this->repository->findAll($limit, $offset) as $flashcard) {
      $data[] = FlashcardView::from($flashcard)->toArray();
    }

    return ['data' => $data];
  }
}
