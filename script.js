// QUESTION-1:
// a.PRINT ODD NUMBERS IN Array
//anonymous  :  
 var array=[1,2,3,4,5,6,7,8,9,];
let abc=function(array){
    for(var i = 0 ; i< array.length ; i++){
          if(array[i]%2!=0){
              console.log(array[i]);
          } 
     }
  };
abc(array);

//IMMEDIATELY INVOKED FUNCTION Expression(IIFE)
 var array=[1,2,3,4,5,6,7,8,9];
 (function (array)
 {
    for(var i=0; i<array.length; i++)
    {
      if(array[i]%2!==0)
      {
         console.log(array[i]);
      }
    }
 })(array);

 //b.Convert all the strings to title caps in a string array
 //anonymous : 
 var str=function (string) {
    var sent = string.toLowerCase().split(" ");
    for(var i = 0; i< sent.length; i++){
       sent[i] = sent[i][0].toUpperCase() + sent[i].slice(1);
    }
 sent.join(" ");
 var res="";
 for(let i=0;i<sent.length-1;i++)
 {
     res+=sent[i]+" "
 }
 res+=sent[sent.length-1]
 return res;
 }
 console.log(str("we are guvian"));

//IIFE :
(function (string) {
    var sent = string.toLowerCase().split(" ");
    for(var i = 0; i< sent.length; i++){
       sent[i] = sent[i][0].toUpperCase() + sent[i].slice(1);
    }
 sent.join(" ");
 var res="";
 for(let i=0;i<sent.length-1;i++)
 {
     res+=sent[i]+" "
 }
 res+=sent[sent.length-1]
 console.log(res);
 }) ("we are guvian");

//c.Sum of all numbers in an array
//Anonymous:
var sum =function(a){
    var  res=0;
    for(i=0;i<a.length;i++)
    {
            res+=a[i]
    }
    return res;
 
}
console.log(sum([1,2,3,4,5,6]))


//IIFE :

  (function(a){
    var  res=0;
    for(i=0;i<a.length;i++)
    {
            res+=a[i]
    }
    console.log(res);
})([1,2,3,4,5,7]);

//d.Return all the prime numbers in an array
//Anonymous Function:
var sum =function(a){
    var  res="";
    for(i=0;i<a.length;i++)
    {
        var count=0;
        for(j=1;j<=a[i];j++)
        {
            if(a[i]%j===0)
            {
                count++
            }
        }
        if(count==2)
        {
            res+=a[i]+" "
        }
    }
    return res;
 
}
console.log(sum([1,2,3,4,5,6,7,8,9,11]))

//IIFE :
(function(a){
    var  res="";
    for(i=0;i<a.length;i++)
    {
        var count=0;
        for(j=1;j<=a[i];j++)
        {
            if(a[i]%j===0)
            {
                count++
            }
        }
        if(count==2)
        {
            res+=a[i]+" "
        }
    }
    console.log(res);
 
})([1,2,3,4,5,6,7,8,9,11]);

//e.Return all the palindromes in an array

//Anonymous Function :

var palind=function(a){
    var res="";
    var ans="";
    for(i=0;i<a.length;i++)
    {
        res+=a[i];
        var count=0
        
        for(j=0;j<res.length;j++)
        {
            if(res[j]===res[((res.length-1)-j)])
            {
                count++
                
            }
        }
        if(count===res.length)
        {
            ans+=res+" "
        }
        res="";
    }
    return ans;
 
}
console.log(palind([1,11,343,200,798,80108,8008,999,7171,700007]))
    //IIFE : 

    (function(a){
        var res="";
        var ans="";
        for(i=0;i<a.length;i++)
        {
            res+=a[i];
            var count=0
            
            for(j=0;j<res.length;j++)
            {
                if(res[j]===res[((res.length-1)-j)])
                {
                    count++
                    
                }
            }
            if(count===res.length)
            {
                ans+=res+" "
            }
            res="";
        }
        console.log(ans);
     
    }) ([1,11,343,411,575,600,7887,80108,999,11]);
 
        //f.Return median of two sorted arrays of the same size.
        //Anonymous:
        var arr=function(a,b){
            var c=[];
            var n=a.length;
            var p=b.length;
            var i=0;
            var j=0;
            var med=0;
            while(i<n && j<p)
            {
                if(a[i]<b[j])
                {
                    c.push(a[i])
                    i++
                }
                else
                {
                    c.push(b[j])
                    j++
                }
            }
            
             if(i<n)
             {
                 for(let k=i;k<n;k++)
                 {
                     c.push(a[k])
                 }
             }
             else if(j<p)
             {
                 for(let m=j;m<p;m++)
                 {
                     c.push(b[m])
                 }
             }
             if(c.length%2===0)
             {
                 med=(c[(c.length/2)-1]+c[c.length/2])/2
             }
             else
             {
                 med=c[Math.floor(c.length/2)]
             }
             return med;
            
        }
        console.log(arr([1,2,3,7],[4,5,6,8]));
//IIFE:
(function(a,b){
    var c=[];
    var n=a.length;
    var p=b.length;
    var i=0;
    var j=0;
    var med=0;
    while(i<n && j<p)
    {
        if(a[i]<b[j])
        {
            c.push(a[i])
            i++
        }
        else
        {
            c.push(b[j])
            j++
        }
    }
    
     if(i<n)
     {
         for(let k=i;k<n;k++)
         {
             c.push(a[k])
         }
     }
     else if(j<p)
     {
         for(let m=j;m<p;m++)
         {
             c.push(b[m])
         }
     }
     if(c.length%2===0)
     {
         med=(c[(c.length/2)-1]+c[c.length/2])/2
     }
     else
     {
         med=c[Math.floor(c.length/2)]
     }
     console.log(med);
    
}) ([1,2,3,7],[4,5,6,8]);
//g.Remove duplicates from an array

//anonymous :
var arr=function(a){
    var b=[];
    var n=a.length;
    for(let i=0;i<n-1;i++)
    {
        for(let j=i+1;j<n;j++)
        {
            if(a[i]===a[j])
            {
                delete a[j]
            }
        }
    }
    for(let i=0;i<a.length;i++)
    {
        if(a[i]%10===Math.floor(a[i]%10))
        {
            b.push(a[i])
        }
    }
    let c=""
    for(let i=0;i<b.length-1;i++)
     {
         c+=b[i]+" ";
    }
    c+=b[b.length-1];
     return c;
    
}
console.log(arr([1,1,2,1,2,3,3,3,4,3,3,3,3,2,2,2]));
 //h.Rotate an array by k times
// anonymous :

var rotate=function(a,k){
    n=a.length;
 c=[];
  d="";
  for(i=0;i<n;i++)
  {
      c[(i+k)%(n)]=a[i]
  }
  for(i=0;i<c.length-1;i++)
  {
      d+=c[i]+" "
  }
  d+=c[c.length-1]
  return d;
}
console.log(rotate([1,2,3,4,5],2))
  
//IIFE :
(function(a,k){
    n=a.length;
 c=[];
  d="";
  for(i=0;i<n;i++)
  {
      c[(i+k)%(n)]=a[i]
  }
  for(i=0;i<c.length-1;i++)
  {
      d+=c[i]+" "
  }
  d+=c[c.length-1]
  console.log(d);
}) ([1,2,3,4,5],3);

//QUESTION 4

//A.Print odd numbers in an array
//Arrow Function :
var y=[1,2,3,4,5,6,7]

var odd=(array)=>{
   let arr=[];
   for(let i=0; i<array.length; i++)
   {
     if(array[i]%2!==0)
     {
      arr.push(array[i]);
     }
   }
   return arr;
}
console.log(odd(y));

//B.Convert all the strings to title caps in a string array
//USING ARROW FUNCTION:
var str="my name is sagayasumanth";
let def= (str)=>{
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return str.join(' ');
}
console.log(def(str));

//c.Sum of all numbers in an array
//BY USING ARROW FUNCTION:
var a=[1,2,3,4,5,6,7,8,9];
var sum=0;
let ghi=(a)=>
{
   for(let i=0; i<a.length; i++)
   {
     sum=sum+a[i];
   }
   return sum;
}
console.log(ghi(a));

//D.Return all the prime numbers in an array
//BY USING ARROW FUNCTION:
let n=34;
let l=(n)=>
{
   for(let i=2; i<=n; i++)
   {
      let flag=0;
      for(let j=2; j<i; j++)
      {
         if(i%j==0)
         {
            flag=1;
            break;
         }
      }
      if(flag==0)
      {
         console.log(i);
      }
   }
}
console.log(l(n));

//E.Return all the palindromes in an array
//BY USING ARROW FUNCTION:
Palindrome = (arr, n) =>
    {
        // Traversing each element of the array
        // and check if it is palindrome or not
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }



        
