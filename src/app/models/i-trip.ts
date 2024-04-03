export interface ITrip {
  trip_id: number
  departureDate: string
  returningDate: string
  price: number
  maxParticipants: number
  spotsLeft: number
  destination: IDestination
}

export interface IDestination {
  destination_id: number
  name: string
  description: string
  longDescription: string
  image: string
  avgRating: number
}

export interface IBookingList {
  booking_id: string
  bookingTime: string
  participantsNumber: number
  totalCost: number
  bookingStatus: string
}
