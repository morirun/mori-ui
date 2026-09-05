<script lang="ts" module>
  import { tv, type VariantProps } from "tailwind-variants";

  export const badgeVariants = tv({
    base: "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring",
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  });

  export type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];
</script>

<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import type { Snippet } from "svelte";
  import { cn } from "../utils/cn.js";

  interface Props extends HTMLAttributes<HTMLDivElement> {
    variant?: BadgeVariant;
    children?: Snippet;
  }

  let { variant = "default", class: className = "", children, ...rest }: Props = $props();
</script>

<div class={cn(badgeVariants({ variant }), className)} {...rest}>
  {@render children?.()}
</div>
