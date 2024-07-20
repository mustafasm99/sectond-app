import React, { useEffect, useRef, useState } from 'react';
import axios from "axios";
import {Card, CardFooter, Image, Button} from "@nextui-org/react";


interface items{
     id  : number;
     title : string;
     image : string;
     quintety : number;
     cell_count : number;
     add_time : string;
}

const ProdectGrids = ()=>{
     
     const [data , setData] = useState<items[]>([])

     useEffect(()=>{
          const get_items = async()=>{
               const res = await axios.get("http://127.0.0.1:8000/prodect/get_all_prodects")
               if (res.status == 200){
                    setData(res.data)
                    console.log(res.data);
                    
               }
          }
          get_items()
     } , [])


     return (
          <div className='main-grid container-sm  grid grid-flow-col-dense auto-rows-max my-5 mx-auto'>
               {
                    data.map((item , index)=>(
                         <div key={index} className='w-[calc(350px)] mr-5 my-5'>
                              <Card 
                              isFooterBlurred
                              radius='lg'
                              className='border-none'
                              fullWidth={false}
                         
                              >
                                   <Image 
                                   alt = "no image provide"
                                   className='object-cover'
                                   height={450}
                                   width={350}
                                   src={'http://127.0.0.1:8000'+item.image}
                                   />
                                   <CardFooter className='justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(350px_-_8px)] shadow-small ml-1 z-10'>
                                   <p className='text-white'>{item.title}</p>
                                   </CardFooter>

                              

                              </Card>
                         </div>
                    ))
               }
          </div>
     )
}

export default ProdectGrids