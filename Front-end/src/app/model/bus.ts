export class Bus {
    busId: number
    name: string
    seat: number

    constructor(
        busId: number,
        name: string,
        seat: number,
    ){
        this.busId = busId
        this.name = name
        this.seat = seat
    }
}
