
import { education } from '@/data/education'
import { EducationCard } from './education-card'

export function Education() {
  return (
    <div id="education" className="pt-7">
      <h2 className="mb-5 text-2xl font-bold text-center md:text-left">
        Educação
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
        {education.map((education) => (
          <EducationCard key={education.course} education={education} />
        ))}
      </div>
    </div>
  )
}
