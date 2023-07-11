import { Box } from "@mui/material";

function Card({img}) {
    return ( 
     <Box sx={{"&:hover":{transform:"scale(0.99)",border:"solid 1px black",cursor:"pointer"},width:'400px',height:'90px',display:'flex',justifyContent:'center',alignItems:'center',border:"solid 1px #b4b2b2"}}>
        <img src={img} />
     </Box>
     );
}

export default Card;