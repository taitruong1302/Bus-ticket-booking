export class Bill {
    billId: number
    totalPrice: number
    billStatus: string

    constructor(
        billId: number,
        totalPrice: number,
        billStatus: string,

    ){
        this.billId = billId
        this.totalPrice = totalPrice
        this.billStatus = billStatus
    }
}
