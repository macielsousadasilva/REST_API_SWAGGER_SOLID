import * as express from 'express';
const router = express.Router()

router.get('/dog', (req: express.Request, res: express.Response) => {
    res.json({
        message: `Hi Dog`
    })
})

module.exports = router
