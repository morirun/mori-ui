import { Dialog as DialogPrimitive } from "bits-ui";

import Content from "./DialogContent.svelte";
import Description from "./DialogDescription.svelte";
import Footer from "./DialogFooter.svelte";
import Header from "./DialogHeader.svelte";
import Title from "./DialogTitle.svelte";

const Root = DialogPrimitive.Root;
const Trigger = DialogPrimitive.Trigger;
const Close = DialogPrimitive.Close;

export { Root, Trigger, Close, Content, Title, Description, Header, Footer };
