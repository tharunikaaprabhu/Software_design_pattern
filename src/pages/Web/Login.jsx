// // import * as React from "react"
// import { Button } from "@/components/ui/button"
// import {Link} from 'react-router-dom'
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"


// const Login = () => {
//   return (
//     <div className="h-full w-full flex justify-center items-center">

//        <Card className="w-[350px]">
//       <CardHeader>
//         <CardTitle>Login</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <form>
//           <div className="grid w-full items-center gap-4">
//             <div className="flex flex-col space-y-1.5">
//               <Label htmlFor="name">Username</Label>
//               <Input id="name" placeholder="Enter username" />
//             </div>
//             <div className="flex flex-col space-y-1.5">
//               <Label htmlFor="framework">Password</Label>
//               <Input id="password" placeholder="Enter password" />
//             </div>
//             <p>Don't have Account ? 
//             <Link to='/Register'> Register</Link>
//             </p>
//           </div>
//         </form>
//       </CardContent>
//       <CardFooter className="flex justify-between">
//   <Button>
//           Login</Button>
//       </CardFooter>
//     </Card>
//     </div>
//   )
// }

// export default Login

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here, e.g., API call to authenticate user
    // If login is successful:
    toast.success('Login successful!');
  };

  return (
    <div className="h-full w-full flex justify-center items-center">
      <Toaster position="botom-right"/>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Username</Label>
                <Input 
                  id="username" 
                  placeholder="Enter username" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  placeholder="Enter password" 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <p>Don't have an account? 
                <Link to='/Register'> Register</Link>
              </p>
            </div>
            <CardFooter className="flex justify-between mt-4">
              <Button type="submit">Login</Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
