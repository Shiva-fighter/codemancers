import React, {useEffect, useState} from 'react'
// const api = `https://api.giphy.com/v1/stickers/search?api_key=tTniyMdfesc6ZrV80yHcskCLqtqNyQnc&q=hello`
function Search() {
    const [val, setVal] = useState("happy")
    const [gif, setGif] = useState([]);

    const getData = async () =>{
        const res = await fetch(`https://api.giphy.com/v1/stickers/search?api_key=tTniyMdfesc6ZrV80yHcskCLqtqNyQnc&q=${val}`);
        const response = await res.json();
        console.log(response.data);
        setGif(response.data);
    }
    useEffect(()=>{
        getData();
    },[val]);
  return (
    <div className='container_box'>Search
        <div>
              <input className='input_box1' style={{position:"fixed"}} type="text" placeholder='search gif' onChange={(e)=> setVal(e.target.value)}  />
        </div>
      <div className='emoji_box'>
        {

            gif.map((el)=>{
            console.log("value",el);
            return <>
            {/* <li>{el.title}</li> */}
           <img src = {el.images.original.url} />
            </>
            })
        }
      </div>
    </div>
  )
}

export default Search