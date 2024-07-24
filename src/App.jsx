// import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ModeToggle } from "./components/mode-toggle"
import { GridPattern} from "./components/magicui/animated-grid-pattern"
const App = () => {
  return (
    <div>
        <ModeToggle/>
        <GridPattern/>
<Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. 
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Username
            </Label>
            <Input
              id="name"
              defaultValue="Enter username"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Password
            </Label>
            <Input
              id="username"
              defaultValue="Enter password"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Login</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>


    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Register</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create An Account</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. 
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Username
            </Label>
            <Input
              id="name"
              defaultValue="Enter username"
              className="col-span-3"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Email
            </Label>
            <Input
              id="username"
              defaultValue="Enter Email"
              className="col-span-3"
            />
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Password
            </Label>
            <Input
              id="username"
              defaultValue="Enter password"
              className="col-span-3"
            />
          </div>

        </div>
        <DialogFooter>
          <Button type="submit">Register</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

  
    </div>
  )
}

export default App