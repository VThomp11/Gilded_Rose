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
  isBackstagePassItem(item) {
    return item.name === 'Backstage passes to a TAFKAL80ETC concert';
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

  isSulfurasItem(item) {
    return item.name === 'Sulfuras, Hand of Ragnaros';
  }
  isConjuredItem(item) {
    return item.name === 'Conjured Mana Cake';
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
      const isAgedBreeItem(item) {
        return item.name === 'Aged Brie';
      }
      if (item.name === 'Aged Brie'){
        this.updateBreeItem(item);
      } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
        this.updateBackstagePassItem(item);
      }
      else if (item.name === 'Sulfuras, Hand of Ragnaros') {
        this.isSulfurasItem(item);
      }
      else if {item.name
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