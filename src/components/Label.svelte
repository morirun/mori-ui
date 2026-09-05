<script lang="ts">
  import { Label as LabelPrimitive } from "bits-ui";
  import type { ComponentProps, Snippet } from "svelte";
  import { cn } from "../utils/cn.js";

  let {
    class: className = "",
    children,
    ...rest
  }: ComponentProps<typeof LabelPrimitive.Root> & { children?: Snippet } = $props();
</script>

<LabelPrimitive.Root
  class={cn(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
    className
  )}
  {...rest}
>
  {@render children?.()}
</LabelPrimitive.Root>
