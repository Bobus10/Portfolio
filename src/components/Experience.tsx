import { education, experience } from '@/../constants'

export default function Experience() {
  return (
    <div className='text-white'>
      <div className='flex flex-col gap-5'>
        <p className='text-2xl underline underline-offset-1'>
          * Experience *
        </p>
        {experience.map((exp, index) => {
          return (
            <div key={index} className='flex flex-col'>
              <p className='text-lg'>
                * {exp.companyName}
              </p>
              <p className='flex flex-col sm:flex-row'>
                <span className=''>
                  {exp.position} &nbsp;
                </span>
                <span>
                  {`${exp.monthStart}.${exp.yearStart} - ${exp.monthEnd}.${exp.yearEnd}`}
                </span>
              </p>
              <p className='text-body'>
                {exp.duties}
              </p>
            </div>
          )
        })}
        <p className='text-2xl underline underline-offset-1'>
          * Education *
        </p>
        {education.map((edu, index) => {
          return (
            <div key={index} className='flex flex-col'>
              <p className='text-lg'>
                * {edu.universityName}
              </p>
              <p className='flex flex-col sm:flex-row'>
                <span className=''>
                  {edu.fieldOfStudy} {edu.academicTitle}&nbsp;
                </span>
                <span>
                  {`${edu.monthStart}.${edu.yearStart} - ${edu.monthEnd}.${edu.yearEnd}`}
                </span>
              </p>
              <p className='text-body'>
                {/* {edu.description} */}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}