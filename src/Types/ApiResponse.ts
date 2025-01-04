export interface ApiResponse<T> {
    data: T;
    message: string;
    success: boolean;
    statusCode: number;
}
