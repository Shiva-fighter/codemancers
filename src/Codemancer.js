import React,{useEffect, useState} from 'react'
import "./App.css"

function Codemancer(){
    const [text, setText] = useState("");
    const [msg, setMsg] = useState([]);
    const [val, setVal] = useState("")
    const [gif, setGif] = useState([]);
    const [pic, setPic] = useState("");
   
    const handleSubmit = (e) =>{

        e.preventDefault();
        if(text !== ""){
            setMsg([ text , ...msg]);
            setText("");
        }
    }
    const getData = async () =>{
        const res = await fetch(`https://api.giphy.com/v1/stickers/search?api_key=tTniyMdfesc6ZrV80yHcskCLqtqNyQnc&q=${val}`);
        const response = await res.json();
        console.log(response.data);
        setGif(response.data);
    }
    useEffect(()=>{
        getData();
    },[val]);
    const handleClick= (id)=>{
      setPic(id);
      
      // alert(id,"clicked");
    }
    return (
        <>
        <div className='container'>
    
    <div className = "head">
       <div className = "content">
        <img className = "pic" src="https://th.bing.com/th/id/OIP.wVnmuEYqimTfNc9qgNC2bQAAAA?pid=ImgDet&w=193&h=193&c=7" alt="" />
        <p>Compose Post</p>
       </div>
       <div className = "content">
        <img className = "pic" src="https://th.bing.com/th/id/R.d99acb4c49c6c643030dced66fc7b6b8?rik=l4xs5pA0AF5VVg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_339013.png&ehk=qEuMr%2fPxozCqhH8Z8XsGggKw%2bMFBVWX4I%2bJzZEu03io%3d&risl=&pid=ImgRaw&r=0" alt="" />
        <p>Photo/Video Album</p>
       </div>
       <div className = "content">
        <img className = "pic" src="https://cdn4.iconfinder.com/data/icons/photography-and-video-ui-1/24/_live_video_camera-512.png" alt="" />
        <p>Live Videos</p>
       </div>
    </div>
    <div className ="main_body">
    <form onSubmit={ handleSubmit}>
    <img className = "profile" src="https://th.bing.com/th/id/OIP.8pQGc1uvCGFkeniunEv1rwHaHa?w=218&h=218&c=7&r=0&o=5&pid=1.7" alt="" />
          
          <input className='input_box' type = "text" placeholder = "Write something here..." onChange={(e)=>setText(e.target.value)} value = {text} cols="74" rows="6" />   
          <button type = "submit" className='btn2'>Add Post</button>        
        </form> 

        <div className = "second">
            
             <img style={{height:"76%"}} src = {pic}  />
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
    </div>
    
       
        
    </div>
    <div className='container_box'>
      
    <div className = "gif_box">
      
      <input className = "input_search" type="text" placeholder="Tag Friends"/> 
      <input className = "input_search" type = "text" placeholder="Check In"/>
        <input className = "input_search" type = "text"   placeholder='search gif' onChange={(e)=> setVal(e.target.value)}/>
        <input className = "input_search" type = "text" placeholder="The Event"/>
        
    </div>
    <div className = "last">
      
       <div className = "lowest">
        <button className = "btn">Only Me</button>
        <button className = "btn2">Post</button>
       </div>
       
    </div>
        {/* <div> */}
              {/* <input className='input_box1' style={{position:"fixed"}} type="text" placeholder='search gif' onChange={(e)=> setVal(e.target.value)}  /> */}
        {/* </div> */}
      <div className='emoji_box'>
        {

            gif.map((el)=>{
            console.log("value",el);
            return <>
            {/* <li>{el.title}</li> */}
           <img className='best_pic' src = {el.images.original.url} onClick = {()=>handleClick(el.images.original.url )}/>
            </>
            })
        }
      </div>
      </div>
  )

        </>
    )
}
export default Codemancer