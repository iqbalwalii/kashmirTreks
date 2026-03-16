"use client";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import SSRProvider from "react-bootstrap/SSRProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SSRProvider>
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
        minBreakpoint="xxs"
      >
        {children}
      </ThemeProvider>
    </SSRProvider>
  );
}
