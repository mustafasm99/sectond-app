"use client"

import {Card , CardFooter , Image , Button} from "@nextui-org/react"
import axios from "axios";
import { useState } from "react";

const cards = async ()=>{

     // Hoks
     const [cards , setCards] = useState([])

     const res = await axios.get("127.0.0.1:8000/prodect/get_offiers")
     if (res.status == 200){

     }


}