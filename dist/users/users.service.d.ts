export interface User {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName?: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare class UsersService {
    private users;
    create(userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<User>;
    findByEmail(email: string): Promise<User | undefined>;
    findById(id: string): Promise<User | undefined>;
    findAll(): Promise<User[]>;
    update(id: string, updateData: Partial<Omit<User, 'id' | 'createdAt'>>): Promise<User | undefined>;
    delete(id: string): Promise<boolean>;
}
