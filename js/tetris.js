class Tetris extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.timer.start(this.run.bind(this), this.props.interval);
        this.props.keyhandler.register(this.props.keyhandler.getTetrisKeys(), this.handleKey.bind(this));
    }

    componentWillUnmount() {
        this.props.timer.stop();
        this.props.keyhandler.unregisterAll();
    }

    handleKey(e) {
        console.log(e);
        console.log(this.props.figureGenerator.generate(2,3));
    }
    
    run() {
        this.setState({});
    }
    
    render() {
        return <Board width={this.props.width} height={this.props.height} />;
    }
}