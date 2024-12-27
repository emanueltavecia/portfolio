'use client'
import { experiences } from '@/data/experiences'
import { useScrollToTopOnPageLoad } from '@/utils/scroll-to-top'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Calendar, Building2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function Experience() {
  useScrollToTopOnPageLoad()

  return (
    <div className="my-10 flex flex-col gap-10 px-5">
      <div className="relative">
        <h2 className="text-3xl font-bold tracking-tight dark:text-white md:text-4xl">
          Experiência Profissional
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          Minha jornada profissional e principais realizações
        </p>
      </div>

      <div className="relative flex flex-col gap-8">
        {experiences.map((experience, i) => (
          <Card
            key={experience.id}
            className={`group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${i === 0 ? 'shadow-lg dark:bg-gray-900/90' : 'dark:bg-gray-900/50'}`}
          >
            <CardContent className="p-6 md:px-8">
              <div className="flex flex-col gap-4 md:gap-6">
                <div className="flex items-center justify-between gap-4 sm:items-start">
                  <div className="flex items-start gap-4">
                    <div className="relative h-10 w-36">
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

                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-300 dark:hover:bg-blue-900/30"
                    >
                      {experience.type}
                    </Badge>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white md:text-2xl">
                    {experience.position}
                  </h3>
                </div>

                <div className="flex flex-col gap-2.5 text-sm text-gray-600 dark:text-gray-400 md:gap-3 md:text-base">
                  <div className="flex items-center gap-2">
                    <Building2 className="size-4 md:size-5" />
                    <span>{experience.company}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="size-4 md:size-5" />
                    <span>{experience.location}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar className="size-4 md:size-5" />
                    <span>
                      {experience.startDate} - {experience.endDate}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-justify text-gray-700 dark:text-gray-300 md:text-lg">
                    {experience.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
