// Here solve all the easy level leetcode questions

// Qstn-1-> Two Sum

// var twoSum=function(nums,target){
//     if(nums.length==2){
//         return [0,1];
//     }
//     let maps=new Map();
//     for(let i=0;i<nums.length;i++){
//         maps[nums[i]]=i;
//     }

//     for(let i=0;i<nums.length;i++){
//         let complement=target-nums[i];
//         let found=maps[complement];
//         if(found!=undefined && found!=i) return [i,found];
//     }
//     return [0,0]
// }

// const result=twoSum([2,6,7,15],9)
// console.log(result);

//===================================================================================================================

// Qstn-9-> Palindrome Number

// var palinDrome= function(num){
//     let string=num.toString();
//     let str="";
//     for(let i=string.length-1;i>=0;i--){
//         str+=string[i];
//     }
//     let newNum=parseInt(str);
//     if(newNum==num){
//         return true
//     }else{
//         return false
//     }
// }

// const result=palinDrome(121);
// console.log(result);

// const result2=palinDrome(122);
// console.log(result2);

//===================================================================================================================

//Qstn-13-> Roman To Integer

// var romanToInt=function(s){

//     const maps={
//         'I':1,
//         'V':5,
//         'X':10,
//         'L':50,
//         'C':100,
//         'D':500,
//         'M':1000,
//     }

//     let result=0;
//     for(let i=0;i<s.length;i++){
//         let curr1=maps[s[i]];
//         let curr2=maps[s[i+1]];
//         if(curr2>curr1){
//             result+=curr2-curr1;
//             i++
//         }else{
//             result+=curr1
//         }
//     }
//     return result
// }

// const result=romanToInt("IV")
// console.log(result);


// const result2=romanToInt("VI")
// console.log(result2);


//===================================================================================================================