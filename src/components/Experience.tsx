import { education, experience } from '@/../constants'

export default function Experience() {
  return (
    <div className='text-white'>
      <div className='flex flex-col gap-5'>
        <p className='text-2xl'>
          * Experience *
        </p>
        {experience.map((exp, index) => {
          return (
            <div className='flex flex-col'>
              <p className='text-lg'>
                * {exp.companyName}
              </p>
              <p>
                <span className=''>{exp.position} </span>
                {`${exp.monthStart}.${exp.yearStart} - ${exp.monthEnd}.${exp.yearEnd}`}
              </p>
              <p className='text-body'>
                {exp.duties}
              </p>
            </div>
          )
        })}
        <p className='text-2xl'>
          * Education *
        </p>
        {education.map((edu) => {
          return (
            <div className='flex flex-col'>
              <p className='text-lg'>
                * {edu.universityName}
              </p>
              <p>
                <span className=''>
                  {edu.fieldOfStudy} {edu.academicTitle}&nbsp;
                </span>
                {`${edu.monthStart}.${edu.yearStart} - ${edu.monthEnd}.${edu.yearEnd}`}
              </p>
              <p className='text-body'>
                {edu.description}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}