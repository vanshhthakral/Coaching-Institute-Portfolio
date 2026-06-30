import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Check, Clock, Users, BookOpen } from "lucide-react";
import { courses } from "@/data/courses";

export default async function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = courses.find((c) => c.id === id);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <Link href="/" className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold mb-8 transition-colors">
          <ChevronLeft className="w-5 h-5" /> Back to Home
        </Link>

        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
          <div className="relative h-64 md:h-96 w-full bg-gray-200">
            <Image
              src={course.thumbnail}
              alt={course.title}
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-500 text-white font-bold text-xs uppercase tracking-wider mb-4">
                {course.badge}
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold font-heading">{course.title}</h1>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2 space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-heading">About this Program</h2>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {course.description}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-heading">Key Features</h2>
                  <ul className="space-y-4">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                          <Check className="w-3.5 h-3.5 text-green-600" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-heading">Subjects Covered</h2>
                  <div className="flex flex-wrap gap-3">
                    {course.subjects.map((subject, i) => (
                      <span key={i} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold">
                        {subject}
                      </span>
                    ))}
                  </div>
                </section>
              </div>

              <div className="md:col-span-1">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 sticky top-24">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 font-heading">Course Details</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Instructor</p>
                        <p className="font-bold text-gray-900">{course.instructor}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Duration</p>
                        <p className="font-bold text-gray-900">{course.duration}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Batch Size</p>
                        <p className="font-bold text-gray-900">{course.students}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-2">Fee Structure</p>
                    <div className="text-4xl font-extrabold text-brand-900">{course.fee}</div>
                    
                    <Link href="/#contact" className="mt-6 block w-full bg-brand-600 hover:bg-brand-700 text-white text-center py-4 rounded-xl font-bold transition-colors">
                      Enquire Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
