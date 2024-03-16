import { cn } from "./ui/utils.ts";
import { Simple } from "./icons";

const stacks = [
  {
    name: "GIMP",
    category: "Desing",
    icon: Simple.IconGIMP,
    url: "https://www.gimp.org/",
  },
  {
    name: "Figma",
    category: "Design Mockup",
    icon: Simple.IconFigma,
    url: "https://www.figma.com",
  },
  {
    name: "Blender",
    category: "Design 3D",
    icon: Simple.IconBlender,
    url: "https://www.blender.org",
  },
  {
    name: "Rive",
    category: "Design",
    icon: Simple.IconRive,
    url: "https://rive.app",
  },
  {
    name: "SQL",
    category: "Data Base",
    icon: Simple.IconSQL,
    url: "https://www.w3schools.com/sql/",
  },
  {
    name: "MongoDB",
    category: "Data Base No-SQL",
    icon: Simple.IconMongoDB,
    url: "https://www.mongodb.com/",
  },
  {
    name: "Android",
    category: "Environment",
    icon: Simple.IconAndroid,
    url: "https://developer.android.com/",
    
  },
  {
    name: "Linux",
    category: "Operating System",
    icon: Simple.IconLinux,
    url: "https://www.kali.org/",
  },
  {
    name: "Windows",
    category: "Operating System",
    icon: Simple.IconWindows,
    url: "https://www.microsoft.com",
  },
  {
    name: "Notion",
    category: "Productivity",
    icon: Simple.IconNotion,
    url: "https://www.notion.so",
  },
  {
    name: "C++",
    category: "Programming Language",
    icon: Simple.IconCpp,
    url: "https://cplusplus.com/",
  },
  {
    name: "C#",
    category: "Programming Language",
    icon: Simple.IconCsharp,
    url: "https://dotnet.microsoft.com/",
  },
  {
    name: "Python",
    category: "Programming Language",
    icon: Simple.IconPython,
    url: "https://www.python.org",
  },
  {
    name: "Kotlin",
    category: "Programming Language",
    icon: Simple.IconKotlin,
    url: "https://www.kotlinlang.org",
  },
  {
    name: "Javascript",
    category: "Programming Language",
    icon: Simple.IconJavascript,
    url: "https://www.w3schools.com/js/DEFAULT.asp",
  },
  {
    name: "HTML",
    category: "Markup Language",
    icon: Simple.IconHTML,
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    category: "Style Language",
    icon: Simple.IconCSS,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "Express",
    category: "Framework Back-End",
    icon: Simple.IconExpress,
    url: "https://www.expressjs.com",
  },
];

export default () => {
  return (
    <div className="flex items-center justify-center p-4 md:p-5 xl:p-6 w-full h-80 overflow-auto">
      <ul className="grid grid-cols-2 gap-3 w-full h-full">
        {stacks.map((stack) => {
          return (
            <li key={stack.name} className="flex items-center">
              <a
                href={stack.url}
                className={cn(
                  "group",
                  "flex items-center justify-between px-4 py-3 w-full",
                  "bg-neutral-2 hover:bg-neutral-3",
                  "outline-none border border-neutral-4 hover:border-neutral-6 rounded-3xl",
                  "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-7 focus-visible:ring-offset-neutral-1"
                )}
                target="_blank"
                aria-label="Open"
              >
                <div className="flex flex-row items-stretch gap-5 pl-2">
                  <div className="flex items-center justify-center">
                    <stack.icon
                      size={24}
                      className="transition duration-300 group-hover:-translate-y-1 text-neutral-10 group-hover:text-neutral-11"
                    />
                  </div>

                  <div>
                    <h3 className="transition duration-300 group-hover:translate-x-1 text-neutral-12 text-sm">{stack.name}</h3>
                    <div className="transition duration-300 group-hover:translate-x-px text-neutral-10 group-hover:text-neutral-11 text-xs">
                      {stack.category}
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
