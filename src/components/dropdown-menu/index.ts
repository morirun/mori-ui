import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";

import Content from "./DropdownMenuContent.svelte";
import Item from "./DropdownMenuItem.svelte";
import Separator from "./DropdownMenuSeparator.svelte";

const Root = DropdownMenuPrimitive.Root;
const Trigger = DropdownMenuPrimitive.Trigger;

export { Root, Trigger, Content, Item, Separator };
