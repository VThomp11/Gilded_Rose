const { Item, Shop } = require("../src/gilded_rose.js");

describe("Gilded Rose Pin Down Tests", () => {
  test("Normal items should degrade in quality by 1 each day", () => {
    let normalItem = new Item("normal", 10, 20); //build
    const gildedRose = new Shop([normalItem]);

    const items = gildedRose.updateQuality(); //operate

    expect(items[0].quality).toBe(19); //check
  });

  test('Quality of "Aged Brie" should increase by 1 each day', () => {
    let agedBrie = new Item("Aged Brie", 10, 20);
    const gildedRose = new Shop([agedBrie]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(21);
  });

  test('Quality of "Backstage passes" should increase by 3 when there are 5 days or less', () => {
    let backstagePass = new Item(
      "Backstage passes to a TAFKAL80ETC concert",
      5,
      20
    );
    const gildedRose = new Shop([backstagePass]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(23);
  });
});

describe('updateQuality', () => {
  test('should decrease quality and sellIn for regular item', () => {
    const regularItem = new Item('Regular Item', 5, 10);
    const shop = new Shop([regularItem]);

    shop.updateQuality();

    expect(regularItem.quality).toBe(9);
    expect(regularItem.sellIn).toBe(4);
  });

  test('should decrease quality and sellIn for regular item after sell-by date', () => {
    const regularItem = new Item('Regular Item', 0, 10);
    const shop = new Shop([regularItem]);

    shop.updateQuality();

    expect(regularItem.quality).toBe(8);
    expect(regularItem.sellIn).toBe(-1);
  });
  
  test('should not decrease quality below 0', () => {
    const regularItem = new Item('Regular Item', 5, 0);
    const shop = new Shop([regularItem]);

    shop.updateQuality();

    expect(regularItem.quality).toBe(0);
    expect(regularItem.sellIn).toBe(4);
  });

  test('should increase quality of Aged Brie as it ages', () => {
    const agedBrie = new Item('Aged Brie', 5, 10);
    const shop = new Shop([agedBrie]);

  shop.updateQuality();

  expect(agedBrie.quality).toBe(11);
  expect(agedBrie.sellIn).toBe(4);
    });

  test('The Quality of an item is never more than 50', () =>{
  const regularItem = new Item('Regular Item', 5, 10);
  expect(regularItem.quality).toBeLessThan(50)
  // expect(regularItem.quality(40)).toBe(true);
  // expect(regularItem.quality(60)).toBe(false);
  // expect(regularItem.quality(49)).toBe(true);
  // expect(regularItem.quality(50)).toBe(false); 
  });

  test('should not change quality of sellIn of Sulfuras', () => {
    const sulfuras = new Item('Sulfuras, Hand of Ragnaros', 1, 50)
    const shop = new Shop([sulfuras]);

    shop.updateQuality

    expect(sulfuras.quality).toBe(50)
    expect(sulfuras.sellIn).toBe(1)
  })
  
  test('should increase quality of Backstage Passes as it ages', () => {
    const backstagePass = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 10);
    const shop = new Shop([backstagePass]);

  shop.updateQuality();

  expect(backstagePass.quality).toBe(13);
  expect(backstagePass.sellIn).toBe(4);
    });


    test('should increase quality of Backstage Passes more as the concert date approaches rapidly', () => {
      const backstagePass = new Item('Backstage passes to a TAFKAL80ETC concert', 4, 10);
      const shop = new Shop([backstagePass]);

      shop.updateQuality();

      expect(backstagePass.quality).toBe(13);
      expect(backstagePass.sellIn).toBe(3);
    });

    test('should drop quality of Backstage Passes to 0 after the concert', () => {
      const backstagePass = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10);
      const shop = new Shop([backstagePass]);

      shop.updateQuality();

      expect(backstagePass.quality).toBe(0);
      expect(backstagePass.sellIn).toBe(-1);
    });

});