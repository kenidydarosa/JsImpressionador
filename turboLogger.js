export const turboConsole = (message, textColor = 'yellow') => {
  const textStyle = `color:${textColor}`;
  console.log(`%c${message}`, textStyle);
};


