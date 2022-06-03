function velocidadeMedia(vm,s,t) {
    let num;
    
    if (vm==0) {
        num = s/t;
               
    } else if (s==0){
        num = vm*t;
        
    } else {
        num = s/vm;
         
    } 

    return num;
}

function snapCrackle(maxValue) {

    let arr = [];
  
    for (let i = 1; i < maxValue; i++) {
  
      if (i % 2 != 0) {
  
        arr.push("snap");
        
      } else {
        arr.push(i);
      }
      
    }
  
    return `${arr}`
  }