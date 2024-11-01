interface IIceCreamService {
  listFlavors: () => string[];
  orderIceCream: (flavor: string, scoops: number) => string;
  addNewFlavor: (flavor: string) => void;
  removeFlavor: (flavor: string) => void;
  isFlavorAvailable: (flavor: string) => boolean;
  getFlavorPrice: (flavor: string) => number;
}

export default IIceCreamService;
