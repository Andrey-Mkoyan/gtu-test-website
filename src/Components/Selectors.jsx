import { Box, Button, FormControl, InputLabel, Menu, MenuItem, NativeSelect, Select, makeStyles } from "@mui/material";

function Selectors() {


    return ( 
        <Box sx={{display:'flex',width:'80%',height:'48px',pl:'20%'}}>
            
            <Box sx={{display:'flex',gap:'10px',
        '& .MuiInputBase-root.MuiInput-root:before': {
            border: 'none'
        },width:'100%',height:'50px'}}>
 <NativeSelect
 sx={{color:'#7650ff',fontSize:'20px',fontWeight:'700',width:'180px',border:'10px',outline:'none'}}
    defaultValue={10}
    inputProps={{
      name: 'age',
      id: 'uncontrolled-native',
    }}
  >
    <option style={{width:'200px',border:'none'}} value={10}>INFORMATION</option>
    <option >History</option>
    <option >Rectors</option>
    <option >Regulation</option>
    <option >Structure</option>
    <option >GEP of GTU</option>
    <option >GTU Structural Units</option>
    <option >Faculties</option>
    <option >Charter of Legal Entity of Public Law - Georgian Technical University</option>
    <option >GTU Structural Units</option>
    <option >GTU Structural Units</option>
    <option >GTU Structural Units</option>
  </NativeSelect>
  <NativeSelect
   sx={{color:'#7650ff',fontSize:'20px',fontWeight:'700',width:'300px',border:'none',outline:'none'}}
    defaultValue={10}
    inputProps={{
      name: 'age',
      id: 'uncontrolled-native',
    }}
  >
    <option value={10}>UNIVERSITY GOVERNORS</option>
    <option value={20}>Deputy Rector</option>
    <option value={30}>Academic Council Members</option>
    <option value={30}>Head of the Administration</option>
    <option value={30}>Council of Representatives</option>
    <option value={30}>Quality Assurance Service</option>

  </NativeSelect>
  <NativeSelect
   sx={{color:'#7650ff',fontSize:'20px',fontWeight:'700',width:'360px'}}
    defaultValue={10}
    inputProps={{
      name: 'age',
      id: 'uncontrolled-native',
    }}
  >
    <option value={10}>RESEARCH AND DEVELOPMENT</option>
    <option value={20}>Introduction</option>
    <option value={30}>Why Georgia</option>
    <option value={30}>Faculties</option>
  </NativeSelect>
  <NativeSelect
   sx={{color:'#7650ff',fontSize:'20px',fontWeight:'700',width:'320px'}}
    defaultValue={10}
    inputProps={{
      name: 'age',
      id: 'uncontrolled-native',
    }}
  >
    <option value={10}>INTERNATIONAL STUDENTS</option>
    <option value={20}>Introduction</option>
    <option value={30}>Why Georgia</option>
    <option value={30}>Faculties</option>
    <option value={30}>Study</option>
    <option value={30}>E-Books</option>
    <option value={30}>English-language Educational Programs</option>
    <option value={30}>Russian-language Educational Programs</option>
    <option value={30}>Academic calendar</option>
    <option value={30}>How to apply</option>
    <option value={30}>Study at GTU</option>
    <option value={30}>Why Georgia</option>
    <option value={30}>Why Georgia</option>
  </NativeSelect>

 </Box>
        </Box>
     );
}

export default Selectors;