class Square extends React.Component {
    render() {
        return (
            <div className={"square " + this.props.type}></div>
        );
    }
}