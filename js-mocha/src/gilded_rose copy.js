class Item {
  constructor(name, sellIn, quality, conjured){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
    this.conjured = conjured;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {       // loops over all items
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {     //checks if it is not special item that increases quality
        if (this.items[i].quality > 0) {              //checks if quality is > 0 
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {       //checks if item is special Sulfuras (const quality = 80)
            this.items[i].quality = this.items[i].quality - 1;        //degreades quality by 1
          }
        }
      } else {
        if (this.items[i].quality < 50) { //checks if item is not legendary (regular items can't go above 50)
          this.items[i].quality = this.items[i].quality + 1; // increases quality 
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') { // if concert tickets and checks how much value to add
            if (this.items[i].sellIn < 11) {        //logic for backstage pass quality
              if (this.items[i].quality < 50) {   //logic for backstage pass quality
                this.items[i].quality = this.items[i].quality + 1;  //logic for backstage pass quality
              }
            }
            if (this.items[i].sellIn < 6) {       //logic for backstage pass quality
              if (this.items[i].quality < 50) {       //logic for backstage pass quality
                this.items[i].quality = this.items[i].quality + 1;      //logic for backstage pass quality
              }
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1; // Updates the sell in date 
      }
      if (this.items[i].sellIn < 0) { //Checking whether item has expired 
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].quality - 1; // Dergrades twice as fast
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality; //Expired concert
          }
        } else {
          if (this.items[i].quality < 50) { //Adding Quality to cheese
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}
