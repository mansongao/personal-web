'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="heading-1">
              <span className="text-gradient">你好，我是</span>
              <br />
              <span className="mt-3 block">Manson.Gao</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              我是一名全栈开发者，专注于创建优雅且用户友好的web应用。
              我热爱编程，并且一直在学习新的技术。
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#projects"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                查看我的项目
              </a>
              <a href="#contact" className="text-sm font-semibold leading-6 text-gray-900">
                联系我 <span aria-hidden="true">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <h2 className="heading-2">技术栈</h2>
            <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Docker', 'AWS', 'MongoDB'].map((skill) => (
                <div
                  key={skill}
                  className="relative group"
                >
                  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-lg font-medium text-gray-900">{skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <h2 className="heading-2">精选项目</h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((project) => (
                <div
                  key={project}
                  className="group relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200">
                    <div className="h-48 w-full bg-gray-200" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900">项目 {project}</h3>
                    <p className="mt-2 text-sm text-gray-600">
                      这是一个示例项目描述，展示了项目的主要功能和特点。
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 