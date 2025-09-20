/** @paper-design/shaders-react@0.0.53 */
import { Dithering } from '@paper-design/shaders-react';

/**
 * Code exported from Paper
 * https://app.paper.design/file/01K5GQCDWZA5GVJZD055XY768V?page=01K5GQCDX03K9S6V7Z189DGJ60&node=01K5GQHN3A5GF020KG3RNW2YWW
 * on Sep 20, 2025 at 12:44 AM.
 */
export default function DitheringShader() {
  return (
    <Dithering 
      colorBack="#00000000" 
      colorFront="#EB7960" 
      speed={0.32} 
      shape="simplex" 
      type="2x2" 
      pxSize={7.3} 
      scale={3.0} 
      frame={272396.48899995827} 
      style={{ 
        backgroundColor: '#EB5D40', 
        borderRadius: '0px', 
        flexShrink: '0', 
        height: '100vh', 
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1
      }} 
    />
  );
}
