import './Card.js';
import './Cart.js';

class App extends HTMLElement {
    constructor() {
        super();
        this.data = [
            {
                id: 1,
                title:"Product #1",
                preview: "./images/01.jpg",
                description: 
                    "Mi 11 Lite 5G NE выполнен в трендовом дизайне 2021 года и представлен в четырех вариантах расцветки: Peach Pink, Bubblegum Blue, Boba Black и Snowflake White. Обладая толщиной в 6.81 мм и весом 159 грамм, он идеально лежит в руке, имеет практически безрамочный дисплей с небольшим вырезом под селфи-камеру. С этим смартфоном Вы будете чувствовать себя комфортно при любых обстоятельствах.",
                price: 200,
            },
            {
                id: 2,
                title: "Product #2",
                preview: "./images/02.jpg",
                description: 
                    "В Xiaomi 11T есть все для Вашего комфорта: это и профессиональная камера на 108 Мп, AMOLED дисплей с частотой обновления 120 Гц, супермощный процессор и турбо-зарядка на 67W.",
                price: 220,
            },
            {
                id: 3,
                title: "Product #3",
                preview: "./images/03.jpg",
                description: 
                    "Почувствуйте себя героем фильма используя непревзойденные фото и видео возможности Вашего нового смартфона. Поделитесь своими воспоминаниями с друзьями и подписчиками.",
                price: 250,
            },
            {
                id: 4,
                title: "Product #4",
                preview: "./images/04.jpg",
                description: 
                    "Mi 11 Lite 5G NE выполнен в трендовом дизайне 2021 года и представлен в четырех вариантах расцветки: Peach Pink, Bubblegum Blue, Boba Black и Snowflake White. Обладая толщиной в 6.81 мм и весом 159 грамм, он идеально лежит в руке, имеет практически безрамочный дисплей с небольшим вырезом под селфи-камеру. С этим смартфоном Вы будете чувствовать себя комфортно при любых обстоятельствах.",
                price: 234,
            },
            {
                id: 5,
                title: "Product #5",
                preview: "./images/05.jpg",
                description: 
                    "Mi 11 Lite 5G NE выполнен в трендовом дизайне 2021 года и представлен в четырех вариантах расцветки: Peach Pink, Bubblegum Blue, Boba Black и Snowflake White. Обладая толщиной в 6.81 мм и весом 159 грамм, он идеально лежит в руке, имеет практически безрамочный дисплей с небольшим вырезом под селфи-камеру. С этим смартфоном Вы будете чувствовать себя комфортно при любых обстоятельствах.",
                price: 300,
            },
        ]
    }

    connectedCallback() {
        this.render();
    }

    render() {
        // this.innerHTML = this.data.map((item) => {
        //     return `<it-card data='${JSON.stringify(item)}'></it-card>`
        // }).join(' ');
        this.innerHTML = `
        <div class='container mt-5 mb-5'>
            <div class='col-12'>
                <it-cart></it-cart>
            </div>
        </div>
        <div class=container'>
            <div class='row'>
                ${this.data.map((item) => {
                    return `
                        <div class='col mt-5'>
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