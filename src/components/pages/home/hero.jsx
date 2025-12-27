

export default function Hero(){

  return(
    <>

<div style={{
            height: '100vh',
            width: '100%',
            backgroundImage: 'url(https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?q=80&w=3456&auto=format&fit=crop)', // Placeholder
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
        }}>
            {/* Overlay for better text contrast if needed, or just pure visual */}
            <div style={{
                position: 'absolute',
                top: 0, 
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.3)'
            }} />
            
            <h1 style={{
                position: 'relative', 
                zIndex: 1, 
                color: 'white', 
                fontSize: '4rem', 
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                textAlign: 'center',
                maxWidth: '80%'
            }}>
                A CREATIVE SOUND STUDIO
            </h1>
        </div>
    
    
    </>
  )
}