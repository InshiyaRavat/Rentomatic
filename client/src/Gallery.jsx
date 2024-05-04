import React,{useState} from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";


const Gallery=(props)=>{
    const images=[...props.images2];
    const [data,setData]=useState({img:'',i:0})
    const viewImage=(img,i)=>{
        setData({img,i})
    }
    const imgAction=(action)=>{
        let i=data.i;
        if(action==='next-img'){
            setData({img:images[i+1],i:i+1});
        }
        if(action==='prev-img'){
            setData({img:images[i-1],i:i-1});
        }
        if(!action){
            setData({img:'',i:0});
        }
    }
    return(
        <>
        {
            data.img &&
            <div style={{
                width:'100%',
                height:'100%',
                background:'white',
                position:'absolute',
                // display:'flex',
                // justifyContent:'center',
                // alignContent:'center',
                overflow:'hidden',
            }}> 
                <button onClick={()=>imgAction()} style={{position:'absolute',top:'10px',right:'0px'}}>X</button>
                <button onClick={()=>imgAction('prev-img')} >prev</button>
                <img src={data.img} style={{width:'auto',maxWidth:'80%',maxHeight:'80%'}}/>
                <button onClick={()=>imgAction('next-img')} >next</button>
            </div>
        }
        <div style={{padding:'10px'}}>
                <ResponsiveMasonry
                        columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                    >
                        <Masonry gutter="2px">
                            {images.map((image, i) => (
                                <img
                                    key={i}
                                    src={image}
                                    style={{width: "100%", display: "block",cursor:"pointer"}}
                                    alt=""
                                    onClick={()=>viewImage(image,i)}
                                />
                            ))}
                        </Masonry>
                    </ResponsiveMasonry>
            </div>
        </>
    );
};

export default Gallery;