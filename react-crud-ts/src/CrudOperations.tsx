import React,{useState} from 'react'
import axiosClient from './api/axiosClient'
import {User} from './types/User'

const CrudOperations:React.FC=()=>{
    const [users,setUsers]=useState<User[]>([]);
    const [formData,setformData]=useState<User>({
        name:"",
        email:"",
        phone:""
    })
    const [selectedId,setSelectedId]=useState<number |null>(null)


    //get users
    const handleFetchUsers=async()=>{
        try{
            const res=await axiosClient.get<User[]>("./users")
            setUsers(res.data)
            console.log("fetched usesrs",res.data)
        }
        catch(err){
            console.error("error fextching data:",err)
        }
    };
    //post user- adding user


const handleAddUser=async ()=>{
    try{
        const res =await axiosClient.post<User>("/users",formData)
        setUsers([...users,res.data])
        console.log("users added",res.data)
        setformData({name:"",email:"",phone:""})
    }catch(err){
        console.error("error creating user",err)
    }
};


//updating user  
const handleUpadateUser =async ()=>{
    if(!selectedId)return alert("select user id to update")
        try{
    const res=await axiosClient.put(`./users/${selectedId}`,formData)
        setUsers(
    users.map((u)=>(u.id=== selectedId ?{...u,...formData}:u))
        );
      console.log("user updated:",res.data);
      setSelectedId(null);
      setformData({name:"",email:"",phone:""})
    }catch(err){
        console.log("error updating user",err)
    }

};
//delete user
const handleDeleteUser =async (id:number)=>{
try{
    await axiosClient.delete(`./users/${id}`)
    setUsers(users.filter((u)=>u.id===id));
    console.log(`user with iD ${id} deleted`)
}catch(err){
    console.log("error delelting user",err)
}
};
// handle input changes

const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
setformData({...formData,[e.target.name]:e.target.value})
}

//load users data info form for edit..
const handleEditClick=(user:User)=>{
 setSelectedId(user.id!)
 setformData({name:user.name,email:user.email,phone:user.phone})
};
return (
    <div style={{padding:30}}>
        <h1>React Typescript CRUD(Axios)</h1>

        <div style={{marginBottom:20}}>
            <button style={{alignItems:"center"}} onClick={handleFetchUsers}>Get all Users</button>
        </div>
    

<div style={{display:"flex",gap:10,marginBottom:10}}>
    <input name="name"placeholder='Name'
    value={formData.name}
    onChange ={handleChange}/>
    <input name="email" placeholder='enter email' value={formData.email}
    onChange={handleChange}/>
    <input name="phone" placeholder='enter your phone number'value={formData.phone}
     onChange={handleChange}/>
    {selectedId ?(
        <button onClick ={handleUpadateUser}>update user</button>
    ):(
        <button onClick ={handleAddUser}>AddUser</button>
    )}
</div>


{/* user table */}
{users.length>0 && ( 
    <table border={1} cellPadding={8} style={{width:"100%"}}>
     <thead>
        <tr>
            <th>ID</th>
             <th>Name</th>
              <th>Email</th>
               <th>Actions</th>
               <th>Phone</th>
        </tr>
     </thead>
     <tbody>
        {users.map((u)=>(
            <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.email}</td>
                <td>{u.phone}</td>
                <td>{u.name}</td>
                <td>
                    <button onClick ={()=>handleEditClick(u)}>edit</button>
                    <button onClick ={()=>handleDeleteUser(u.id!)}>Delete</button>
                </td>
            </tr>
            
        ))}
     </tbody>
    
    </table>
)}
</div>

);

}
export default CrudOperations
