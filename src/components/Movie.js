export const Filter = (props) => {
    return (
        <section
            style = {{ '--outline': props.selected && 'solid' }}
            onClick = { props.onClick }>
            <span>{props.title}</span>
        </section>
    );
};
