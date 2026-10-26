import { useState } from 'react';

// Componente reutilizable: Botón estilo Videojuego
function BotonGamer({ texto, onClick, color }) {
  // Configuración de colores dinámicos
  const colores = {
    rojo: { bg: '#ff3366', shadow: '#b3002d' },
    verde: { bg: '#00e676', shadow: '#00994d' },
    azul: { bg: '#00b0ff', shadow: '#0077b3' }
  };

  const estiloSeleccionado = colores[color] || colores.azul;

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: estiloSeleccionado.bg,
        color: '#ffffff',
        border: '3px solid #ffffff',
        borderRadius: '8px',
        padding: '12px 24px',
        fontSize: '16px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        cursor: 'pointer',
        boxShadow: `0px 6px 0px ${estiloSeleccionado.shadow}, 0px 8px 15px rgba(0,0,0,0.5)`,
        transition: 'all 0.1s ease',
        margin: '10px',
        fontFamily: "'Courier New', Courier, monospace"
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = 'translateY(4px)';
        e.currentTarget.style.boxShadow = `0px 2px 0px ${estiloSeleccionado.shadow}`;
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = 'translateY(0px)';
        e.currentTarget.style.boxShadow = `0px 6px 0px ${estiloSeleccionado.shadow}, 0px 8px 15px rgba(0,0,0,0.5)`;
      }}
    >
      {texto}
    </button>
  );
}

// Componente Principal: Interfaz del Juego
export default function App() {
  const [vida, setVida] = useState(100);

  const recibirDanio = () => setVida((prev) => Math.max(0, prev - 20));
  const curar = () => setVida((prev) => Math.min(100, prev + 15));

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#1a1a2e',
      color: '#e94560',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Courier New', Courier, monospace",
      padding: '20px'
    }}>
      {/* Contenedor principal de la pantalla del juego */}
      <div style={{
        backgroundColor: '#16213e',
        border: '4px solid #0f3460',
        borderRadius: '16px',
        padding: '40px',
        textAlign: 'center',
        boxShadow: '0 0 20px rgba(233, 69, 96, 0.3)',
        maxWidth: '400px',
        width: '100%'
      }}>
        <h1 style={{ color: '#00fff5', margin: '0 0 10px 0', fontSize: '24px' }}>
          🎮 Fz_Jugador 🎮
        </h1>

        {/* Barra de Vida */}
        <div style={{ margin: '20px 0' }}>
          <p style={{ color: '#ffffff', marginBottom: '8px' }}>SALUD: {vida} HP</p>
          <div style={{
            width: '100%',
            height: '24px',
            backgroundColor: '#0f3460',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '2px solid #ffffff'
          }}>
            <div style={{
              width: `${vida}%`,
              height: '100%',
              backgroundColor: vida > 30 ? '#00e676' : '#ff3366',
              transition: 'width 0.3s ease, background-color 0.3s ease'
            }} />
          </div>
        </div>

        {/* Componentes de botones interactivos */}
        <div style={{ marginTop: '30px' }}>
          <BotonGamer 
            texto="⚔️ Recibir Daño" 
            color="rojo" 
            onClick={recibirDanio} 
          />
          <BotonGamer 
            texto="🧪 Usar Poción" 
            color="verde" 
            onClick={curar} 
          />
        </div>
      </div>
    </div>
  );
}