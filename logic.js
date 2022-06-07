function store(num){
    document.getElementsByTagName('span')[0].innerText+=num;
}

function solve(){
    let str=document.getElementsByTagName('span')[0].innerText;
    // let temp=str.replace("^","**");
    let ans=eval(str.replace("^","**"));
    document.getElementsByTagName('span')[0].innerText=ans;
}

function reset(){
    document.getElementsByTagName('span')[0].innerText="";
}