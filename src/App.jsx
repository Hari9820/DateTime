import React from "react";  

function App(){

const wish = 'Hello, The time is'
let curDate = new Date(2023, 5, 26, 21)
curDate = curDate.getHours();
let greeting = "";
const cssStyle = "";



if(curDate>1 && curDate<12){
  greeting = "Good Morning";
  cssStyle.color = "##FF0000"
}
else if(curDate>=12 && curDate<20){
  greeting = "Good Evening";
  cssStyle.color = "#FFAE42"
}
else{
  greeting = "Good Night"
  cssStyle.color = "#454545"
}

return(
    <>
<div>
<h1>Hello, <span style={cssStyle}>{greeting}</span></h1>,  
</div>,
</>
)
}

export default App;