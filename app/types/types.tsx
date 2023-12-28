export interface Button {
    title: any;
    classes?: string;
    handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface Card {
    body?: Array<any>;
    handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}