<script lang="ts">
  import { Checkbox as CheckboxPrimitive, type WithoutChildrenOrChild } from "bits-ui";
  import { Check, Minus } from "@lucide/svelte";
  import { cn } from "../utils/cn.js";

  let {
    ref = $bindable(null),
    checked = $bindable(false),
    indeterminate = $bindable(false),
    class: className,
    ...restProps
  }: WithoutChildrenOrChild<CheckboxPrimitive.RootProps> = $props();
</script>

<CheckboxPrimitive.Root
  bind:ref
  bind:checked
  bind:indeterminate
  data-slot="checkbox"
  class={cn(
    "peer size-4 shrink-0 rounded-sm border border-primary shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
    className
  )}
  {...restProps}
>
  {#snippet children({ checked: isChecked, indeterminate: isIndeterminate })}
    <div
      data-slot="checkbox-indicator"
      class="grid place-content-center text-current transition-none"
    >
      {#if isChecked}
        <Check class="size-3.5" />
      {:else if isIndeterminate}
        <Minus class="size-3.5" />
      {/if}
    </div>
  {/snippet}
</CheckboxPrimitive.Root>
