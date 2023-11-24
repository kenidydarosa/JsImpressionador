export const turboConsole = (message, textColor = 'red') => {
  const textStyle = `color:${textColor}`;
  console.log(`%c${message}`, textStyle);
};


