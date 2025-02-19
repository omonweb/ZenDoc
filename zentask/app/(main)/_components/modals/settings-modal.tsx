"use client";

import { Dialog, DialogContent, DialogTitle, DialogHeader } from "@/components/ui/dialog";
import { useSettings } from "@/hooks/use-settings";
import { Label } from "@/components/ui/label"
import { ModeToggle } from "@/components/mode-toggle";


export const  SettingsModal = () => {
    const settings = useSettings();
    
    return (
        <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
            <DialogContent>
                <DialogHeader>
                <DialogTitle className="border-b pb-3 text-lg font-medium">
                        My settings
                </DialogTitle>
                </DialogHeader>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-y-1 ">
                        <Label>
                            Appearence
                        </Label>
                        <span className="text-[0.8rem] text-muted-foreground">
                            Customize how ZenHub looks on your device
                        </span>
                    </div>
                    <ModeToggle />
                </div>
            </DialogContent>
        </Dialog>
    )
}