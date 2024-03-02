var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// making a array of countries and print its orginal order
var countriesToVisit = ["China", "Brazil", "Argentina", "Denmark"];
console.log("orginal order;", countriesToVisit);
// print the array in alphabetical order without modifying the Actual array list
console.log("Alphabetical order;", __spreadArray([], countriesToVisit, true).sort());
// show yhat the array is still in its orginal order
console.log("still in otginal order:", countriesToVisit);
// print the array in reversed order without modifying the actual array list
console.log("revers order:", __spreadArray([], countriesToVisit, true).reverse());
// show yhat the array is still in its orginal order
console.log("still in otginal order:", countriesToVisit);
// we have change the orginal order now
console.log("order Array reversed:", countriesToVisit.reverse());
//print the array to show that its back to its orginal order
console.log("back to orginal order:", countriesToVisit.reverse());
// print the array to show that its order has been changed in Alphabetical order now
console.log("sorted in Alphabetical order:", countriesToVisit.sort());
// we have change again  the orginal order now in reverse order again
console.log("order Array reversed again:", countriesToVisit.reverse());
