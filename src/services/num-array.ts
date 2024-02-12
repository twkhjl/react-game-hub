const numArray = (num:number)=>{

    return Array.from({ length: num }, (v, k) => {
        v;
        return k + 1;
      });

}


export default numArray;