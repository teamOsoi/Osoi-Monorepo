import cimg1 from '/public/images/campaign/img-1.jpg'
import cimg2 from '/public/images/campaign/img-2.jpg'
import cimg3 from '/public/images/campaign/img-3.jpg'
import cS2img1 from '/public/images/campaign/img-4.jpg'
import cS2img2 from '/public/images/campaign/img-5.jpg'
import cS2img3 from '/public/images/campaign/img-6.jpg'

import cSimg1 from '/public/images/campaign/single/img-1.jpg'
import cSimg2 from '/public/images/campaign/single/img-2.jpg'
import cSimg3 from '/public/images/campaign/single/img-3.jpg'



const Campaign = [
    {
       Id:'1',
       cImg:cimg1,
       cImg2:cS2img1,
       cSimg:cSimg1,
       thumb:'Health Awareness Seminar',
       title:'Western Kenya: Promoting a Healthy Community',
       slug:'Support-for-Womans',
       date:'July 1, 2024',
       time:'15:00 - 19:00',
       location:'Bungoma, Kitale, Homabay',
       progress:'50',
       raised:'2000.00',
       goal:'4000.00',
    },
    {
       Id:'2',
       cImg:cimg2,
       cImg2:cS2img2,
       cSimg:cSimg2,
       thumb:'Small Business Workshop',
       title:'Empowering Local Entrepreneurs',
       slug:'Business-Earning',
       date:'July 22, 2025',
       time:'10:00 - 15:00',
       location:'Eldoret - Soi Market',
       progress:'80',
       raised:'2000.00',
       goal:'3000.00',
    },
    {
      Id:'3',
      cImg:cimg3,
      cImg2:cS2img3,
      cSimg:cSimg3,
      thumb:'Bridging the Opportunity Gap',
      title:"Children's Education Drive in Rural Areas",
      slug:'Political-Commitment',
      date:'July 5, 2023',
      time:'13:00 - 16:00',
      location:'Mandera and Isiolo county',
      progress:'90',
      raised:'2000.00',
      goal:'3000.00',
   }

]

export default Campaign;
