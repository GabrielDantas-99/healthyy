import Link from "next/link"
import { cn } from "@/lib/utils"

// INFO: Aplicando conceito de Composition Pattern

export type SidebarGenericProps<T = any> = {
  children: React.ReactNode
  className?: string
} & T

export function Sidebar({ className, children }: SidebarGenericProps) {
  return (
    <aside className={cn(['border-r border-border flex flex-col space-y-6 w-1/5', className])}>
      {children}
    </aside>
  )
}

export function SidebarHeader({ className, children }: SidebarGenericProps) {
  return (
    <header className={cn(['p-6 border-b border-border', className])}>
      {children}
    </header>
  )
}

export function SidebarHeaderTitle({ className, children }: SidebarGenericProps) {
  return (
    <h2 className={cn(['', className])}>
      {children}
    </h2>
  )
}

export function SidebarMain({ className, children }: SidebarGenericProps) {
  return (
    <main className={cn(['px-3', className])}>
      {children}
    </main>
  )
}

export function SidebarNav({ className, children }: SidebarGenericProps) {
  return (
    <nav className={cn(['', className])}>
      {children}
    </nav>
  )
}

export function SidebarNavHeader({ className, children }: SidebarGenericProps) {
  return (
    <header className={cn(['', className])}>
      {children}
    </header>
  )
}

export function SidebarNavHeaderTitle({ className, children }: SidebarGenericProps) {
  return (
    <h4 className={cn(['text-md uppercase text-muted-foreground ml-3', className])}>
      {children}
    </h4>
  )
}

export function SidebarNavMain({ className, children }: SidebarGenericProps) {
  return (
    <main className={cn(['flex flex-col space-y-2 mt-2', className])}>
      {children}
    </main>
  )
}

type SidebarNavLinkProps = {
  href: string,
  active?: boolean
}

export function SidebarNavLink({ className, children, href, active }: SidebarGenericProps<SidebarNavLinkProps>) {
  return (
    <Link href={href} className={cn([
      'flex items-center text-md py-4 px-10 rounded-lg transition gap-6',
      active ? 'active-link' : 'hover:bg-secondary',
      className
    ])}>
      {children}
    </Link>
  )
}

export function SidebarFooter({ className, children }: SidebarGenericProps) {
  return (
    <footer className={cn(['p-6 mt-auto border-t border-border', className])}>
      {children}
    </footer>
  )
}