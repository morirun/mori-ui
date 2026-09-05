<script lang="ts">
  import { Separator as SeparatorPrimitive } from "bits-ui";
  import type { ComponentProps } from "svelte";
  import { cn } from "../utils/cn.js";

  let {
    class: className = "",
    orientation = "horizontal",
    ...rest
  }: ComponentProps<typeof SeparatorPrimitive.Root> = $props();
</script>

<SeparatorPrimitive.Root
  {orientation}
  class={cn(
    "shrink-0 bg-border",
    orientation === "vertical" ? "h-full w-px" : "h-px w-full",
    className
  )}
  {...rest}
/>
