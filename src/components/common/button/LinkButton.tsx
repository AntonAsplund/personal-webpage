import { Link } from '@tanstack/react-router';
import style from './LinkButton.module.scss';

/** Visual variants a LinkButton can render as. */
export type LinkButtonTypes = 'primary' | 'secondary' | 'ghost' | 'link';

type LinkButtonProps = {
    type?: LinkButtonTypes;
    target: string;
    linkText: string;
    classNames?: string[];
};

export const LinkButton = ({ type = 'primary', target, linkText, classNames = [] }: LinkButtonProps) => {
    const classList = [style['link-button'], style[type], ...classNames]
        .filter(Boolean)
        .join(' ');

    return (
        <Link className={classList} to={target} activeProps={{ className: style['active'] }}>
            {linkText}
        </Link>
    );
}
