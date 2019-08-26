const  User = require('../model/Users');

exports.Index = async (req, res) => {
    try {
        const user = await User.find({})
        res.render('index', {
            users: user
        })
    } catch (error) {
        console.log(error)
    }
}

exports.Post = (req, res) => {
    res.render('post')
}

exports.Posted = async (req, res) => {
    console.log(req.body)
    const title = req.body.title
    const description = req.body.description
    const image = req.file
    console.log(req.file)
    const imageUrl = image.path

    const user = new User({
        title: title,
        description: description,
        image: imageUrl
    })
    try {
        await user.save()
        res.redirect('/')
    } catch (err) {
        console.log(err)
    }
}