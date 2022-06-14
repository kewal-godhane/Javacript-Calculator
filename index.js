var place=document.getElementById("place")
// var second= document.getElementById("2")
var btn=document.getElementById("btn")
var clearAll=document.getElementById("clearAll")
var clear=document.getElementById("clear")
var ansStr=""
var arr=[] ;
let str='0123456789/*+-'
var te=false
for(let i=0;i<str.length;i++)
{
    let one =document.getElementById(str[i])

    one.addEventListener('click',()=>{
            if(te && str[i]<'0')
            {

            }
            else
            {
                // console.log(one.innerText);
                place.innerHTML=place.innerHTML+one.innerHTML;
                // arr.push(one.innerHTML)
                ansStr=ansStr+one.innerHTML;
                te=false
            }
            if(str[i]<'0')
            {
                te=true
            }
        });
}


// second.addEventListener('click',()=>{
//     // console.log(second.innerText);
//     place.innerHTML=second.innerHTML;
//     arr.push(second.innerHTML)
// })

btn.addEventListener('click',()=>{
    // console.log(arr[0]);
    // console.log(arr[1]);
    for (let i = 0; i < ansStr.length; i++)
    {
        var f
        var s
        var temp
        switch (ansStr[i]) {
            case '+':
                // console.log("+");
                f=ansStr.slice(0,i);
                s=ansStr.slice(i+1,ansStr.length)
                temp=parseInt(f)+parseInt(s);
                place.innerHTML=temp;
                ansStr="";
                ansStr=ansStr+temp.toString()
                break;
            case '-':
                f=ansStr.slice(0,i);
                s=ansStr.slice(i+1,ansStr.length)
                temp=parseInt(f)-parseInt(s);
                place.innerHTML=temp;
                ansStr="";
                ansStr=ansStr+temp.toString()
                break;
            case '*':
                f=ansStr.slice(0,i);
                s=ansStr.slice(i+1,ansStr.length)
                temp=parseInt(f)*parseInt(s);
                place.innerHTML=temp;
                ansStr="";
                ansStr=ansStr+temp.toString()
                break;
            case '/':
                f=ansStr.slice(0,i);
                s=ansStr.slice(i+1,ansStr.length)
                temp=parseInt(f)/parseInt(s);
                place.innerHTML=temp;
                ansStr="";
                ansStr=ansStr+temp.toString()
                break;
            default:
                break;
        }
        // console.log(ansStr);
    }
})


clearAll.addEventListener('click',()=>{
    place.innerHTML=""
    ansStr=""
})

clear.addEventListener('click',()=>{
    const a=ansStr.slice(0,ansStr.length-1)
    ansStr=a
    place.innerHTML=a
    te=false
})