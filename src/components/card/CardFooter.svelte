<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import type { Snippet } from "svelte";
  import { cn } from "../../utils/cn.js";

  let {
    class: className = "",
    children,
    ...rest
  }: HTMLAttributes<HTMLDivElement> & { children?: Snippet } = $props();
</script>

<div class={cn("flex items-center p-6 pt-0", className)} {...rest}>
  {@render children?.()}
</div>
