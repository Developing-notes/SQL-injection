let Obj = {
  key: "malicious'ex",
  key1: "SELECT",
  key2: "Normal",
  key3: "TRIGGER"
};

let array = ["CREATE", "ALTER", "DROP", "TRUNCATE", "RENAME", "SELECT", "INSERT", "UPDATE", "DELETE", "GRANT", "REVOKE", "COMMIT", "ROLLBACK", "SAVEPRINT", "WHERE", "ORDER BY", "GROUP BY", "HAVING", "JOIN", "TRIGGER", "=", ";", "'", "UNION ALL", "UNION"];

let isValidParams = true;

for (const key in Obj) {
  if (Obj.hasOwnProperty(key)) {
    const value = Obj[key];
    const words = value.toUpperCase().split(/\s+/);
console.log(words ,">>wordswordswordswords")
    if (array.some(word => words.includes(word))) {
      console.log(`Found a match in ${key}: ${value}`);
      isValidParams = false;
    }
  }
}

console.log(isValidParams);



https://www.stackhawk.com/blog/node-js-sql-injection-guide-examples-and-prevention/
https://www.stackhawk.com/blog/react-command-injection-examples-and-prevention/

1.id=isnan check

2.let x="gmaico"
  const re = /^[A-Za-z]+$/;


if(x.match(re))
{
    console.log("true")
}
else{
    console.log("false")
}
 
console.log("Welcome to Programiz!"); 
