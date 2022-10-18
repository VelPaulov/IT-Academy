class Search extends HTMLElement {
    constructor() {
        super();
        this.data =  [
            'Albania',
            'Bahamas',
            'Armenia',
            'Belarus',
            'Brazil',
            'Cambodia',
            'Colombia',
            'Czech Republuc',
            'Estonia',
            'France',
            'Georgia',
            'Germany',
        ];
        this.value = '';
    }

    onSearch(evt) {
        this.value = evt.target.value;
        const data = this.data.filter(item => item.toLowerCase().includes(this.value));
        this.querySelector('.container').innerHTML = `
            <search-list data='${JSON.stringify(data)}'></search-list>
        `;
    }

    connectedCallback() {
        this.addEventListener('input', this.onSearch);
        this.render();
    }

    disconnectedCallback() {
        this.removeEventListener('input', this.onSearch);
    }

    render() {
        this.innerHTML = `
            <input
                type='text'
                placeholder='Type something...'
                value="${this.value}"
                /> 
                <div class="container">
                <search-list data='${JSON.stringify(this.data)}'></search-list>
                </div>
        `;
    }
}

customElements.define('user-search', Search);
