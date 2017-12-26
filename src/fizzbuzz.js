function fizzBuzz(number) {
  if (number === 0) return 0;
  if (number % 3 === 0 && number % 5 === 0) return 'Fizz Buzz';
  if (number % 5 === 0) return 'Buzz';
  if (number % 3 === 0) return 'Fizz';

  return number;
}

export default fizzBuzz;
