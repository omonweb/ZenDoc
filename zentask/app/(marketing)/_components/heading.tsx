"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import Link from "next/link";

export const Heading = () => {
    const { isAuthenticated, isLoading } = useConvexAuth()
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-6xl md:text-6xl font-bold">
                Your Ideas, Documents, & Plans. Organized. Welcome to <span className="underline"> ZenHub</span>
            </h1>
            <h3 className="text-base sm:text-3xl md:tet-2xl font-medium">
                ZenDoc provides a connected workspace where <br />
                better, faster work happens.
            </h3>
            {isLoading && (
                <div className="w-full flex items-center justify-center">
                <Spinner size="lg"/>
                </div>
            )}
            {isAuthenticated && !isLoading && (
                <Button asChild>
                    <Link href="/documents">
                Enter ZenHub
                <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
            </Button>
            )}
            {!isAuthenticated && !isLoading && (
                <SignInButton mode="modal">
                    <Button>
                        Get ZenDoc free
                        <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                </SignInButton>
            )}
            

        </div>
    )
}