<script lang="ts">
  import { Label as LabelPrimitive } from "bits-ui";
  import { cn } from "../utils/cn.js";

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: LabelPrimitive.RootProps = $props();
</script>

<LabelPrimitive.Root
  bind:ref
  data-slot="label"
  class={cn(
    "flex select-none items-center text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 group-data-[disabled=true]:pointer-events-none",
    className
  )}
  {...restProps}
/>
