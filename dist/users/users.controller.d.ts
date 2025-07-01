import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getProfile(req: any): Promise<import("./users.service").User | undefined>;
    getMe(req: any): Promise<import("./users.service").User | undefined>;
}
