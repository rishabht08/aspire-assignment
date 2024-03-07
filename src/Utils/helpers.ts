export const generateRandomCreditCardNumber = (): string => {
    let creditCardNumber = '';
    for (let i = 0; i < 16; i++) {
        creditCardNumber += Math.floor(Math.random() * 10);
        if ((i + 1) % 4 === 0 && i !== 15) {
            creditCardNumber += ' ';
        }
    }
    return creditCardNumber;
}


export const generateRandomDate = () :string => {

    const startDate = new Date('2017-01-01').getTime();
    const endDate = new Date().getTime(); 

    const randomTime = startDate + Math.random() * (endDate - startDate);
    const randomDate = new Date(randomTime);

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const day = String(randomDate.getDate()).padStart(2, '0');
    const month = months[randomDate.getMonth()];
    const year = randomDate.getFullYear();

    return `${day} ${month} ${year}`;
}


export const generateRandomCvv = (): number => {
    return Math.floor(Math.random() * 900) + 100;
}


