const loadImage = (src) => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = src;
        image.addEventListener('load', () => {
            resolve(image);
        });
        image.addEventListener('error', () => {
            reject(new Error('can not load the file'));
        });
    });
    
    // const image = new Image();
    // image.src = src;
    // image.addEventListener('load', () => {
    //     callback(null, image);
    // });
    // image.addEventListener('error', () => {
    //     callback(new Error('can not load the file'));
    // })
};

const src = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";

// loadImage(src, (err, img) => {
//     if(!err) {
//         loadImage(src, (err, img) => {

//         })
//     }
// })

// Promise with then/catch/finally:
// loadImage(src)
//     .then((image) => image)
//     .catch((err) => {
//         console.log(err.message);
//     })
//     .finally(() => {
//         console.log('finally');
//     });

// Promise with async/await:
const load = async () => {
    const data = await loadImage(src);
    console.log(data);
}

load();