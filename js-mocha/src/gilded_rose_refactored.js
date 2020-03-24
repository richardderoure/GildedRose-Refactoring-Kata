class Item {
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

class Shop {
    constructor(items = []) {
        this.items = items;
    }
    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name == 'Aged Brie') {
                this.improve()
            } else if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
                this.backstage()
            } else if (this.items[i].name == 'Sulfuras, Hand of Ragnaros') {
                this.sulfuras()
            } else {
                this.degrade()
            }
            this.items[i].sellIn--;
        }
    }
    backstage() {
        this.improve()
        if (this.items[i].sellIn < 11) this.improve();
        if (this.items[i].sellIn < 6) this.improve();
        if (this.items[i].sellIn < 0) this.items[i].quality = 0;
    }
    sulfuras() {
        this.items[i].sellIn++;
    }
    degrade() {
        if (this.items[i].quality <= 50 && this.items[i].quality > 0) {
            let x = 1;
            if (this.items[i].sellIn < 0) x *= 2;
            if (this.items[i].conjured == true) x *= 2;
            this.items[i].quality -= x;
            if (this.items[i].quality < 0) this.items[i].quality = 0;
        }
    }
    improve() {
        if (this.items[i].quality < 50) this.items[i].quality++;
    }
}
module.exports = {
    Item,
    Shop
}