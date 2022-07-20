const sharp = require('sharp')

const pathSharp = "./public/images/Album/"

module.exports = (req, res, next) => {

    if (req.file) {
        const file = req.file    
        sharp(file.path)
            .resize({
                //ratio
                fit: sharp.fit.contain,
                height: 500,
                position: "centre",
                background: {
                    r: 255,
                    g: 255,
                    b: 255,
                    alpha: 0
                }
            })
            .webp({
                quality: 90
            })
            .toFile(pathSharp + file.filename.split('.').slice(0, -1).join('.') + ".webp", (err, info) => { })
        next()

    } else next()


}