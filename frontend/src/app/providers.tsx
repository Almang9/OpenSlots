'use client' // <-- Important!
import {NextUIProvider} from '@nextui-org/react'
import { Navbar,
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button } from "@nextui-org/react";
export default function Providers({ children }:any) {
  // Add other providers nested here as needed
  return (
    <NextUIProvider>
      <main className="dark text-foreground bg-background">
      <Navbar>
      <NavbarBrand>
      <Link href="/">OPEN SLOTS</Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarItem>
          <Link href="shifts-management" color="foreground" >
            Shifts
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="employee-management" aria-current="page">
            Employees
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>        
      </Navbar>
      {children}
      </main>
    </NextUIProvider>
  )
}