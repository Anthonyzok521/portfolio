import { group } from "../utils.ts";

export default group({
  base: {
    root: "inline-flex items-center justify-center align-middle select-none",
    fallback: "flex items-center justify-center size-full bg-neutral-2 text-neutral-11",
    image: "w-80 h-80 object-cover rounded-[inherit]",
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
