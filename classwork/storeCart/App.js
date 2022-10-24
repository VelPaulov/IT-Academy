import './Card.js';
import './Cart.js';

class App extends HTMLElement {
    constructor() {
        super();
        this.data = [
            {
                id: 1,
                title: 'Product #1',
                preview: './images/01.jpg',
                description: 
                    'В Xiaomi 11T есть все для Вашего комфорта: это и профессиональная камера на 108 Мп, AMOLED дисплей с частотой обновления 120 Гц, супермощный процессор и турбо-зарядка на 67W.',
                price: 200,
            },
            {
                id: 2,
                title: 'Product #2',
                preview: './images/02.jpg',
                description: 
                    'В Xiaomi 11T есть все для Вашего комфорта: это и профессиональная камера на 108 Мп, AMOLED дисплей с частотой обновления 120 Гц, супермощный процессор и турбо-зарядка на 67W.',
                price: 210,
            },
            {
                id: 3,
                title: 'Product #3',
                preview: './images/03.jpg',
                description: 
                    'В Xiaomi 11T есть все для Вашего комфорта: это и профессиональная камера на 108 Мп, AMOLED дисплей с частотой обновления 120 Гц, супермощный процессор и турбо-зарядка на 67W.',
                price: 230,
            },
            {
                id: 4,
                title: 'Product #4',
                preview: './images/04.jpg',
                description: 
                    'В Xiaomi 11T есть все для Вашего комфорта: это и профессиональная камера на 108 Мп, AMOLED дисплей с частотой обновления 120 Гц, супермощный процессор и турбо-зарядка на 67W.',
                price: 240,
            },
        ];
    }

    connectedCallback() {
        this.render();
    }

    

    render() {
        this.innerHTML = `
        <div class='container mt-5 mb-5'>
            <div class='col-12'>
                <it-cart></it-cart>
            </div>
        </div>
        <div class="container">
            <div class="row">
                ${this.data.map((item) => {
                    return `
                        <div class="col mt-5">
                            <it-card data='${JSON.stringify(item)}'></it-card>
                        </div>
                    `
                }).join(' ')}
            </div>
        </div>
    `
    }
}

customElements.define('it-app', App);