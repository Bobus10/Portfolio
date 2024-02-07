"use client"

import { copy } from '#/constants/icons'
import { email } from '#/constants'

import Image from 'next/image'

const CopyBtn= () => {
  
  const copyEmail = () => {
    const cpEmail = email.email;
    navigator.clipboard.writeText(cpEmail)
    .then(() => {
        alert(`Copied text: ` + cpEmail);
    })
    .catch(err => {
        console.error(`An error occurred while copying to the clipboard: ${err}`);
        alert(`Text copy error: ${err}`);
    });
  }

  return (
    <button type="button" className="button-contact" onClick={copyEmail}>
      <Image
        src={copy.src}
        alt={copy.label}
        width={30}
        height={30}
      />
    </button>
  )
}

export default CopyBtn;