import { Seat } from "./seat"

export class GetInfo {
    billId: number
    startDate: string
    startTime: string
    seatNumber: Array<Seat>
    price: number
    destination: string
    departure: string
    status: string
    userName: string
    userPhone: string
    busName: string

    constructor(
        billId: number,
        startDate: string,
        startTime: string,
        seatNumber: Array<Seat>,
        price: number,
        destination: string,
        departure: string,
        status: string,
        userName: string,
        userPhone: string,
        busName: string
    ) {
        this.billId = billId
        this.startDate = startDate
        this.startTime = startTime
        this.seatNumber = seatNumber
        this.price = price
        this.destination = destination
        this.departure = departure
        this.status = status
        this.userName = userName
        this.userPhone = userPhone
        this.busName = busName
    }
}
