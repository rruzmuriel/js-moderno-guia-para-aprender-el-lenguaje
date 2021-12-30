// In this code we have a function called doubleAfter2Seconds. This function will take a number as input and will resolve two seconds later with the number doubled.

const doubleAfter2Seconds = (num) => {
    return new Promise(resolve => {
        setTimeout(() => {
          resolve(num * 2);
        }, 2000);
      });
    }

export const getDouble = async (num) => {
    const result = await doubleAfter2Seconds(num);
    console.log(result)
}
