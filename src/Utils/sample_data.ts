import { Card, CardType, Transaction, TransactionCategory, TransactionType } from "./types";

export const transactionsSample : Transaction[] = [
    {
        name:'Hamleys',
        date: '20 May 2020',
        message:'Refund on debit card',
        transactionType: TransactionType.Credit,
        category: TransactionCategory.Bank,
        amount: 'S$ 150'
    },
    {
        name:'Hamleys',
        date: '20 May 2020',
        message:'Charged to debit card',
        transactionType: TransactionType.Deduct,
        category: TransactionCategory.Travel,
        amount: 'S$ 150'
    },
    {
        name:'Hamleys',
        date: '20 May 2020',
        message:'Charged to debit card',
        transactionType: TransactionType.Deduct,
        category: TransactionCategory.Event,
        amount: 'S$ 150'
    },
    {
        name:'Hamleys',
        date: '20 May 2020',
        message:'Charged to debit card',
        transactionType: TransactionType.Deduct,
        category: TransactionCategory.Bank,
        amount: 'S$ 150'
    },
]


export const creditCards : Card[] = [
    {
        holderName: 'Mark Henry',
        date: '20 May 2020',
        cardNumber: '5041 8363 9494 8569',
        cvv: 485,
        cardType: CardType.Visa,
        frozen:false

    },
    {
        holderName: 'Mike Tyson',
        date: '29 May 2021',
        cardNumber: '5041 8363 9494 8569',
        cvv: 485,
        cardType: CardType.Visa,
        frozen:false

    },
    {
        holderName: 'Rishab T',
        date: '08 Jan 2023',
        cardNumber: '5041 8363 9494 8569',
        cvv: 485,
        cardType: CardType.Visa,
        frozen:false

    },
    {
        holderName: 'Ross Gellar',
        date: '20 July 2020',
        cardNumber: '5041 8363 9494 8569',
        cvv: 485,
        cardType: CardType.Visa,
        frozen:false

    },
]