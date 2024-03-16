import { cn } from "./ui/utils.ts";
import { Lucide, Simple } from "./icons";
import { Octokit } from "octokit";
import { config } from 'dotenv'

config()

// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: process.env.TOKEN_GIT
});

const repos = await octokit.request('/users/{username}/repos', {
  username: 'Anthonyzok521',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
});

const projects = {
  icon: Simple.IconGitRepository || Lucide.IconImage,
};

export default () => {
  return (
    <div className="flex items-center justify-center p-4 md:p-5 xl:p-6 w-full h-80 overflow-auto">
      <ul className="grid grid-cols-1 gap-3 w-full h-full">
        {repos.data.map((project) => {
          return (
            <li key={project.name} className="flex items-center">
              <a
                href={project.html_url}
                className={cn(
                  "group",
                  "flex items-center justify-between px-4 py-3 w-full",
                  "bg-neutral-2 hover:bg-neutral-3",
                  "outline-none border border-neutral-4 hover:border-neutral-6 rounded-3xl",
                  "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-7 focus-visible:ring-offset-neutral-1"
                )}
                target="_blank"
                aria-label="Open">
                  
                <div className="flex flex-row items-stretch gap-5 pl-2">
                  <div className="flex items-center justify-center">
                    <projects.icon
                      size={24}
                      className="transition duration-300 group-hover:-translate-y-1 text-neutral-10 group-hover:text-neutral-11"
                    />
                  </div>

                  <div>
                    <h3 className="transition duration-300 group-hover:translate-x-1 text-neutral-12 text-sm">{project.name}</h3>
                    <div className="transition duration-300 group-hover:translate-x-px text-neutral-10 group-hover:text-neutral-11 text-xs">
                      {project.description}
                    </div>
                  </div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
