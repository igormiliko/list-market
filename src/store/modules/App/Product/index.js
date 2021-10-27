export default class Product {
    constructor(id, productName, type, expectedPrice){
        this.id = id
        this.productName = productName
        this.type = type
        this.expectedPrice = expectedPrice
        this.inMarket = {}
    }
}