// src/types/react-image-lightbox.d.ts
declare module 'react-image-lightbox' {
  import * as React from 'react';

  export interface LightboxProps {
    mainSrc: string;
    nextSrc?: string;
    prevSrc?: string;
    onCloseRequest: () => void;
    onMovePrevRequest?: () => void;
    onMoveNextRequest?: () => void;
    imageTitle?: string;
    imageCaption?: string;
    enableZoom?: boolean;
    reactModalStyle?: object;
    animationDuration?: number;
  }

  const Lightbox: React.ComponentType<LightboxProps>;
  export default Lightbox;
}
