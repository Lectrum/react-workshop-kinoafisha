export const Filter = (props) => {
    const style = {
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
