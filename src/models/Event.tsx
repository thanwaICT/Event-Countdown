export class EventResponse {
  id: string;
  title: string;
  description: string;
  targetDate: Date;
  categoryId: number;
  categoryName: string;
  imageUrl?: string | null;
  maxQueueSize?: number;

  constructor(response: {
    id: string;
    title: string;
    description: string;
    targetDate: Date;
    categoryId: number;
    categoryName: string;
    imageUrl: string | null;
    maxQueueSize: number;
  }) {
    this.id = response.id;
    this.title = response.title;
    this.description = response.description;
    this.targetDate = response.targetDate;
    this.categoryId = response.categoryId;
    this.categoryName = response.categoryName;
    this.imageUrl = response.imageUrl;
    this.maxQueueSize = response.maxQueueSize;
  }
}
