import * as express from 'express';
import { Request, Response } from 'express';

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
    res.json({
        "hello": "world"
    });
});

export { router as ApiRouter };