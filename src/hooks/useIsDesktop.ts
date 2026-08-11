import { DESKTOP_WIDTH } from '../styles/breakpoints';
import { useMediaQuery } from './useMediaQuery';

export const useIsDesktop = (): boolean =>
    useMediaQuery(`(min-width: ${DESKTOP_WIDTH}px)`);