import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import FooterBg from "../assets/40403653_1825843530827030_2374877569045495808_n.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';
function Footer() {
    return ( 
        <Box sx={{background:`linear-gradient(rgba(118,80,255,0.9), rgba(118,80,255,0.9)), url('${FooterBg}') no-repeat center / cover `,width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <Box sx={{width:'250px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'15px',mt:'45px'}}>
            <Typography sx={{fontSize:'23px',fontWeight:'500',color:'white',letterSpacing:'2px'}}>GTU</Typography>
            <Typography sx={{fontSize:'18px' ,color:'white'}}>Georgian Technical University</Typography>
            </Box>
            <hr style={{color:'#9184aa',width:'90px',height:'0px',opacity:'0.5',marginTop:'30px'}}/>
            <Box sx={{marginTop:'20px', display:'flex',flexDirection:"column",alignItems:'center',justifyContent:'center',gap:'15px'}}>
                <Box><Typography sx={{fontSize:'18px' ,color:'white',marginTop:'10px'}}>Contact with us</Typography></Box>
                <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'150px',}}>
                <FacebookIcon sx={{"&:hover":{color:'#001283'},width:'30px',height:'30px',color:"white"}}/>
                <TwitterIcon sx={{"&:hover":{color:'white',bgcolor:'blue'},width:'25px',height:'24px',bgcolor:'white',borderRadius:1}}/>
                <MailIcon sx={{"&:hover":{color:'white',bgcolor:'black'},width:'25px',height:'24px',bgcolor:'white',borderRadius:1,ml:'4px'}}/>
                </Box>
            </Box>
            <hr style={{color:'#9184aa',width:'90px',height:'0px',opacity:'0.5',marginTop:'30px'}}/>
            <Box sx={{display:'flex',flexDirection:'column',mt:'20px',alignItems:'center',gap:'20px',mb:"40px"}}>
            <Typography sx={{fontSize:'20px',fontWeight:'500',color:'white',letterSpacing:'1px'}}> About GTU</Typography>
            <ButtonGroup color="secondary" variant="text" aria-label="text button group">
                <Button sx={{color:'white',"&:hover":{bgcolor:'#7650ff'}}}>International Students</Button>
                <Button sx={{color:'white',"&:hover":{bgcolor:'#7650ff'}}}>Study at GTU</Button>
                <Button sx={{color:'white',"&:hover":{bgcolor:'#7650ff'}}}>Bachelor Study Programs</Button>
                <Button sx={{color:'white',"&:hover":{bgcolor:'#7650ff'}}}>Master Study Programs</Button>
                <Button sx={{color:'white',"&:hover":{bgcolor:'#7650ff'}}}>Enrollment procedures</Button>
                <Button sx={{color:'white',"&:hover":{bgcolor:'#7650ff'}}}>GTU Requisites</Button>
                <Button sx={{color:'white',"&:hover":{bgcolor:'#7650ff'}}}>Site Map</Button>
                <Button sx={{color:'white',"&:hover":{bgcolor:'#7650ff'}}}>Contact</Button>
            </ButtonGroup>
            </Box>
        </Box>
     );
}

export default Footer;