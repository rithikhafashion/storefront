const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
    {
        url: 'https://raw.githubusercontent.com/rithikhafashion/storefront/main/images/saree1.jpg',
        filename: 'saree1.jpg'
    },
    {
        url: 'https://raw.githubusercontent.com/rithikhafashion/storefront/main/images/saree2.jpg',
        filename: 'saree2.jpg'
    },
    {
        url: 'https://raw.githubusercontent.com/rithikhafashion/storefront/main/images/saree3.jpg',
        filename: 'saree3.jpg'
    }
];

const downloadImage = (url, filename) => {
    const filepath = path.join(__dirname, 'src', 'images', filename);
    const file = fs.createWriteStream(filepath);
    
    https.get(url, response => {
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log(`Downloaded ${filename}`);
        });
    }).on('error', err => {
        fs.unlink(filepath);
        console.error(`Error downloading ${filename}:`, err.message);
    });
};

images.forEach(img => downloadImage(img.url, img.filename));
