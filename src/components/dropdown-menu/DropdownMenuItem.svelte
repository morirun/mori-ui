<script lang="ts">
  import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";
  import type { ComponentProps, Snippet } from "svelte";
  import { cn } from "../../utils/cn.js";

  let {
    class: className = "",
    inset = false,
    children,
    ...rest
  }: ComponentProps<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
    children?: Snippet;
  } = $props();
</script>

<DropdownMenuPrimitive.Item
  class={cn(
    "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    inset && "pl-8",
    className
  )}
  {...rest}
>
  {@render children?.()}
</DropdownMenuPrimitive.Item>
