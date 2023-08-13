export class Seat {
    seatId:number
    seatNo: string
    seatPrice: number

    constructor(
        seatId:number,
        seatNo: string,
        seatPrice: number
    ){
        this.seatId = seatId
        this.seatNo = seatNo
        this.seatPrice = seatPrice
    }
}
