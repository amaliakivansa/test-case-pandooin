"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import TheNavbar from "@/components/atoms/TheNavbar";
import TheFooter from "@/components/atoms/TheFooter";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function ClientRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <QueryClientProvider client={queryClient}>
          <TheNavbar />
          {children}
          <TheFooter />
        </QueryClientProvider>
      </body>
    </html>
  );
}
