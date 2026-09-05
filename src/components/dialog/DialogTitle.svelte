<script lang="ts">
  import { Dialog as DialogPrimitive } from "bits-ui";
  import type { ComponentProps, Snippet } from "svelte";
  import { cn } from "../../utils/cn.js";

  let {
    class: className = "",
    children,
    ...rest
  }: ComponentProps<typeof DialogPrimitive.Title> & { children?: Snippet } = $props();
</script>

<DialogPrimitive.Title
  class={cn("text-lg font-semibold leading-none tracking-tight", className)}
  {...rest}
>
  {@render children?.()}
</DialogPrimitive.Title>
