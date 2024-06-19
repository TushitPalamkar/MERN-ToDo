import axios from 'axios'
const baseurl='https://mern-todolist-backend-aef8.onrender.com'
const getalltodo=(setalltodo)=>{
    axios.get(baseurl).then(({data})=>{
        console.log(data)
        setalltodo(data)
    })
    .catch((err)=>{console.log(err)})
}
const addtodo=(text,settext,setalltodo)=>{
    axios.post(`${baseurl}/save`,{text})
    .then((data)=>{
        console.log(data)
        getalltodo(setalltodo)
    })
    .catch((err)=>{console.log(err)})
}
const updatetodo=(todoid,text,settext,setalltodo,setisupdating)=>{
    axios.post(`${baseurl}/update`,{_id:todoid,text})
    .then(({data})=>{
        settext("")
        setisupdating(false)
        getalltodo(setalltodo) 
    })
    .catch((err)=>{console.log(err)})

}
const deletetodo=(_id,settodo)=>{
    axios.post(`${baseurl}/delete`,{_id})
    .then(({data})=>{
        console.log(data)
        getalltodo(settodo)
    })
}
export {getalltodo,addtodo,updatetodo,deletetodo}