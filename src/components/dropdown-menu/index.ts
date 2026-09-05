import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";

import Content from "./DropdownMenuContent.svelte";
import Item from "./DropdownMenuItem.svelte";
import Separator from "./DropdownMenuSeparator.svelte";

const Root = DialogOrMenuRoot();
const Trigger = DropdownMenuPrimitive.Trigger;

function DialogOrMenuRoot() {
  return DropdownMenuPrimitive.Root;
}

export { Root, Trigger, Content, Item, Separator };
