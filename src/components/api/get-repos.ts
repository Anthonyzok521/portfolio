import { Octokit } from "octokit";
import { config } from 'dotenv';

config()

// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
    auth: process.env.TOKEN_GIT
});

export const repository = await octokit.request('/users/{username}/repos', {
    username: 'Anthonyzok521',
    headers: {
        'X-GitHub-Api-Version': '2022-11-28'
    }
});;