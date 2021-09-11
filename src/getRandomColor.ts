export const getRandomColor = (): string => {
    const getHex = () => Math.floor(Math.random() * 256).toString(16);

    const red = getHex();
    const green = getHex();
    const blue = getHex();

    return `#${red}${green}${blue}`;
};
