    let Obj={
        key:"malicious'ex",
        key1:"SELECT",
        Key2:"Normal",
        key3:"TRIGGER"
    }
    let array= ["CREATE","ALTER","DROP","TRUNCATE","RENAME","SELECT","INSERT","UPDATE","DELETE","GRANT","REVOKE","COMMIT","ROLLBACK","SAVEPRINT","WHERE","ORDER BY","GROUP BY","HAVING","JOIN","TRIGGER","=",";","'","UNION ALL","UNION"]

    let isValidParams=true
    for (const value of Object.values(Obj)) {
    if (array.some(word => value.toUpperCase().includes(word))) {
        console.log(`Found a match: ${value}`);
        isValidParams=false
    }
    }

    console.log(isValidParams)
