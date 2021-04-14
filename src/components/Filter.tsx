/* Instruments */
import { CSSProperties } from '../types';

export const Filter: React.FC<FilterProps> = (props) => {
    const style: CSSProperties = {
        '--outline': props.selected ? 'solid' : '',
    };

    return (
        <section
            style = { style }
            onClick = { props.onClick }>
            <span>{props.title}</span>
        </section>
    );
};

/* Types */
interface FilterProps {
    selected: boolean;
    title: string;
    onClick: () => void;
}
