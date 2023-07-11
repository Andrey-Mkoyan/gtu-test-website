import { Box } from "@mui/material";
import img1 from '../assets/mes-logo.png'
import img2 from '../assets/eqe (1).png'
import img3 from '../assets/naec-logo.png'
import img4 from '../assets/ggb.png'
import img5 from '../assets/erasmus-logo.png'
import img6 from '../assets/progeorgia.png'
import img7 from '../assets/iec.png'
import img8 from '../assets/lituanstika.png'
import img9 from '../assets/studmedia-logo.png'
import img10 from '../assets/store.png'
import img11 from '../assets/reg-en.png'
import img12 from '../assets/san_diego.jpg'
import Card from "./Card";
function Cards() {
    return (  
        <Box sx={{width:'80%',height:'500px',display:'flex',flexDirection:'column',gap:'25px',pl:'20%',mt:'130px'}}>
           <Box sx={{display:'flex',gap:'35px'}}>
           <Card img={img1}/>
            <Card img={img2}/>
            <Card img={img3}/>
           </Box>
            <Box sx={{display:'flex',gap:'35px'}}>
            <Card img={img4}/>
            <Card img={img5}/>
            <Card img={img6}/>
            </Box>
           <Box sx={{display:'flex',gap:'35px'}}>
           <Card img={img7}/>
            <Card img={img8}/>
            <Card img={img9}/>
           </Box>
            <Box sx={{display:'flex',gap:'35px'}}>
            <Card img={img10}/>
            <Card img={img11}/>
            <Card img={img12}/>

            </Box>



        </Box>
    );
}

export default Cards;