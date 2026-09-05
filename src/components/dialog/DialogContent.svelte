<script lang="ts">
  import { Dialog as DialogPrimitive } from "bits-ui";
  import { X } from "@lucide/svelte";
  import type { ComponentProps, Snippet } from "svelte";
  import { cn } from "../../utils/cn.js";

  let {
    class: className = "",
    children,
    ...rest
  }: ComponentProps<typeof DialogPrimitive.Content> & { children?: Snippet } = $props();
</script>

<DialogPrimitive.Portal>
  <DialogPrimitive.Overlay
    class={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0"
    )}
  />
  <DialogPrimitive.Content
    class={cn(
      "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg sm:rounded-xl data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
      className
    )}
    {...rest}
  >
    {@render children?.()}
    <DialogPrimitive.Close
      class={cn(
        "absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background disabled:pointer-events-none"
      )}
    >
      <X class="size-4" />
      <span class="sr-only">Close</span>
    </DialogPrimitive.Close>
  </DialogPrimitive.Content>
</DialogPrimitive.Portal>
