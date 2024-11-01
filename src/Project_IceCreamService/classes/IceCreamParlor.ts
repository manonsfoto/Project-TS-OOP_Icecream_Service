import IIceCreamService from "../interfaces/IIceCreamService";
import IceCreamFlavor from "./IceCreamFlavor";

class IceCreamParlor implements IIceCreamService {
  private flavorArr: IceCreamFlavor[] = [];
  private availableFlavorList: string[] = [];

  listFlavors(): string[] {
    let availableFlavorArr: IceCreamFlavor[] = [];
    availableFlavorArr = this.flavorArr?.filter(
      (iceCream: IceCreamFlavor) => iceCream.isInStock
    );

    this.availableFlavorList = availableFlavorArr.map(
      (iceCream: IceCreamFlavor) => iceCream.flavor
    );
    console.log(`Available flavors are ${this.availableFlavorList}`);

    return this.availableFlavorList;
  }

  renderList(element: HTMLElement) {
    element.innerHTML = "";
    this.flavorArr.forEach((iceCream: IceCreamFlavor) => {
      const divFlavor = document.createElement("div") as HTMLDivElement;
      divFlavor.setAttribute("class", "singleFlavorDiv");
      divFlavor.innerHTML = `${iceCream.flavor}`;
      element.appendChild(divFlavor);
    });
  }

  orderIceCream(flavor: string, scoops: number): string {
    if (this.availableFlavorList?.includes(flavor)) {
      const totalPrice = scoops * this.getFlavorPrice(flavor);

      console.log(
        `Your order is successfully confirmed! Flavor: ${flavor}, Scoops: ${scoops}
        Total Price: ${totalPrice} €`
      );

      return `Your order is successfully confirmed!🎉 Flavor: ${flavor}, Scoops: ${scoops}, Total Price: ${totalPrice} €`;
    } else {
      console.log(`Your order is NOT confirmed. 🥺`);
      return `Your order is NOT confirmed. 🥺`;
    }
  }

  addNewFlavor(flavor: string): void {
    const newFlavor = new IceCreamFlavor(flavor);
    const allFlavorList: string[] = this.flavorArr.map(
      (iceCream: IceCreamFlavor) => iceCream.flavor
    );
    if (flavor !== "") {
      if (!allFlavorList.includes(flavor)) {
        this.flavorArr?.push(newFlavor);
        console.log(`${flavor} is added to `, this.flavorArr);
      }
    }
  }

  removeFlavor(flavor: string): void {
    this.flavorArr?.forEach((iceCream: IceCreamFlavor, index) => {
      if (iceCream.flavor === flavor) {
        this.flavorArr?.splice(index, 1);
        console.log(`${flavor} is deleted from `, this.flavorArr);
      }
    });
  }

  isFlavorAvailable(flavor: string): boolean {
    this.listFlavors();
    console.log(this.availableFlavorList.includes(flavor));

    return this.availableFlavorList.includes(flavor);
  }

  getFlavorPrice(flavor: string): number {
    let flavorPrice: number = 0;
    this.flavorArr!.forEach((iceCream: IceCreamFlavor) => {
      if (iceCream.flavor === flavor) {
        flavorPrice = iceCream.price;
        console.log(`Price is ${flavorPrice} €.`);
      }
    });
    return flavorPrice;
  }
}
export default IceCreamParlor;
