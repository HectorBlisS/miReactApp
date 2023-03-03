export default function ChardCard ({name, image}) {
    return(
        <div style={{ width: 150, borderRadius: 9, background: '#FFFAF0', display: 'flex', flexDirection: 'column', overflow: 'hidden' , padding: 5, alignItems: 'center', justifyContent: 'center'}}>
           
           <img src={image} width="100" 
               style={{borderRadius: 5,
                      overflow: 'hidden',
                      objectFit: 'cover',
                      paddingTop: 5, 
                    }}/>
           <h2 style={{fontSize: 12,
                       backgroundColor: '#5F9EA0',
                       borderRadius: 50,
                       padding: 10,
                       color: '#000000',
                       

                       }}>{name}</h2>
        </div>
    )
}