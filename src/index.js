import debounce from 'lodash.debounce';

export default function debounceRender(Component, ...debounceArgs) {
    return class DebouncedContainer extends Component {
        constructor(props) {
            super(props);

            this.state = {
                props
            };
        }

        componentWillReceiveProps(props) {
            this.shouldRender = false;
            this.updateState(props);
        }

        shouldComponentRender() {
            return this.shouldRender;
        }

        updateState = debounce((props) => {
            this.shouldRender = true;
            this.setState({
                props
            });
        }, ...debounceArgs);

        shouldComponentUpdate() {
            return this.shouldRender;
        }

        render() {
            return <Component { ...this.state.props } />;
        }
    }
}