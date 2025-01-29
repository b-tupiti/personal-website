export const BACKEND = process.env.BACKEND as string;

// will remove this
export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));