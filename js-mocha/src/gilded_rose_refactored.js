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
            console.log('this is i: ' + i);
            if (this.items[i].name == 'Aged Brie') {
                improve(i)
            } else if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
                backstage(i)
            } else if (this.items[i].name == 'Sulfuras, Hand of Ragnaros') {
                sulfuras(i)
            } else {
                degrade(i)
            }           
        this.items[i].sellIn--;

        }
    }
    
}

function backstage(i) {
    console.log('this is backstage i: ' + i);

    improve(i)
    if (Shop.items[i].sellIn < 11) improve(i);
    if (Shop.items[i].sellIn < 6) improve(i);
    if (Shop.items[i].sellIn < 0) Shop.items[i].quality = 0;
}
function sulfuras(i) {
    console.log('this is sulfuras i: ' + i);
    Shop.items[i].sellIn++;
}
function degrade(i) {
    console.log('this is degrade i: ' + i);
    if (Shop.items[i].quality <= 50 && Shop.items[i].quality > 0) {
        let x = 1;
        if (Shop.items[i].sellIn < 0) x *= 2;
        if (Shop.items[i].conjured == true) x *= 2;
        Shop.items[i].quality -= x;
        if (Shop.items[i].quality < 0) Shop.items[i].quality = 0;
    }
}
function improve(i) {
    console.log('this is improve i: ' + i);
    if (Shop.items[i].quality < 50) Shop.items[i].quality++;
}

module.exports = {
    Item,
    Shop
}