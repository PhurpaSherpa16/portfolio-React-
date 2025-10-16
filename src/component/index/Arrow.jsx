import EastIcon from '@mui/icons-material/East';

export default function Arrow({icon: Icon = EastIcon}) {

  return (
    <Icon sx={{width:'0px', height:'24px',
        overflow:'hidden',
        transition:'0.3s ease',
        '.buttonHero:hover &':{
            width:'32px',
        },
    }}/>
  )
}
