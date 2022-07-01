function reverse(str){
    let r=Array.from(str);
    str="";
    for(let x=r.length; x>0;x--)
    {
        console.log(r[x-1]);

        str+=(r[x-1]);
    }


    return str; 
}


let str = 'hola'
console.log(reverse(str));