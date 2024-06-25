// import { NextApiRequest, NextApiResponse } from 'next';

import {} from 'next'
const ThermalPrinter = require('node-thermal-printer').printer;
const PrinterTypes = require('node-thermal-printer').types;

const printer = new ThermalPrinter({
  type: PrinterTypes.EPSON, // Change according to your printer type
  interface: '/dev/usb/lp0' // Change to your printer's interface
});
if(!printer){
    console.log("Printer Not Connected")
}else{
    console.log("Printer Conneted");
}

export default async (req, res ) => {
    console.log("api called",req.body)
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    console.log("inside try",req.body);
    // if (!text) {
    //     return res.status(400).json({ message: 'No text provided' });
    // }
    
    const{name,Adress,age,place}=req.body

    printer.alignCenter();
    printer.println(name);
    printer.println(Adress);
    printer.println(age);
    printer.println(place);
    printer.drawLine('*')
    printer.println("SSSSSSSSSSSSSSSS");
    printer.println("SSSSSSSSSSSSSSSS");
    printer.println("SSSSSSSSSSSSSSSS");
    printer.println("SSSSSSSSSSSSSSSS");
    printer.println("SSSSSSSSSSSSSSSS");
    printer.println("SSSSSSSSSSSSSSSS");
    printer.println("SSSSSSSSSSSSSSSS");
    printer.cut();
    printer.beep()
    printer.beep()
    printer.beep()
   const print = await printer.execute();
   if(print){
    console.log("sucess");
   }else{
    console.log("Error")
   }

    res.status(200).json({ message: 'Printed successfully' });
  } catch (error) {
    res.status(500).json({ message: `Error: ${error}` });
  }
};