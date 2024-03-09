let Guest_List :string[] = ['Imran Khan','Nawaz Sharif','Asif Ali Zardari'];

// for(let i=0; i<Guest_List.length; i++){
// console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\nThankyou! \n\n')
// }

let absent_Guest :string = 'Imran Khan' ;
let new_Guest :string = 'Kamran Tessori' ;
Guest_List[0] = new_Guest ;

// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\nThankyou! \n\n')
//     }

    console.log (`Mr. ${absent_Guest} is not coming to the party.`);
    console.log ('Good News! We find big Table so we are inviting Three more Guests.')

    //Adding 3 Guests in array.
    Guest_List.unshift('Sir Zia Khan');
    Guest_List.splice(2 , 0 ,'Maryam');
    Guest_List.push('Bilawal');

    // Print array Add for 6 Guests.
    for(let i=0; i<Guest_List.length; i++){
        console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\nThankyou! \n\n')
        }

    // Sorry Message for not invite to guests.
    console.log('\nSorry, we can not arrange big table, only Two people will be invited.');

    // Guest Removed from Here.
    while(Guest_List.length > 2){
        let remove_Guest = Guest_List.pop();
    console.log(`Sorry Mr. ${remove_Guest}, You are not invited for Dinner.`);
    }

    // Remaining 2 Invited Guest.
    for(let i=0; i<Guest_List.length; i++){
        console.log('Dear Mr. ' + Guest_List[i] + ',\n\nYou are still invited.\n\nThankyou! \n\n')
        } 

    //All Guest Remove From Array.
    Guest_List.splice(0, 2);
    console.log(Guest_List);
