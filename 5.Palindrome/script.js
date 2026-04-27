let word = "BOB" ;

const CheckPalindrome = (word)=>{

    const cleaneWord = word.toLowerCase();
    const reverseWord = cleaneWord.split("").reverse().join("");

    if(cleaneWord === reverseWord){
        console.log("This is palindrome word");
    }else{
        console.log("This is not palindrome word");
    }

};

CheckPalindrome(word);

