<script lang="ts">
  import { Dialog as DialogPrimitive, type WithoutChildrenOrChild } from "bits-ui";
  import { X } from "@lucide/svelte";
  import type { ComponentProps, Snippet } from "svelte";
  import { cn } from "../../utils/cn.js";
  import Button from "../Button.svelte";

  let {
    ref = $bindable(null),
    class: className,
    portalProps,
    children,
    showCloseButton = true,
    ...restProps
  }: WithoutChildrenOrChild<DialogPrimitive.ContentProps> & {
    portalProps?: WithoutChildrenOrChild<ComponentProps<typeof DialogPrimitive.Portal>>;
    children?: Snippet;
    showCloseButton?: boolean;
  } = $props();
</script>

<DialogPrimitive.Portal {...portalProps}>
  <DialogPrimitive.Overlay
    data-slot="dialog-overlay"
    class={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0"
    )}
  />
  <DialogPrimitive.Content
    bind:ref
    data-slot="dialog-content"
    class={cn(
      "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg outline-none sm:rounded-xl data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
      className
    )}
    {...restProps}
  >
    {@render children?.()}
    {#if showCloseButton}
      <DialogPrimitive.Close data-slot="dialog-close">
        {#snippet child({ props })}
          <Button variant="ghost" size="icon-sm" class="absolute right-4 top-4" {...props}>
            <X class="size-4" />
            <span class="sr-only">Close</span>
          </Button>
        {/snippet}
      </DialogPrimitive.Close>
    {/if}
  </DialogPrimitive.Content>
</DialogPrimitive.Portal>
