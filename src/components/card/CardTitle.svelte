<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import type { Snippet } from "svelte";
  import { cn } from "../../utils/cn.js";

  let {
    class: className = "",
    children,
    ...rest
  }: HTMLAttributes<HTMLHeadingElement> & { children?: Snippet } = $props();
</script>

<h3 class={cn("font-semibold leading-none tracking-tight", className)} {...rest}>
  {@render children?.()}
</h3>
