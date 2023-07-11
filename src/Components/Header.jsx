import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import logo from "../assets/Logo.svg"
import SearchIcon from '@mui/icons-material/Search';
function Header() {
    return ( 
        <>
        <Box  sx={{display:'flex',width:'100%',height:'100px',bgcolor:'#7650ff',justifyContent:'space-around'}}>
           <Box sx={{display:'flex',width:'350px',alignItems:'center' ,justifyContent:'space-between',ml:'150px'}}>
           <img src={logo}/>
            <Typography sx={{fontSize:'20px',color:'white'}}>georgian technical university</Typography>
           </Box>
           <Box sx={{display:'flex',alignItems:'center'}}>
           <ButtonGroup variant="text" aria-label="text button group">
                <Button sx={{color:'white',"&:hover":{bgcolor:'#7650ff'}}}>Library</Button>
                <Button sx={{color:'white',"&:hover":{bgcolor:'#7650ff'}}}>International Relations</Button>
                <Button sx={{color:'white',"&:hover":{bgcolor:'#7650ff'}}}>Contact</Button>
                <Button sx={{color:'white',"&:hover":{bgcolor:'#7650ff'}}}>Search</Button>
                <Button sx={{color:'white',"&:hover":{bgcolor:'#7650ff'},pl:'20px'}}><SearchIcon/></Button>
            </ButtonGroup>
           </Box>
        </Box>
        </>
     );
}

export default Header;