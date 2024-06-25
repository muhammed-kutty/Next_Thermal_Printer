import { useState } from 'react';
import axios from 'axios';

export default function Print() {
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');

  const handlePrint = async () => {
    try {


        const getresp = await axios.get('https://printrerrr-main.onrender.com/print')

        if(getresp.data.success){
            console.log("response = ",getresp.data.data);
              const body= getresp.data.data
              const response = await axios.post('/api/print', body,{
                headers: {
                  'Content-Type': 'application/json',
                },
              });
        
              console.log("after",response);
              setMessage(response.data.message);
        }
        
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <h1>Thermal Printer</h1>
      <button style={{width:150,height:30 , fontSize:20,color:"white",backgroundColor:"black" , border:"none", borderRadius:5}} onClick={handlePrint}>Print</button>
      <p>{message}</p>
    </div>
  );
}