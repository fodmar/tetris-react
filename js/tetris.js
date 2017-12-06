class Tetris extends React.Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
        this.timer = setInterval(this.tick.bind(this), this.props.interval);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState({});
    }
	
	render() {
		return <Board width={this.props.width} height={this.props.height} />;
	}
}