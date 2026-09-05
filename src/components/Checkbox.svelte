<script lang="ts">
  import { Checkbox as CheckboxPrimitive } from "bits-ui";
  import { Check, Minus } from "@lucide/svelte";
  import type { ComponentProps } from "svelte";
  import { cn } from "../utils/cn.js";

  let {
    class: className = "",
    checked = $bindable(false),
    ...rest
  }: ComponentProps<typeof CheckboxPrimitive.Root> = $props();
</script>

<CheckboxPrimitive.Root
  bind:checked
  class={cn(
    "peer size-4 shrink-0 rounded-sm border border-primary shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
    className
  )}
  {...rest}
>
  {#snippet children({ checked: isChecked, indeterminate: isIndeterminate })}
    <span class="flex items-center justify-center text-current">
      {#if isIndeterminate}
        <Minus class="size-3.5" />
      {:else if isChecked}
        <Check class="size-3.5" />
      {/if}
    </span>
  {/snippet}
</CheckboxPrimitive.Root>
