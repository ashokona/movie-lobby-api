import { Request, Response, NextFunction } from "express";

// this function autherizes the user to access the api using actual jwt token
const checkAccess = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (token || req.method === "GET") {
        next();
    } else {
        res.status(401).json({ message: "Unauthorized" });
    }
}

export default checkAccess;