// Using string methods to filter an Mpesa message to get what we need

const mpesaMessage = "XXXYYYZZZ10 Confirmed. Ksh700.00 paid to GEL NAIL SHOP. on 17/3/21 at 6:54 PM.New M-PESA balance is Ksh3,646.22. Transaction cost, Ksh0.00. Amount you can transact within the day is 299,300.00.You can now access M-PESA via *334#";
const fullName = "Name Name";

// What do we want. code, amount, time
const mpesaCode = mpesaMessage.split(" Confirmed")[0]
console.log(mpesaCode)

const leftSide = mpesaMessage.split(" paid to")[0]
const amount = leftSide.split("Ksh")[1]
console.log(amount)

const isDueOn = "20/3/21"
    // Extract date from message
const stepOne = mpesaMessage.split("New M-PESA balance")[0]
    // console.log(stepOne)

const stepTwo = stepOne.split(". on ")[1]
    // console.log(stepTwo)

const stepThree = stepTwo.split(" at ")[0]
console.log(stepThree)
    // Compare dates