import { Router } from "express";


export class AppRoutes {

    static get routes(): Router {
        const router = Router();

        //Routes
        router.use("/api/users" , );
        //router.use("/api/auth" , );
        //router.use("/api/posts" , );
        //router.use("/api/comments" , );
        //router.use("/api/message" , );
        //router.use("/api/notifications" , );

        return router;
    }
}