let Guest_List :string[] = ['Imran Khan','Nawaz Sharif','Asif Ali Zardari'];

// for(let i=0; i<Guest_List.length; i++){

// console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\nThankyou! \n\n')

// }


let absent_Guest :string = 'Imran Khan' ;

let new_Guest :string = 'Kamran Tessori' ;

Guest_List[0] = new_Guest ;

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\nThankyou! \n\n')
    
    }

    console.log (`Mr. ${absent_Guest} is not coming to the party.`);

    console.log ('Good News! We find big Table so we are inviting Three more Guests.')

    Guest_List.unshift('Sir Zia Khan');

    Guest_List.splice(2 , 0 ,'Maryam');

    Guest_List.push('Bilawal');

    for(let i=0; i<Guest_List.length; i++){

        console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\nThankyou! \n\n')
        
        }