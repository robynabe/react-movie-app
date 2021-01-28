export const shortenPars = (string) => {   
    let untrimmed = string;   
    const trimLength = 155;   
    return `${untrimmed.substring(0, trimLength)} ...`;
};