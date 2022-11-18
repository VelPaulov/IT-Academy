import { Component } from "./Component/Component.js";
import './Menu/Menu.js';
import './Button/Button.js';

export class App extends Component {
    constructor() {
        super();
        this.state = {
            items: [
                {
                    label: "link1", 
                    href: "#",
                },
                {
                    label: "link2", 
                    href: "#",
                },
                {
                    label: "link3", 
                    href: "#",
                },
                {
                    label: "link4", 
                    href: "#",
                },
            ],
        }
    }

    render() {
        const items = JSON.stringify(this.state.items);
        return `
            <my-button eventtype="toggle-menu"></my-button>
            <my-menu items='${items}'></my-menu>
        `;
    }
}

customElements.define('my-app', App);
