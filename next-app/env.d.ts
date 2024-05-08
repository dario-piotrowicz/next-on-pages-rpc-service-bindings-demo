interface CloudflareEnv {
    RPC_WORKER: {
        sum: (a: number, b: number) => Promise<number>;
    }
}
