// 1. A theme park offers tickets based on visitor categories. If the visitor is above 60 years
// old, they get a 30% discount, but only if they are visiting during weekdays and not
// during festival weeks. If the visitor is a student under 25 years old, they get a 20%
// discount, but only if they have a valid student ID and the current month is not
// December. If neither condition is met, they pay the full price, except if the day is
// Sunday, in which case they get a flat 10% discount. Write a program that determines
// the final ticket price for any visitor based on these conditions.

console.log("------------------------------------------------------------------------------------------------------");
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

console.log("------------------------------------------------------------------------------------------------------");

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

console.log("------------------------------------------------------------------------------------------------------");

// 3. A bank is offering different loan interest rates. If the loan amount is above ₹10 lakhs 
// and the borrower’s credit score is above 800, the interest rate is 7%. If the credit 
// score is between 650 and 800 and the borrower’s income is more than ₹50,000 per 
// month, the interest rate is 9%. If the borrower is a government employee, the interest 
// rate is reduced by an additional 0.5% in both cases. If none of these apply but the 
// borrower is taking a loan in December, a 1% festival discount is given. Write a 
// program to calculate the applicable interest rate. 

let loanAmount = 1200000; 
let creditScore = 820;
let monthlyIncome = 60000;
let isGovernmentEmployee = true;
let currentMonth1 = "December";

let interestRate = 0;


if (loanAmount > 1000000 && creditScore > 800) {
    interestRate = 7; 
    if (isGovernmentEmployee) {
        interestRate -= 0.5; 
    }
}

else if (creditScore >= 650 && creditScore <= 800 && monthlyIncome > 50000) {
    interestRate = 9; 
    if (isGovernmentEmployee) {
        interestRate -= 0.5; 
    }
}

else if (currentMonth1.toLowerCase() === "december") {
    interestRate -= 1; 
}

if (interestRate > 0) {
    console.log(`Applicable Interest Rate: ${interestRate} %`);
} else {
    console.log("No special rate. Standard bank rate applies.");
}

console.log("------------------------------------------------------------------------------------------------------");



// 4. An e-commerce website calculates shipping charges based on the destination and 
// delivery speed. If the delivery is within the same city and the item is marked as 
// "priority", delivery is free if the order value exceeds ₹2000, otherwise it costs ₹50. If 
// the delivery is outside the city but within the same state, shipping costs ₹100 unless 
// the order value exceeds ₹5000. If the delivery is to another state, it costs ₹200, but if 
// the customer is a premium member and orders on a weekend, it’s reduced to ₹100. 
// Implement this logic.

let isSameCity = false;
let isPriority = true;
let isSameState = true;
let orderValue = 5500;
let isPremiumMember1 = false;
let isWeekend = false;

let shippingCharge = 0;

if (isSameCity && isPriority) {
    if (orderValue > 2000) {
        shippingCharge = 0; 
    } else {
        shippingCharge = 50;
    }
}

else if (!isSameCity && isSameState) {
    if (orderValue > 5000) {
        shippingCharge = 0; 
    } else {
        shippingCharge = 100;
    }
}

else {
    shippingCharge = 200;
    if (isPremiumMember1 && isWeekend) {
        shippingCharge = 100; 
    }
}

console.log("Shipping Charge: ₹" + shippingCharge);

console.log("------------------------------------------------------------------------------------------------------");





// 5. A gym charges monthly fees based on membership type and attendance. If the 
// member is in the "Gold" plan and attends more than 20 days a month, they get ₹500 
// cashback. If they’re in the "Silver" plan and attend more than 15 days, they get ₹300 
// cashback, but only if they pay through UPI. If the member is in the "Bronze" plan, 
// they only get a ₹100 cashback if they attend more than 10 days and pay via debit 
// card. Calculate the final payable amount. 

let membershipType = "Gold"; 
let attendedDays = 22;
let paymentMethod = "UPI"; 
let monthlyFee = 5000;

let cashback = 0;

if (membershipType.toLowerCase() === "gold" && attendedDays > 20) {
    cashback = 500;
}

else if (membershipType.toLowerCase() === "silver" && attendedDays > 15 && paymentMethod.toLowerCase() === "upi") {
    cashback = 300;
}

else if (membershipType.toLowerCase() === "bronze" && attendedDays > 10 && paymentMethod.toLowerCase() === "debitcard") {
    cashback = 100;
}

let finalAmount = monthlyFee - cashback;

console.log(`Your Cashback: ${cashback} `);
console.log(`Final Payable Amount: ${finalAmount}`);

console.log("------------------------------------------------------------------------------------------------------");




// 6. A coffee shop menu has different prices for different cup sizes: small, medium, large, 
// and extra-large. Customers can choose add-ons like extra shots, flavored syrup, or 
// whipped cream, each with a fixed cost. Write a program that uses a switch case to 
// determine the total bill based on size and selected add-ons. If the selected size or 
// add-on is invalid, display an error message. 

let cupSize = "medium"; 
let addon = "whipped cream"; 

let totalBill = 0;
let valid = true;

switch (cupSize.toLowerCase()) {

    case "small":
        totalBill += 100;
        break;
    case "medium":
        totalBill += 150;
        break;
    case "large":
        totalBill += 200;
        break;
    case "extra-large":
        totalBill += 250;
        break;
    default:
        console.log("Invalid cup size!");
}

if (valid) {

    switch (addon.toLowerCase()) {
        case "extra shot":
            totalBill += 50;
            break;
        case "flavored syrup":
            totalBill += 30;
            break;
        case "whipped cream":
            totalBill += 40;
            break;
        default:
            console.log("Invalid add-on!");
    }
}

if (valid) {
    console.log(`You had choosen ${cupSize} and ${addon}`);
    console.log(`Total Bill: ${totalBill}`);
}

console.log("------------------------------------------------------------------------------------------------------");




// 7. A mobile recharge system offers different plans: Talktime, Data Pack, Combo Pack, 
// and Unlimited Plan. Each plan has a different cost and validity. Using a switch 
// case, calculate the remaining validity days after a recharge, considering that if the 
// recharge date is during a special week (given by the user), validity increases by 2 
// days for all plans. 

let planType = "Unlimited"; 
let isSpecialWeek = true; 

let baseValidity = 0;

switch (planType.toLowerCase()) {
    case "talktime":
        baseValidity = 28;
        break;
    case "data pack":
        baseValidity = 30;
        break;
    case "combo pack":
        baseValidity = 45;
        break;
    case "unlimited":
        baseValidity = 84;
        break;
    default:
        console.log("Invalid plan type!");
        baseValidity = null;
}

if (baseValidity !== null) {

    if (isSpecialWeek) {
        baseValidity += 2;
    }

    console.log(`Plan Type: ${planType}`);
    console.log(`Total Validity: ${baseValidity} days`);
}

console.log("------------------------------------------------------------------------------------------------------");





// 8. A restaurant takes orders for Breakfast, Lunch, and Dinner. Each category has 
// sub-items (e.g., Breakfast → Idli, Dosa, Paratha), and each sub-item has a different 
// price. Using a switch case with nested conditions, generate the final bill for the 
// ordered item and quantity. If the category or sub-item is invalid, display "Item not 
// available". 

let category = "Breakfast"; 
let item = "Dosa"; 
let quantity = 3;
let price = 0;
let valid1 = true;

switch(category.toLowerCase()){
    case "breakfast":
        switch(item.toLowerCase()){
            case "idly":
                price = 30;
                break;
            case "dosa":
                price = 40;
                break;
            case "parota":
                price = 45;
                break;
            default:
                valid1 = false;
        }
        break;
    
    case "lunch":
        switch (item.toLowerCase()) {
            case "veg thali":
                price = 120;
                break;
            case "fried rice":
                price = 100;
                break;
            case "paneer curry":
                price = 150;
                break;
            default:
                valid1 = false;
        }
        break;

    case "dinner":
        switch (item.toLowerCase()) {
            case "biryani":
                price = 150;
                break;
            case "naan":
                price = 40;
                break;
            case "dal":
                price = 60;
                break;
            default:
                valid1 = false;
        }
        break;
    
    default:
        valid1 = false;
}

if(valid1){
    console.log(`You choose ${category}`);
    console.log(`Then you selected ${item}`);
    console.log(`Quantity: ${quantity}`);
    console.log(`Your Total Bill: ${ price*quantity }`);
}else{
    console.log(`Item Not Available!`)
}

console.log("------------------------------------------------------------------------------------------------------");
