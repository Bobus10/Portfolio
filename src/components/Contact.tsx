import { contacts, cv, email } from "#/constants"
import { filePdf } from '#/constants/icons'
import Image from "next/image"
import Link from "next/link"
import React from 'react'
import CopyBtn from "./CopyBtn"

export default function Contact() {
  return (
    <div className="flex flex-col justify-center gap-8 items-center text-center">
        <p className='text-head'>
            Contact
        </p>
        <div className="flex flex-col items-start text-center justify-center gap-4">
            {/* Open CV */}
            <div className="contact-container">
                <p className="contact-text">
                    My CV: 
                </p>
                <Link
                    href={cv.route}
                    key={cv.label}
                    target="_blank"
                    >
                    <button type="button" className="button-contact">
                        <Image
                            src={filePdf.src}
                            alt={filePdf.label}
                            width={24}
                            height={24}
                        />
                    </button>
                </Link>
            </div>
            {/* Copy Email */}
            <div className="contact-container">
                <p className="contact-text">
                    Copy Email: 
                </p>
                <p>
                    {email.email}
                </p>
                <CopyBtn />
            </div>
            <div className="contact-container">
                <p className="contact-text">
                    Socials: 
                </p>
                {contacts.map((contact) => {
                    return (
                        <Link
                        href={contact.route}
                        key={contact.label}
                        target="_blank"
                        className="p-2"
                        >
                            <Image
                                src={contact.src}
                                alt={contact.label}
                                width={30}
                                height={30}
                                />
                        </Link>
                    )
                })}
            </div>
        </div>
    </div>
  )
}
