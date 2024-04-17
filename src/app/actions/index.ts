"use server"
import { cookies } from 'next/headers';

export const setThemeCookie = async (theme: string) => {
    if (theme) {
      await cookies().set('mode', theme)
    }
  }
  