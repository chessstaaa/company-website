export interface Review {
  objectId: string
  created: number
  name: string
  productName: string
  rating: number
  reviewDesc: string
  ownerId?: string | null
  updated?: number | null
  ___class: string
}