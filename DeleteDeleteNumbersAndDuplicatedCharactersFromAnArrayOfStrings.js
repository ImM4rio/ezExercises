// Simple way to get and array of Strings without repeated letters

let badArray = [3, 'aab', 'abbbbb', 'assbbbb'];

// Creates a new Set and join the items to get the word without duplicates
const removeDuplicates = ( e ) => [...new Set(e)].join('');

const arrayConvert = ( array ) => {

    for (let i = 0; i < array.length; i++) {
        let oldString = array[i];

        // Remove the index if is a Number
        if ( !isNaN( oldString ) ) {
            array.splice( i, 1 );
        
        } else {
            array[i] = removeDuplicates( oldString );
        };     

    }

    return array;
}

console.log( arrayConvert( badArray ) );
