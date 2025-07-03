//1//
var str="hello";
function reverseString(){
    let revStr="";
    for(var i=str.length-1;i>=0;i--){
        revStr+=str[i];
    }
    console.log(revStr)
}
reverseString(str)


//2//
var str="madam"
function reverseString(){
    let revStr="";
    for(var i=str.length-1;i>=0;i--){
        revStr+=str[i];
    }
    console.log(revStr)
}
pallStr=reverseString(str)
if (str==pallStr){
    console.log("true")
}
else{
    console.log("false")
}


//3//
var str="The quick brown fox jumped over the lazy dog";
function findLongestWord(sentence) {
  const words = sentence.split(" ");
  let longestWord = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}
findLongestWord(str)





//4//
let arr=[1, [2, [3, 4], 5], 6]
console.log(arr.flat(2));

//another way//
function flatten(){
    let result=[]
    function flat(arr){
        for(let i=0;i<inner.length;i++){
            if (Array.isArray(arr[i])){
                flat(arr[i])
            }
            else{
                result.push(arr[i])
            }
        }
    }
    flat(arr)
}
const results=flatten([1,2,[3,4],5])
console.log(results)



//5//
function removeDuplicates(arr){
    let unique=[]
        for (let i=0;i<arr.lenth;i++){
            let exists=false
            for(let j=0;j<arr.length;j++){
                if(arr[i]==unique[j]){
                    exists = true;
                    break;
                }
            }
            if (!exists) {
                unique.push(arr[i]);
            }
        }
        return unique;
}
removeDuplicates([1, 2, 2, 3, 4, 4, 5])
           

//6//
var str1="listen"
var str2="silent"
if(str1.length != str2.length){
    console.log("false");
}
[str1].sort();
[str2].sort();
for (let i = 0; i <[str1].length ; i++){
    if (str1[i] != str2[i])
        return false;
    return true;
}



