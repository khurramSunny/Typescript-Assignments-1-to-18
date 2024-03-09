let PersonName :string = '';

PersonName = prompt('What Is Your Name?') || '';

let LowerCase :string = PersonName .toLocaleLowerCase ();
let UpperCase :string = PersonName .toUpperCase ();

let TitleCase :string = PersonName . split (' '). map(word => word.charAt(0).toUpperCase()
     + word.slice(1). toLowerCase()).join(' ')

if(PersonName !== null && PersonName !== '')
{
alert(`Hello ${PersonName}, Here Are Your Name In:

LowerCase: ${LowerCase}
UpperCase: ${UpperCase}
TitleCase: ${TitleCase}`)

}

else{alert('Please Fill Your Name!')}

