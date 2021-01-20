export const shortenPars = (string) => {   
    let untrimmed = string;   
    const trimLength = 40;   
    return `${untrimmed.substring(0, trimLength)} ...`;
};