export interface ITrip {
  trip_id: number;
  departureDate: Date;
  returningDate: Date;
  price: number;
  maxParticipants: number;
  spotsLeft: number;
  destination: IDestination;
  bookingList: any[];
}

export interface IDestination {
  destination_id: number;
  name: string;
  description: string;
  image: string | null;
  avgRating: number;
}
