<script lang="ts">
  import { Dialog as DialogPrimitive } from "bits-ui";
  import type { ComponentProps, Snippet } from "svelte";
  import { cn } from "../../utils/cn.js";

  let {
    class: className = "",
    children,
    ...rest
  }: ComponentProps<typeof DialogPrimitive.Description> & { children?: Snippet } = $props();
</script>

<DialogPrimitive.Description
  class={cn("text-sm text-muted-foreground", className)}
  {...rest}
>
  {@render children?.()}
</DialogPrimitive.Description>
