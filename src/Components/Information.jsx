import { Accordion, AccordionDetails, AccordionSummary, Box, InputLabel, MenuItem, NativeSelect, Select, Typography } from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SmallBox from "./smallBox";
function Information({day,month}) {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    return ( 
        <Box sx={{height:'700px',mt:'50px' ,display:'flex',pl:'20%',gap:'100px'}}>
            <Box sx={{display:'flex',flexDirection:'column',width:'350px'}}>
            <Accordion defaultExpanded>
        <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{"&:hover":{color:"#7650ff",fontWeight:'700',cursor:'pointer'}}}>For Students</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{"&:hover":{color:"#7650ff",cursor:'pointer'},fontSize:'15px'}}> English-language Educational Programs</Typography>
          <hr style={{color:'#9184aa',width:'270px',height:'0px',opacity:'0.5'}}/>
          <Typography sx={{"&:hover":{color:"#7650ff",cursor:'pointer'},fontSize:'15px'}}> Russian-language Educational Programs </Typography>
          <hr style={{color:'#9184aa',width:'270px',height:'0px',opacity:'0.5'}}/>
          <Typography sx={{"&:hover":{color:"#7650ff",cursor:'pointer'},fontSize:'15px'}}> Educational Programs</Typography>
          <hr style={{color:'#9184aa',width:'270px',height:'0px',opacity:'0.5'}}/>
          <Typography sx={{"&:hover":{color:"#7650ff",cursor:'pointer'},fontSize:'15px'}}> Instruction for formation of contingent and mobility of GTU students </Typography>
          <hr style={{color:'#9184aa',width:'270px',height:'0px',opacity:'0.5'}}/>
          <Typography sx={{"&:hover":{color:"#7650ff",cursor:'pointer'},fontSize:'15px'}}>Russian Version </Typography>
          <hr style={{color:'#9184aa',width:'270px',height:'0px',opacity:'0.5'}}/>
          <Typography sx={{"&:hover":{color:"#7650ff",cursor:'pointer'},fontSize:'15px'}}>Instructions of Study Process Management in the Georgian Technical University </Typography>
          <hr style={{color:'#9184aa',width:'270px',height:'0px',opacity:'0.5'}}/>
          <Typography sx={{"&:hover":{color:"#7650ff",cursor:'pointer'},fontSize:'15px'}}> Russian Version</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{"&:hover":{color:"#7650ff",fontWeight:'700',cursor:'pointer'}}}>International</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{"&:hover":{color:"#7650ff",cursor:'pointer'},fontSize:'15px'}}>Erasmus Student Network - ESN TBILISI ISU</Typography>
          <hr style={{color:'#9184aa',width:'270px',height:'0px',opacity:'0.5'}}/>
          <Typography sx={{"&:hover":{color:"#7650ff",cursor:'pointer'},fontSize:'15px'}}>Students' Guidebook</Typography>
          <hr style={{color:'#9184aa',width:'270px',height:'0px',opacity:'0.5'}}/>
          <Typography sx={{"&:hover":{color:"#7650ff",cursor:'pointer'},fontSize:'15px'}}>International Relations and Standards Office</Typography>
          <hr style={{color:'#9184aa',width:'270px',height:'0px',opacity:'0.5'}}/>
          <Typography sx={{"&:hover":{color:"#7650ff",cursor:'pointer'},fontSize:'15px'}}>To grant the right of studying without passing Unified Entry Exams/Graduate Record Exams for the Foreign Citizens or The Georgian Citizens Living Abroad</Typography>

        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography sx={{"&:hover":{color:"#7650ff",fontWeight:'700',cursor:'pointer'}}}>For Academic Staff</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography sx={{"&:hover":{color:"#7650ff",cursor:'pointer'},fontSize:'15px'}}>Comprehensive English Georgian Online Dictionary </Typography>
            <hr style={{color:'#9184aa',width:'270px',height:'0px',opacity:'0.5'}}/>
            <Typography sx={{"&:hover":{color:"#7650ff",cursor:'pointer'},fontSize:'15px'}}>Interfaculty Technology & Product Design Labs at GTU within ENGITEC and other ongoing TEMPUS Projects</Typography>
            <hr style={{color:'#9184aa',width:'270px',height:'0px',opacity:'0.5'}}/>
            <Typography sx={{"&:hover":{color:"#7650ff",cursor:'pointer'},fontSize:'15px'}}>Center of Excellence in Teaching and Learning</Typography>
            <hr style={{color:'#9184aa',width:'270px',height:'0px',opacity:'0.5'}}/>
            <Typography sx={{"&:hover":{color:"#7650ff",cursor:'pointer'},fontSize:'15px'}}>Gallery Universe</Typography>
            <hr style={{color:'#9184aa',width:'270px',height:'0px',opacity:'0.5'}}/>
   
        </AccordionDetails>
      </Accordion>
           
            </Box>
                <Box sx={{width:'700px',display:'flex',flexDirection:'column',gap:'20px',position:'relative',height:'400px'}}>
                    <Box sx={{display:'flex',alignItems:'center',gap:'15px'}}><SmallBox day={"04"} month={"Jul"}/><Typography sx={{"&:hover":{color:"#7650ff",fontWeight:'500',cursor:'pointer'}}}>International Scientific Conference “Natural Resources <br/>and Resorts as Sustainable Development Factors”</Typography></Box>
                    <Box sx={{display:'flex',alignItems:'center',gap:'15px'}}><SmallBox day={"03"} month={"Jul"}/><Typography sx={{"&:hover":{color:"#7650ff",fontWeight:'500',cursor:'pointer'}}}>The International Student Conference of the Faculty of Civil <br/>Engineering of GTU will be held on July 20</Typography></Box>
                    <Box sx={{display:'flex',alignItems:'center',gap:'15px'}}><SmallBox day={"16"} month={"Jun"}/><Typography sx={{"&:hover":{color:"#7650ff",fontWeight:'500',cursor:'pointer'}}}>GGSB Lecture Week 2023</Typography></Box>
                    <Box sx={{display:'flex',alignItems:'center',gap:'15px'}}><SmallBox day={"08"} month={"Jun"}/><Typography sx={{"&:hover":{color:"#7650ff",fontWeight:'500',cursor:'pointer'}}}>Sakartvelo technikos universiteto Lietuvių kalbos ir kultūros <br/> centrui Tbilisyje suteiktas prof. Vido Kavaliausko vardas</Typography></Box>
                    <Box sx={{display:'flex',alignItems:'center',gap:'15px'}}><SmallBox day={"08"} month={"Jun"}/><Typography sx={{"&:hover":{color:"#7650ff",fontWeight:'500',cursor:'pointer'}}}>Lithuanian Language and Culture Center in Georgian Technical University was<br/> given the name of Prof. Vidas Kavaliauskas</Typography></Box>
                    <Typography sx={{position:'absolute',right:'35px',bottom:'0px',color:"#4b2e83",fontWeight:'500',cursor:'pointer',"&:hover":{color:'#7650ff'}}}>All News</Typography>
                </Box>
        </Box>
     );
}

export default Information;