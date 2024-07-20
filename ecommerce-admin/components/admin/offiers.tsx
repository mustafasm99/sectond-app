import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '@/app/globals.css'
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import axios from "axios";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Card , CardHeader , Image , CardBody} from '@nextui-org/react';


// data types 
interface Offer {
     id: number;
     title: string;
     price: string; // Storing as string since it's returned as string from the API
     image: string;
     clicks: number;
     add_time: string; // ISO string format for date-time
     update_time: string; // Note: fixed typo 'update_time' from 'updaet_time'
   }

const Offiers = ()=>{
     // hoks for the data 
     const [data , setData] = useState<Offer[]>([])
     
     // fetch the data form the backend 
     useEffect(()=>{
          const get_offiers = async()=>{
               const res = await axios.get("http://127.0.0.1:8000/prodect/get_offiers")
               if (res.status == 200){
                    setData(res.data)
               }
          }
          get_offiers()
     } ,[])

     // main swiper in the main page 
     return (

          <div className='container-sm main-offer'>
          <Swiper 
               spaceBetween={30}
               centeredSlides={true}
               autoplay={
                    {delay:2500,disableOnInteraction:false}
               }
               pagination={{
                    clickable:true,
               }}
               navigation = {true}
               modules={[Autoplay , Pagination , Navigation]}
               className='Swiper'
          >
          {

               data.map((slid , index)=>(
                    <SwiperSlide key={index} >
                         <Card 
                              isFooterBlurred
                              radius='lg'
                              className='border-none'
                         >

                              <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
                                   <h3 className='text-tiny uppercase font-bold '>
                                        {slid.title}
                                   </h3>
                              </CardHeader>


                              <CardBody className='overflow-visible rounded-xl'>
                              <Image 
                                   alt="no image provided"
                                   className='object-cover'
                                   height={420}
                                   src= {"http://127.0.0.1:8000"+slid.image}
                                   width={'100%'}
                              />
                              </CardBody>

                              
                         </Card>
                    </SwiperSlide>
               ))

          }
          
          </Swiper>
          
          </div>


     )

}

export default Offiers