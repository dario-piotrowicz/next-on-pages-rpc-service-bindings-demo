
import { WorkerEntrypoint } from "cloudflare:workers";

export interface Env {}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		return new Response('Hello World!');
	},
};

export class SumEntrypoint extends WorkerEntrypoint {
	sum(a: number, b: number) {
		return a + b;
	}
}
