'use client'
import { experiences } from '@/data/experiences'
import { useScrollToTopOnPageLoad } from '@/utils/scroll-to-top'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Building2, MapPin, Calendar } from 'lucide-react'

export default function Experience() {
  useScrollToTopOnPageLoad()

  return (
    <div className="my-10 flex flex-col gap-8 px-5">
      <h2 className="text-3xl font-bold tracking-tight dark:text-white">
        Experiência Profissional
      </h2>

      <div className="grid gap-6 md:grid-cols-1">
        {experiences.map((experience) => (
          <Card
            key={experience.id}
            className="group transition-all duration-300 hover:shadow-lg dark:bg-gray-900/50 dark:hover:bg-gray-900/80"
          >
            <CardContent className="p-6">
              <div className="flex flex-col gap-3 md:gap-5">
                <div className="flex items-center justify-between gap-2 md:items-start">
                  <div className="rounded-md bg-slate-100 px-2.5 dark:bg-gray-800">
                    <div className="relative h-10 w-32 overflow-hidden sm:h-12 sm:w-36">
                      <Image
                        src={experience.logo}
                        alt={`Logo da empresa ${experience.company}`}
                        className="object-contain brightness-[0.2] dark:brightness-100"
                        fill
                        priority
                        fetchPriority="high"
                      />
                    </div>
                  </div>
                  <span className="text-nowrap rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                    {experience.type}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white md:text-2xl">
                  {experience.position}
                </h3>

                <div className="flex flex-col gap-2.5 text-sm text-gray-600 dark:text-gray-400 md:text-base">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 md:h-5 md:w-5" />
                    <span>{experience.company}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 md:h-5 md:w-5" />
                    <span>{experience.location}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 md:h-5 md:w-5" />
                    <span>
                      {experience.startDate} - {experience.endDate}
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 md:text-lg">
                  {experience.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
