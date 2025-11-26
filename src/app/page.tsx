'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { ArrowRight, Shield, Zap, Lock } from 'lucide-react';

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push('/dashboard');
    }
  }, [user, loading, router]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <nav className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-primary-600">TaskFlow</div>
          <div className="space-x-4">
            <button
              onClick={() => router.push('/login')}
              className="px-4 py-2 text-gray-700 hover:text-primary-600 transition"
            >
              Login
            </button>
            <button
              onClick={() => router.push('/register')}
              className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Manage Your Tasks
          <span className="block text-primary-600 mt-2">Efficiently & Securely</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          A modern, scalable task management application with secure authentication
          and real-time updates. Built with Next.js and Express.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => router.push('/register')}
            className="px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition flex items-center gap-2 text-lg font-semibold"
          >
            Start Free Trial
            <ArrowRight size={20} />
          </button>
          <button
            onClick={() => router.push('/login')}
            className="px-8 py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition text-lg font-semibold"
          >
            Sign In
          </button>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="text-primary-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Secure Authentication</h3>
            <p className="text-gray-600">
              JWT-based authentication with bcrypt password hashing ensures your data is protected.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="text-primary-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
            <p className="text-gray-600">
              Built with Next.js and optimized for performance with server-side rendering.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <Lock className="text-primary-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Protected Routes</h3>
            <p className="text-gray-600">
              Role-based access control ensures users only see what they're authorized to access.
            </p>
          </div>
        </div>
      </section>

      <footer className="container mx-auto px-6 py-8 text-center text-gray-600">
        <p>© 2025 TaskFlow.</p>
      </footer>
    </main>
  );
}
