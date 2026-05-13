for (i = 0; i < 100; i++) {
    let value = i + 1;
    if (value % 3 === 0 && value % 5 === 0) value = `FizzBuzz`;
    else if (value % 3 === 0) value = `Fizz`;
    else if (value % 5 === 0) value = `Buzz`;
    console.log (value);
}