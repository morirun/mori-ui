<script lang="ts">
  import { Tooltip as TooltipPrimitive } from "bits-ui";
  import type { ComponentProps, Snippet } from "svelte";
  import { cn } from "../../utils/cn.js";

  let {
    class: className = "",
    sideOffset = 4,
    children,
    ...rest
  }: ComponentProps<typeof TooltipPrimitive.Content> & { children?: Snippet } = $props();
</script>

<TooltipPrimitive.Portal>
  <TooltipPrimitive.Content
    {sideOffset}
    class={cn(
      "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95",
      className
    )}
    {...rest}
  >
    {@render children?.()}
  </TooltipPrimitive.Content>
</TooltipPrimitive.Portal>
