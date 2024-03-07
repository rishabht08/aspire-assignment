export type Transaction = {
    name: string;
    date: string;
    amount: string;
    message: string;
    transactionType: TransactionType;
    category: TransactionCategory;
    

};

export enum TransactionType {
    Deduct = "Deduct",
    Credit = "Credit"
}

export enum TransactionCategory {
    Stay = "Stay",
    Food = "Food",
    Travel = "Travel",
    Bank = "Bank",
    Event = "Event"
}

export type Card = {
    holderName: string;
    cardNumber: string;
    date: string;
    cvv: number;
    cardType: CardType;
    frozen: boolean;
}

export enum CardType {
    Visa = "Visa",
    MasterCard = "MasterCard",
    Maestro = "Maestro",
    Rupay = "Rupay",
}