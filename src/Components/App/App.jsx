import Form from "../Forms/Form";

const App = () => {
  let checkItems=[]   //Here must to Let use 
const changeBox=(e)=>{
let data=checkItems.find((elem)=> elem===e.target.value)
if(data){
  checkItems=checkItems.filter((elem)=>elem !== e.target.value)
}else{
  checkItems.push(e.target.value)
}
console.log(checkItems);
}
  return (
    <div className=" col-6 offset-3 p-5 bg-dark text-white mt-2 ">
      <Form  changeBox={changeBox}/>
    </div>
  );
};

export default App;
