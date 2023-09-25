import './MyLabel.css';
export interface Props {
    /**
     * Text to display
     */
    label: string;
    /**
     * Label size
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    allCaps?: boolean;
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary';
    fontColor?: string;
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor }: Props) => import("react/jsx-runtime").JSX.Element;
