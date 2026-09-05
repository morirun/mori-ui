<script lang="ts">
  import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";
  import type { ComponentProps, Snippet } from "svelte";
  import { cn } from "../../utils/cn.js";

  let {
    class: className = "",
    sideOffset = 4,
    children,
    ...rest
  }: ComponentProps<typeof DropdownMenuPrimitive.Content> & { children?: Snippet } = $props();
</script>

<DropdownMenuPrimitive.Portal>
  <DropdownMenuPrimitive.Content
    {sideOffset}
    class={cn(
      "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
      className
    )}
    {...rest}
  >
    {@render children?.()}
  </DropdownMenuPrimitive.Content>
</DropdownMenuPrimitive.Portal>
