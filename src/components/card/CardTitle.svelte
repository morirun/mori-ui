<script lang="ts">
  import { cn } from "../../utils/cn.js";
  import type { WithElementRef } from "../../utils/types.js";
  import type { HTMLAttributes } from "svelte/elements";

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> = $props();
</script>

<h3
  bind:this={ref}
  data-slot="card-title"
  class={cn("font-semibold leading-none tracking-tight", className)}
  {...restProps}
>
  {@render children?.()}
</h3>
