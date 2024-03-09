let PersonName : string = '';

PersonName = prompt ('What Is Your Name?') || '';

if (PersonName !== null && PersonName !== ''){
    alert (`Hello ${PersonName}, Would You Like to Learn Python Today?`)
}
else
{ alert ('You Have to Fill Your Name!')
}