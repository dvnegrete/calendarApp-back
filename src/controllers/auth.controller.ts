import { Response, Request } from "express";

export const createUser = (req: Request, res: Response) => {
    const { name, email, password } = req.body;

        res.status(201).json({
            message: 'register',
            name,
            email
        });

}

export const loginUser = (req: Request, res: Response) => {
    const { email } = req.body;

    res.status(200).json({
        message: 'Login route',
        email
    });
}

export const renewToken = (req: Request, res: Response) => {
    res.json({
        message: 'Renew token'
    });
}

