import * as Dialog from '@radix-ui/react-dialog';

const DialogBox: React.FC<{
  triggerChild: React.ReactNode;
  portalChild: React.ReactNode;
    open?: boolean;
    setOpen?: (open: boolean) => void;
}> = ({ triggerChild, portalChild, open, setOpen }) => {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{triggerChild}</Dialog.Trigger>
      {portalChild}
    </Dialog.Root>
  );
};

export default DialogBox;
