function calculateArea(radius) {
    let area = 3.14 * radius * radius;
    return area;
  }
  result = calculateArea(2.5);

  let isFloat = result % 1 !== 0;

  console.log(
    (typeof result) +
      (isFloat ? ' (float-like)' : '') +
      ' - The answer is ' +
      result
  ) 
  