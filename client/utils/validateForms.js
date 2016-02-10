export default function validatePasswordNumber(text) {
  // regex matches digit character
  var containsNumber = text.search(/\d/);
  return containsNumber === -1 ? false : true;
};

export default function validatePasswordCapital(text) {
  var containsCapitalLetter = text.search(/[A-Z]/);
  return containsCapitalLetter === -1 ? false : true;
};

export default function validatePasswordSymbol(text) {
  // regex non-word character
  var containsSymbol = text.search(/\W/);
  return containsSymbol === -1 ? false : true;                     
};

export default function validatePasswordLength(text) {
  var length = text.length;
  return length < 6 ? false : true;


};

export default function validatePasswordMatch(text1, text2) {
  return text1 === text2 ? true : false;
}


export default function validateLogin(data, props) {
  const errors = {};
  
  if(!data.username) {
    errors.username = 'Username Required';
  }
  if(!data.password) {
    errors.password = 'Password Required';
  }

  var users = [
    {name: 'john.doe', pw: 'Qwerty!234'},
    {name: 'jane.doe', pw: 'Qwerty432!'}
  ];

  var isValid = false;
  users.forEach(function(el) {
    if(el.name === data.username) {
      if(el.pw === data.password) {
        isValid = true;
      }
    }
  });
  if(!isValid) {
    errors.username = 'Not a valid username or password';
    errors.password = 'Not a valid username or password';
    
  }

  return errors;
};

export default function validateCreateAccount(data, props) {
  const errors = {};
  const pw = data.password || '';

  if(!data.username) {
    errors.username = 'Username Required';
  }
  if(!data.password) {
    errors.password = 'Password Required';
  }
  if(!data.email) {
    errors.email = 'Email Required';
  }
 

  if(!validatePasswordNumber(pw)) {
    errors.password = 'The password must contain at least 1 number, 1 Symbol, 1 Capital letter, and be at least 6 characters long';
  }
  if(!validatePasswordSymbol(pw)) {
    errors.password = 'The password must contain at least 1 Symbol, 1 number, 1 Capital letter, and be at least 6 characters long';
  }
  if(!validatePasswordCapital(pw)) {
    errors.password = 'The password must contain at least 1 Capital letter, 1 Symbol, 1 number, and be at least 6 characters long';
  }
  if(!validatePasswordLength(pw)) {
    errors.password = 'The password must be at least 6 characters long, and contain at least 1 Capital letter, 1 Symbol, and 1 number';
  }
  if(!validatePasswordMatch(data.password, data.confirmpassword)) {
    // errors.password = 'The password and challenge password do not match';
    errors.confirmpassword = 'The password and challenge password do not match';
  }

  var users = [
    {name: 'john.doe', pw: 'Qwerty!234', email: 'john.doe@nowhere.com'},
    {name: 'jane.doe', pw: 'Qwerty432!', email: 'jane.doe@nowhere.com'}
  ];

  users.forEach(function(el) {
    if(el.name === data.username) {
      errors.username = 'The account is already taken';
      }
  });

  users.forEach(function(el) {
    if(el.email === data.email) {
      errors.email = 'The email is already taken';
      }
  });

  return errors;
}



