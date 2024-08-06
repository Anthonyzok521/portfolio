import { group } from "../utils.ts";

export default group({
  base: {
    root: "inline-flex items-center justify-center align-middle select-none",
    fallback: "flex items-center justify-center size-full bg-neutral-2 text-neutral-11",
    image: "md:w-80 md:h-80 w-64 h-64/2 object-cover rounded-[inherit]",
  },
  variants: {
    size: {
      md: {
        root: "w-80 h-80",
        fallback: "text-base",
      },
      unset: {},
    },
  },
  defaults: {
    size: "md",
  },
});
