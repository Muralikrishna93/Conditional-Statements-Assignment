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

console.log(`Final Ticket Price: ${finalPrice}`);

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

console.log(`Customer Benefit: ${benefit} `);

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

console.log(`Shipping Charge: ${shippingCharge}`);

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






// 9. A university library charges fines based on the type of book borrowed: Fiction, 
// Non-Fiction, Reference, or Magazine. The fine per day is different for each category. 
// Using a switch case, calculate the fine based on the number of overdue days and 
// book category, applying a 50% discount if the user is a student. 

let bookCategory = "Fiction"; 
let overdueDays = 5;
let isStudent1 = true;
let finePerDay = 0;
let valid3 = true;

switch (bookCategory.toLowerCase()) {
    case "fiction":
        finePerDay = 2;
        break;
    case "non-fiction":
        finePerDay = 4;
        break;
    case "reference":
        finePerDay = 6;
        break;
    case "magazine":
        finePerDay = 8;
        break;
    default:
        valid3 = false;
}

if (valid3) {

    let totalFine = finePerDay * overdueDays;
    if (isStudent1) {
        totalFine = totalFine - (totalFine * 50 / 100); 
    }

    console.log(`Book Category: ${bookCategory}`);
    console.log(`Overdue Days: ${overdueDays}`);
    console.log(`Final Fine: ${totalFine}`);
} else {
    console.log("Invalid book category");
}

console.log("------------------------------------------------------------------------------------------------------");





// 10. An online movie booking system has categories: Standard, Premium, VIP, and 
// Balcony. Each has a fixed ticket price, and booking during weekends increases the 
// price by 20%. Using a switch case, determine the final amount the user needs to 
// pay based on their category choice and whether it’s a weekday or weekend. 

let category1 = "Premium"; 
let isWeekend1 = true; 
let basePrice = 0;
let valid4 = true;

switch (category1.toLowerCase()) {
    case "standard":
        basePrice = 150;
        break;
    case "premium":
        basePrice = 250;
        break;
    case "vip":
        basePrice = 300;
        break;
    case "balcony":
        basePrice = 400;
        break;
    default:
        valid4 = false;
}

if (valid4) {
    let finalAmount = basePrice;

    if (isWeekend1) {
        finalAmount = finalAmount + (finalAmount * 20 / 100); 
    }

    console.log(`Category: ${category1}`);
    console.log(`Final Ticket Price: ${finalAmount}`);
} else {
    console.log("Invalid category selected");
}

console.log("------------------------------------------------------------------------------------------------------");





// 11. An online exam system assigns grades based on percentage: 90% and above = 
// Grade A, 80–89% = Grade B, 70–79% = Grade C, 60–69% = Grade D, 50–59% = 
// Grade E, and below 50% = Fail. Additionally, if the student’s score is between 
// 45–49% and they are in the final year, they get a chance for re-evaluation. Implement 
// this grading logic using an else-if ladder. 

let percentage = 49;  
let isFinalYear = true;  
let grade = "";

if (percentage >= 90) {
    grade = "Grade A";
} 
else if (percentage >= 80) {
    grade = "Grade B";
} 
else if (percentage >= 70) {
    grade = "Grade C";
} 
else if (percentage >= 60) {
    grade = "Grade D";
} 
else if (percentage >= 50) {
    grade = "Grade E";
} 
else {

    grade = "Fail";
    if (percentage >= 45 && percentage <= 49 && isFinalYear) {
        grade = "Eligible for Re-evaluation";
    }
}

console.log(`Percentage: ${percentage} %`);
console.log(`Result: ${grade}`);

console.log("------------------------------------------------------------------------------------------------------");





// 12. A company calculates bonuses based on years of experience: more than 15 years = 
// ₹50,000, 10–15 years = ₹30,000, 5–9 years = ₹20,000, 2–4 years = ₹10,000, and 
// less than 2 years = ₹5,000. If the employee joined in December, they get an extra 
// ₹2000 bonus regardless of experience. Write the program. 

let yearsOfExperience = 10;
let joiningMonth = "December";
let bonus = 0;

if (yearsOfExperience > 15) {
    bonus = 50000;
} 
else if (yearsOfExperience >= 10 && yearsOfExperience <= 15) {
    bonus = 30000;
} 
else if (yearsOfExperience >= 5 && yearsOfExperience <= 9) {
    bonus = 20000;
} 
else if (yearsOfExperience >= 2 && yearsOfExperience <= 4) {
    bonus = 10000;
} 
else {
    bonus = 5000;
}

if (joiningMonth.toLowerCase() === "december") {
    bonus += 2000;
}

console.log(`Years of Experience: ${yearsOfExperience}`);
console.log(`Joining Month: ${joiningMonth}`);
console.log(`Total Bonus: ${bonus} `);

console.log("------------------------------------------------------------------------------------------------------");




// 13. A temperature control system categorizes weather: above 40°C = Extremely Hot, 
// 30–39°C = Hot, 20–29°C = Warm, 10–19°C = Cool, and below 10°C = Cold. If it’s 
// raining, append "and Rainy" to the category. Implement this with an else-if ladder. 

let temperature = -12;  
let isRaining = true;  
let weatherCategory = "";

if (temperature > 40) {
    weatherCategory = "Extremely Hot";
} 
else if (temperature >= 30 && temperature <= 39) {
    weatherCategory = "Hot";
} 
else if (temperature >= 20 && temperature <= 29) {
    weatherCategory = "Warm";
} 
else if (temperature >= 10 && temperature <= 19) {
    weatherCategory = "Cool";
} 
else {
    weatherCategory = "Cold";
}

if (isRaining) {
    weatherCategory += " and Rainy";
}

console.log(`Temperature: ${temperature} degree C`);
console.log(`Weather Category: ${weatherCategory}`);

console.log("------------------------------------------------------------------------------------------------------");





// 14. An online store offers discounts: above or equals to ₹20,000 = 25%, ₹15,000–₹19,999 = 20%, 
// ₹10,000–₹14,999 = 15%, ₹5,000–₹9,999 = 10%, below ₹5,000 = no discount. If it’s 
// the customer’s birthday, add an extra 5% discount to whichever category they fall 
// into. Implement this logic. 

let purchaseAmount = 20000;
let isBirthday = true;
let discountPercent = 0;

if (purchaseAmount >= 20000) {
    discountPercent = 25;
} 
else if (purchaseAmount >= 15000 && purchaseAmount <= 19999) {
    discountPercent = 20;
} 
else if (purchaseAmount >= 10000 && purchaseAmount <= 14999) {
    discountPercent = 15;
} 
else if (purchaseAmount >= 5000 && purchaseAmount <= 9999) {
    discountPercent = 10;
} 
else {
    discountPercent = 0;
}

if (isBirthday) {
    discountPercent += 5;
}

let discountAmount = purchaseAmount * discountPercent / 100;
let finalPrize = purchaseAmount - discountAmount;

console.log(`Purchase Amount: ${purchaseAmount}`);
console.log(`Discount Applied: ${discountPercent}%`);
console.log(`Final Price after discount: ${finalPrize}`);

console.log("------------------------------------------------------------------------------------------------------");





// 15. A marathon categorizes runners by completion time: under 2 hours = Elite, 2–3 hours 
// = Advanced, 3–4 hours = Intermediate, 4–5 hours = Beginner, and above 5 hours = 
// Novice. If the runner is under 18 years old, they get a special "Youth" badge in 
// addition to their category. Implement this. 

let completionTime = 3.5; 
let runnerAge = 16;
let marathonCategory = "";

if (completionTime < 2) {
    marathonCategory = "Elite";
} 
else if (completionTime >= 2 && completionTime < 3) {
    marathonCategory = "Advanced";
} 
else if (completionTime >= 3 && completionTime < 4) {
    marathonCategory = "Intermediate";
} 
else if (completionTime >= 4 && completionTime < 5) {
    marathonCategory = "Beginner";
} 
else {
    marathonCategory = "Novice";
}

if (runnerAge < 18) {
    marathonCategory += " + Youth";
}

console.log(`Completion Time: ${completionTime} hours`);
console.log(`Runner Age: ${runnerAge}`);
console.log(`Category: ${marathonCategory}`);

console.log("------------------------------------------------------------------------------------------------------");






