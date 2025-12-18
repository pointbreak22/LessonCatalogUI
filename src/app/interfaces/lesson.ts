export interface LessonReadDto {
  id: number;
  title: string;
  description: string;
  duration: number;
  createdAt: string;
}

export interface LessonCreateUpdateDto {
  title: string;
  description: string;
  duration: number;
}
