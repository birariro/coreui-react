import React, { HTMLAttributes } from 'react';
export interface CCardImageOverlayProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * A string of all className you want applied to the base component. [docs]
     */
    className?: string;
}
export declare const CCardImageOverlay: React.ForwardRefExoticComponent<CCardImageOverlayProps & React.RefAttributes<HTMLDivElement>>;
