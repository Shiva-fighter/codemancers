import React,{ useState} from 'react'
import "../App.css"

// const api = "https://api.giphy.com/v1/stickers/search?api_key=tTniyMdfesc6ZrV80yHcskCLqtqNyQnc&q="
function Input() {
    const [text, setText] = useState("");
    const [msg, setMsg] = useState([]);
   
    const handleSubmit = (e) =>{

        e.preventDefault();
        if(text !== ""){
            setMsg([ text , ...msg]);
            setText("");
        }
    }

    
  return (
    <div className='container'>Input
        <form onSubmit={ handleSubmit}>
            <textarea className='input_box' type = "textarea" placeholder = "Write something here..." onChange={(e)=>setText(e.target.value)} value = {text}/>
            <button type = "submit" style = {{ borderRadius:"10px",height:"30px", width: "80px", backgroundColor:"Blue", border:"none" }}>Add Post</button>
        </form>
        {
            msg.map((el)=>{
                return (
                    <>
                    <div className='content'>
                    <h3 >{el}</h3>
                    </div>
                    
                    </>
                )
            })
        }
        
    </div>
  )
}

export default Input