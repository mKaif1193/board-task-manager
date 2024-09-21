import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ConvexClientProvider from "@/providers/convex-client-provider";
import { Toaster } from "@/components/ui/sonner";
import ModalProvider from "@/providers/modal-provider";
import { Suspense } from "react";
import Loading from "@/components/auth/Loading";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Board Task Manager - Organize and Track Your Tasks with Ease",
  description:
    "Board Task Manager is a sleek and efficient task management app, built with Next JS. It allows you to group your tasks in different boards, follow up on progress, establish priorities and deadlines everything in one place. Board Task Manager has been designed with an easy-to-use drag-and-drop interface which comes along with real-time updates and responsive design to make sure that you never miss any assignment irrespective of your device. They're your savior — for yourself or collaborating with a team, they're where the action happens in terms of staying on track and keeping organized.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={<Loading />}>
          <ConvexClientProvider>
            <Toaster />
            <ModalProvider />
            {children}
          </ConvexClientProvider>
        </Suspense>
      </body>
    </html>
  );
}
