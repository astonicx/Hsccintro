module.exports={

// create decimal to bianary coversion function
ConvertDecToBin:function(decimal){
if( process.env.CONSOLE_DEBUG=="true"){
console.log(decimal)
}// End if console.debugvar runningdec=decimal;
var binString='';

while (runningdec > 0){
var newBit= runningdec % 2
binString=newBit.toString()+binString;
runningdec = Math.floor(runningdec/2)
}// end while loop 


}// End ConvertDecToBin function



}// end module.exports