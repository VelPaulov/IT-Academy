import { Component } from "../Component/Component.js";

export class Button extends Component {

    componentDidMount() {
        this.addEventListener('click', () => {
            this.dispatch(this.props.eventtype);
        });
    }

    static get observedAttributes() {
        return ['eventtype'];
    }
    render() {
        return `
            <button type="button" class="btn btn-primary">Click</button>
        `;
    }
}
customElements.define('my-button', Button);
