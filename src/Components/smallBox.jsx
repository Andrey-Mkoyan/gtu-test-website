import { Box, Typography } from "@mui/material";

function SmallBox({day,month}) {
    return ( 
        <Box sx={{bgcolor:"#7650ff",width:'50px',height:'50px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center' }}> 
            <Typography sx={{color:"white",fontSize:"15px",fontWeight:'500'}} >{day}</Typography>
            <Typography sx={{color:'white'}}>{month}</Typography>
        </Box>
     );
}

export default SmallBox;