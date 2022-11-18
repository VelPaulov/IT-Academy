import { Component } from "../Component/Component.js";

export class Menu extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
        };
    }

    static get observedAttributes() {
        return ['items'];
    }

    componentDidMount() {
        window.addEventListener('toggle-menu', () => {
            this.setState(state => {
                return {
                    ...state,
                    isOpen: state.isOpen ? false : true,
                }
            })
        })
    }

    render() {
        const items = JSON.parse(this.props.items);
        return `
            <div class="menu container bg-danger col-2 py-4 position-absolute ${
                this.state.isOpen ? 'open' : 'closed'
            }">
                <div class="list-group">
                    ${items.map(item => {
                        return `<a href="${item.href}" class="list-group-item list-group-item-action">${item.label}</a>`
                    })}
                </div>
            </div>
        `
    }
}

customElements.define('my-menu', Menu);