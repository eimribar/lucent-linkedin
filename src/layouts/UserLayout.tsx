import { ReactNode } from "react";

interface UserLayoutProps {
  children: ReactNode;
}

// Dedicated environment for signed-in user flows: clean, focused, same language as onboarding
const UserLayout = ({ children }: UserLayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {children}
    </div>
  );
};

export default UserLayout;
