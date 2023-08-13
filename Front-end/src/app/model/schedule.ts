import { Bus } from "./bus"
import { Seat } from "./seat"

export class Schedule {
    scheduleId:number
    startTime: string
    endTime: string
    totalSeat: number
    seatLeft: number
    startDate: number
    departure: string
    destinations: string
    seats: Array<Seat>
    bus: Bus

    constructor(
        scheduleId:number,
        startTime: string,
        endTime: string,
        totalSeat: number,
        seatLeft: number,
        startDate: number,
        departure: string,
        destinations: string,
        seats: Array<Seat>,
        bus: Bus
    ){
        this.scheduleId = scheduleId
        this.startTime = startTime
        this.endTime = endTime
        this.totalSeat = totalSeat
        this.seatLeft = seatLeft
        this.startDate = startDate
        this.departure = departure
        this.destinations = destinations
        this.seats = seats
        this.bus = bus
    }
}
