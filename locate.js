var where = require('where');
var shops = require("./speedwayShops.json");


var numberofobjects = Object.keys(shops.NewYork).length;


var data=[];
for (var x = 0; x < numberofobjects; x++) {

    var fixedLocation = new where.Point(40.707312, -74.011934); //New York Stock Exchange
    var locationY = new where.Point(shops.NewYork[x].geo_location.latitude, shops.NewYork[x].geo_location.longitude);
    const calulatedDistance = (fixedLocation.distanceTo(locationY)) / 1.6;
    data.push(
        {
            "calculatedTempDistanceinMiles": calulatedDistance,
            "optionInfo": {
                "key": shops.NewYork[x].shopname,
                "synonyms": shops.NewYork[x].shopname
            },
            "title": shops.NewYork[x].shopname,
            "description": shops.NewYork[x].address + " - " + calulatedDistance + " Miles",
            "image": {
                "url": shops.NewYork[x].ShopImage.url,
                "accessibilityText": shops.NewYork[x].shoptitle
            }
        }

    );
}
data.sort(function(a, b) {
    return parseFloat(a.calculatedTempDistanceinMiles) - parseFloat(b.calculatedTempDistanceinMiles);
});

module.exports =data;









