// 1. A theme park offers tickets based on visitor categories. If the visitor is above 60 years
// old, they get a 30% discount, but only if they are visiting during weekdays and not
// during festival weeks. If the visitor is a student under 25 years old, they get a 20%
// discount, but only if they have a valid student ID and the current month is not
// December. If neither condition is met, they pay the full price, except if the day is
// Sunday, in which case they get a flat 10% discount. Write a program that determines
// the final ticket price for any visitor based on these conditions.

let age = 67;
let isWeekday = true;
let isFestivalWeek = false;

let isStudent = false;
let hasStudentID = false;
let currentMonth = "November";

let dayOfWeek = "Sunday";

let ticketPrice = 1000;
let finalPrice = ticketPrice;

if (age > 60 && isWeekday && !isFestivalWeek) {
    finalPrice = ticketPrice - (ticketPrice * 30 / 100); 
}

else if (age < 25 && isStudent && hasStudentID && currentMonth.toLowerCase() !== "december") {
    finalPrice = ticketPrice - (ticketPrice * 20 / 100); 
}

else if (dayOfWeek.toLowerCase() === "sunday") {
    finalPrice = ticketPrice - (ticketPrice * 10 / 100); 
}

console.log("Final Ticket Price: " + finalPrice);




// 2. A food delivery app is running a complex promotion. If the order amount is more than
// ₹1000 and the customer is a premium member, they get free delivery and an extra
// 15% off. If the order is between ₹500 and ₹1000 and the customer has ordered on a
// weekday between 6 PM and 8 PM, they get a ₹100 discount, but not if they’ve used a
// coupon already. If the order is less than ₹500 and it’s Sunday morning, they get free
// delivery only. Calculate and display the exact benefit the customer receives

let orderAmount = 1200;
let isPremiumMember = true;

let isWeekday1 = true;
let hasUsedCoupon = false;

let isSundayMorning = false;

let benefit = "";

if (orderAmount > 1000 && isPremiumMember) {
    let discount = orderAmount * 15 / 100; 
    benefit = "Free Delivery + " + discount + " Discount";
}

else if (orderAmount >= 500 && orderAmount <= 1000 && isWeekday1) {
    let time = 19; 
    if (time >= 18 && time <= 20 && !hasUsedCoupon) {
        benefit = "100 Discount";
    }
}

else if (orderAmount < 500 && isSundayMorning) {
    benefit = "Free Delivery";
}

else {
    benefit = "No Promotion Applied";
}

console.log("Customer Benefit: " + benefit);
