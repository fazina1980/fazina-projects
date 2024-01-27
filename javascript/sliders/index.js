let slds=document.querySelectorAll(".slide");

let cnt = 0;
slds.forEach(function(slds,index){
    slds.style.left=`${index * 100}%`;
});
function next(){
    cnt++;
    if(cnt == slds.length){
        cnt=0;
    }
    myFun();
}
function prev(){
    cnt--;
    if(cnt == -1){
        cnt=slds.length-1;
    }
    myFun();
}
function myFun(){
    slds.forEach(function(images){
        images.style.transform=`translateX(-${cnt * 100}%)`;
    });
}