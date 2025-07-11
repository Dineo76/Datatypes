function checkValue(val) {
    if (val === null) {
      console.log("Value is null");
    } else {
      console.log(typeof checkValue + '-' + ' Value is not null ' + checkValue);
    }
  }
  checkValue(null);