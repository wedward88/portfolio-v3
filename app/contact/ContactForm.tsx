'use client';

import { motion } from 'motion/react';
import { FormEvent, useState } from 'react';

import { sendGAEvent } from '@next/third-parties/google';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

const ContactForm = () => {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!FORMSPREE_ID) {
      setStatus('error');
      setErrorMessage(
        'Contact form is not configured yet. Please email will@wedward.com directly.'
      );
      return;
    }

    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus('submitting');
    setErrorMessage('');
    sendGAEvent('event', 'contactFormSubmit');

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(
          result?.errors?.[0]?.message || 'Something went wrong. Please try again.'
        );
      }

      form.reset();
      setStatus('success');
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.'
      );
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className='mt-8 flex w-full max-w-xl flex-col gap-5'
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeOut', duration: 0.45, delay: 0.1 }}
    >
      <label className='form-control w-full'>
        <span className='label-text mb-1.5 text-base-content/70'>Name</span>
        <input
          type='text'
          name='name'
          required
          autoComplete='name'
          placeholder='Your name'
          className='input input-bordered w-full bg-base-100'
          disabled={status === 'submitting'}
        />
      </label>

      <label className='form-control w-full'>
        <span className='label-text mb-1.5 text-base-content/70'>Email</span>
        <input
          type='email'
          name='email'
          required
          autoComplete='email'
          placeholder='you@example.com'
          className='input input-bordered w-full bg-base-100'
          disabled={status === 'submitting'}
        />
      </label>

      <label className='form-control w-full'>
        <span className='label-text mb-1.5 text-base-content/70'>Message</span>
        <textarea
          name='message'
          required
          rows={6}
          placeholder='What can I help with?'
          className='textarea textarea-bordered w-full resize-y bg-base-100 text-base'
          disabled={status === 'submitting'}
        />
      </label>

      {/* Formspree honeypot */}
      <input
        type='text'
        name='_gotcha'
        className='hidden'
        tabIndex={-1}
        autoComplete='off'
        aria-hidden
      />

      <button
        type='submit'
        className='btn btn-primary mt-2 w-full sm:w-fit'
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? (
          <span className='loading loading-spinner loading-sm' />
        ) : (
          'Send message'
        )}
      </button>

      {status === 'success' && (
        <p className='text-success' role='status'>
          Thanks — your message is on its way. I&apos;ll get back to you soon.
        </p>
      )}
      {status === 'error' && (
        <p className='text-error' role='alert'>
          {errorMessage}
        </p>
      )}
    </motion.form>
  );
};

export default ContactForm;
