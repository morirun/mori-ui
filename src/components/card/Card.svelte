<script lang="ts">
  import { cn } from "../../utils/cn.js";
  import type { WithElementRef } from "../../utils/types.js";
  import type { HTMLAttributes } from "svelte/elements";

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>, HTMLDivElement> = $props();
</script>

<div
  bind:this={ref}
  data-slot="card"
  class={cn("rounded-xl border bg-card text-card-foreground shadow-sm", className)}
  {...restProps}
>
  {@render children?.()}
</div>
