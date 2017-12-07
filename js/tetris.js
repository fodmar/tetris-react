class Tetris extends React.Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
        this.props.timer.start(this.run.bind(this), this.props.interval);
    }

    componentWillUnmount() {
        this.props.timer.stop();
    }

    run() {
        this.setState({});
    }
	
	render() {
		return <Board width={this.props.width} height={this.props.height} />;
	}
}