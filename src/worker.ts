export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const paths = new URL(request.url).pathname.split('/');
		if (paths.length !== 3) {
			return new Response('Wrong request', { status: 400 });
		}
		const workflowId = paths[1];
		const workflowPR = paths[2];
		return Response.redirect(
			`https://prerelease-registry.ixion-labs.workers.dev/james-elicx/package-manager-manager/runs/${workflowId}/npm-package-package-manager-manager-${workflowPR}`,
			301
		);
	},
};
