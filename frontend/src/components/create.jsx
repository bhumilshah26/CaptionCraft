import React from 'react'
import axios from "axios"
const Create = () => {

let fileName; // var was changed to let
//   passing the parameter might work but not making it
  const generate = async (fileName) => {
    try {
        const response = await axios.get('http://localhost:5000/generate/')
        console.log(response.data.text)
    }
    catch(e) {
        console.log("Error" + e.message)
    }
  }

  const getfilename = (event) => {
    fileName = event.target.files[0]
    console.log(fileName)
  }
  return (
    <div>
      <input type="file" onChange={getfilename} accept='image/*'/><br />
      <input type="button" value={"Generate"} onClick={generate}/>
    </div>
  )
}

export default Create
