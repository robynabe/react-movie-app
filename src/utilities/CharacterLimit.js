export const shortenPars = (string) => {   
    let untrimmed = string;   
    const trimLength = 100;   
    return `${untrimmed.substring(0, trimLength)} ...`;
};