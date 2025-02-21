"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-800 to-black flex items-center justify-center p-4">
      <Card className="max-w-lg w-full p-8 space-y-6 shadow-xl rounded-lg">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-gray-900">TaskFlow AI</h1>
          <p className="text-gray-700">
            Intelligent task management powered by AI
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="grid gap-4">
            <Link href="/auth/login">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105" size="lg">
                Login
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button variant="outline" className="w-full border-blue-600 hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out transform hover:scale-105" size="lg">
                Create Account
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Features
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-center text-sm">
            <div className="p-4 rounded-lg bg-white/50 shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="font-medium text-gray-800">AI-Powered</h3>
              <p className="text-gray-600">Smart task suggestions</p>
            </div>
            <div className="p-4 rounded-lg bg-white/50 shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="font-medium text-gray-800">Real-time</h3>
              <p className="text-gray-600">Live updates</p>
            </div>
            <div className="p-4 rounded-lg bg-white/50 shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="font-medium text-gray-800">Collaborative</h3>
              <p className="text-gray-600">Team management</p>
            </div>
            <div className="p-4 rounded-lg bg-white/50 shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="font-medium text-gray-800">Secure</h3>
              <p className="text-gray-600">JWT authentication</p>
            </div>
          </div>
        </div>
      </Card>
    </main>
  );
}