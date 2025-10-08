import React, { useState } from 'react';

function Imageentity(){
    const [imagePath, setImagePath] = useState(null);
    const getData = (event) => {
        const file = event.target.files[0];
        // 1.url based accessing where we will get blob img (tempoorary img)
        // const path = URL.createObjectURL(file);
        // 2.use FileReader method by creating object of it and accessing encrypted version of base 64 img
        const reader=new FileReader();
        reader.readAsDataURL(file);
        reader.onload=()=>{
            setImagePath(reader.result)
        }
        // setImagePath(path);
    }
    return(
        <>
            <input type="file" onChange={getData} />
            {imagePath ?<img className="myimage" src={imagePath} alt="preview" />:<></>}
        </>
    )

}
export default Imageentity;