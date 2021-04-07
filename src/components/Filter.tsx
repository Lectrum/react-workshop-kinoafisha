/* Instruments */
import { ICSSProperties } from '../types';

export const Filter: React.FC<FilterProps> = (props) => {
    const style: ICSSProperties = {
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
