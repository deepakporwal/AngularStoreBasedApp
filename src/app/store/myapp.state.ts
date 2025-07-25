export interface User {
    id: string;
    name: string;
    email: string;
}

export interface MyAppState {
    user: User[]; // Changed to an array of User objects
    isAuthenticated: boolean;
    isLoaded: boolean;
    error: string | null;
}