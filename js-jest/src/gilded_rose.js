class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateBreeItem(item) {
    if (item.quality < 50) {
    item.quality++;
    }
    item.sellIn--;
    if (item.sellIn < 0 && item.quality < 50) {
      item.quality++;
  }
}

  updateBackstagePassItem(item) {
    if (item.quality < 50) {
      item.quality++;
      if (item.sellIn < 11 && item.quality < 50) {
        item.quality++;
      }
      if (item.sellIn < 6 && item.quality < 50) {
        item.quality++;
      }
    }
  }

  updateRegularItem(item) {
    if (item.quality > 0) {
      item.quality--;
    }
    item.sellIn--;
    if (item.sellIn < 0 && item.quality > 0) {
      item.quality--;
    }
  }


  updateQuality() {
    for (let item of this.items) {
      const isAgedBreeItem = (item.name === 'Aged Brie');
      const isBackstagePassItem = (item.name === 'Backstage passes to a TAFKAL80ETC concert');
      const isSulfurasItem =(item.name === 'Sulfuras, Hand of Ragnaros');

      if (isAgedBreeItem){
        this.updateBreeItem(item);
      } else if (isBackstagePassItem) {
        this.updateBackstagePassItem(item);
      }
      else if (!isSulfurasItem) {
        this.updateRegularItem(item);
      }
      }
    }
  }





  // updateQuality() {
  //   for (let item of this.items) {
  //     if (item.name !== 'Aged Brie' && item.name !== 'Backstage passes to a TAFKAL80ETC concert') {
  //       if (item.quality > 0 && item.name !== 'Sulfuras, Hand of Ragnaros') {
  //         item.quality--;
  //       }
  //     } else {
  //       if (item.quality < 50) {
  //         item.quality++;
  //         if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
  //           if (item.sellIn < 11 && item.quality < 50) {
  //             item.quality++;
  //           }
  //           if (item.sellIn < 6 && item.quality < 50) {
  //             item.quality++;
  //           }
  //         }
  //       }
  //     }
  //     if (item.name !== 'Sulfuras, Hand of Ragnaros') {
  //       item.sellIn--;
  //     }
  //     if (item.sellIn < 0) {
  //       if (item.name !== 'Aged Brie' && item.name !== 'Backstage passes to a TAFKAL80ETC concert') {
  //         if (item.quality > 0 && item.name !== 'Sulfuras, Hand of Ragnaros') {
  //           item.quality--;
  //         }
  //       } else {
  //         item.quality = 0;
  //       }
  //     }
  //   }
  //   return this.items;
  // }
// }

module.exports = {
  Item,
  Shop
}