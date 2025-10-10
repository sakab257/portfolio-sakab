'use client'

import {Input, TextArea} from '@/components/contact/input'
import {Button} from '@/components/contact/button'
import React, { useState } from 'react'
import Mail from '@/components/contact/mail'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [error, setError] = useState('')

  const handleSubmit = () => {
    // Validation
    if (!formData.name.trim()) {
      setError('Veuillez renseigner votre nom')
      return
    }
    if (!formData.email.trim()) {
      setError('Veuillez renseigner votre email')
      return
    }
    if (!formData.subject.trim()) {
      setError('Veuillez renseigner l\'objet du message')
      return
    }
    if (!formData.message.trim()) {
      setError('Veuillez renseigner votre message')
      return
    }

    setError('')

    // Construct email body with user info
    const emailBody = `${formData.message}\n\nNom: ${formData.name}`
    const mailtoLink = `mailto:salim.bouskine@dauphine.eu?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`
    window.location.href = mailtoLink
  }

  return (
    <div className='w-full h-full'>
      <h1 className="w-full text-4xl md:text-5xl xl:text-6xl font-bold text-center mb-3">
        Vous souhaitez me <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CBACF9] to-[#D4B7FF]">contacter</span> ?
      </h1>
      <p className="text-center text-[#C1C2D3]/70 text-sm md:text-base mb-8">
        Remplissez le formulaire ci-dessous pour m'envoyer un mail automatiquement
      </p>
      <div className='w-full h-full flex flex-col gap-4 mt-6'>
        <Input
          placeholder='Votre nom'
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        <Input
          placeholder='Votre email'
          type='email'
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        <Input
          placeholder='Objet'
          value={formData.subject}
          onChange={(e) => setFormData({...formData, subject: e.target.value})}
        />
        <TextArea
          placeholder='Votre message'
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
        />
        {error && (
          <p className='text-center text-red-400 text-sm'>
            {error}
          </p>
        )}
        <Button onClick={handleSubmit}>
          Envoyer le message
        </Button>
        <Mail />
      </div>
    </div>
  )
}

export default ContactPage