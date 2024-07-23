const accountId=1234
let accountMail="dummy@gmail.com"
var password="1234"
accountCity="Sikkim"

// accountId=900  Not allowed
accountMail = "new@gmail.com"
// the  var has the problem with the scope
let undefined;
console.table([accountId,accountMail,password,accountCity,undefined])