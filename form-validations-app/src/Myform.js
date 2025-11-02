import MyInput from "./MyInput"

const MyForm=()=>{
     const formConfig={
        name:{
            label:"your name",
            type:"text",
            validation:{required:true}
        },
        email:{
            label:"your Email",
            type:"Email",
            valiadation:{required:true,isEmail:true}
        },

     }
    
     return(
        <form>
            {Object.keys(formConfig).map((key)=>(
                <MyInput
                key={key}
                label={formConfig[key].label}
                type={formConfig[key].type }/>
            ))}
        </form>
     )
}
export default MyForm