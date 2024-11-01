class IceCreamFlavor {
  private _flavor: string;
  private _price: number;
  private _isInStock: boolean;
  private _orderCounter: number;

  get flavor() {
    return this._flavor;
  }

  set flavor(value: string) {
    this._flavor = value;
  }

  get price() {
    return this._price;
  }

  get isInStock() {
    return this._isInStock;
  }

  set isInStock(value: boolean) {
    this._isInStock = value;
  }
  get orderCounter() {
    return this._orderCounter;
  }

  set orderCounter(value: number) {
    this._orderCounter = value;
  }

  constructor(flavor: string) {
    this._flavor = flavor;
    this._price = this.generatePrice();
    this._isInStock = true;
    this._orderCounter = 0;
  }

  private generatePrice(): number {
    const randomPrice = Math.ceil(Math.random() * 4) + 2;
    // price range : 3€ - 6€
    return randomPrice;
  }
}

export default IceCreamFlavor;
